// Servidor HTTP simple para servir archivos estáticos
// Alternativa más confiable que 'serve' para producción
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const DIST_DIR = path.join(__dirname, 'dist');

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'font/otf',
  '.webp': 'image/webp',
  '.pdf': 'application/pdf'
};

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

function serveFile(filePath, res, urlPath) {
  // Verificar si el archivo existe antes de intentar leerlo
  if (!fs.existsSync(filePath)) {
    console.log(`404: ${urlPath} -> ${filePath} (no existe)`);
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404 Not Found</title></head><body><h1>404 Not Found</h1><p>La página solicitada no existe.</p></body></html>');
    return;
  }
  
  // Verificar que es un archivo, no un directorio
  const stats = fs.statSync(filePath);
  if (!stats.isFile()) {
    console.log(`404: ${urlPath} -> ${filePath} (es directorio)`);
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>404 Not Found</title></head><body><h1>404 Not Found</h1><p>La página solicitada no existe.</p></body></html>');
    return;
  }
  
  const mimeType = getMimeType(filePath);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(`Error leyendo archivo ${filePath}:`, err);
      res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>500 Error</title></head><body><h1>500 Internal Server Error</h1></body></html>');
      return;
    }
    
    console.log(`200: ${urlPath} -> ${filePath}`);
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
}

function getFilePath(urlPath) {
  // Limpiar la ruta: remover barra inicial y decodificar
  let cleanPath = urlPath.replace(/^\/+/, '').replace(/\/+$/, '');
  
  // Si es la raíz, servir index.html
  if (cleanPath === '' || cleanPath === 'index.html') {
    return path.join(DIST_DIR, 'index.html');
  }
  
  // Intentar servir el archivo directamente primero
  let filePath = path.join(DIST_DIR, cleanPath);
  
  // Si el archivo existe y es un archivo, servirlo
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return filePath;
  }
  
  // Si es un directorio, buscar index.html dentro
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    const indexPath = path.join(filePath, 'index.html');
    if (fs.existsSync(indexPath)) {
      return indexPath;
    }
  }
  
  // Si no tiene extensión, intentar como directorio con index.html
  if (!path.extname(cleanPath)) {
    const dirIndexPath = path.join(DIST_DIR, cleanPath, 'index.html');
    if (fs.existsSync(dirIndexPath)) {
      return dirIndexPath;
    }
    
    // Si no existe como directorio, intentar como archivo .html
    const htmlPath = path.join(DIST_DIR, cleanPath + '.html');
    if (fs.existsSync(htmlPath)) {
      return htmlPath;
    }
  }
  
  // Si nada funciona, devolver la ruta original para que dé 404
  return filePath;
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const filePath = getFilePath(urlPath);
  
  // Verificar que el archivo está dentro del directorio dist
  const resolvedPath = path.resolve(filePath);
  const distResolved = path.resolve(DIST_DIR);
  
  if (!resolvedPath.startsWith(distResolved)) {
    console.log(`403: ${urlPath} -> fuera del directorio permitido`);
    res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>403 Forbidden</title></head><body><h1>403 Forbidden</h1></body></html>');
    return;
  }
  
  serveFile(filePath, res, urlPath);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

