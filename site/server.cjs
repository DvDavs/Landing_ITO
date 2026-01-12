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

function serveFile(filePath, res) {
  const mimeType = getMimeType(filePath);
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(data);
  });
}

function getFilePath(urlPath) {
  // Si es la raíz o termina en /, servir index.html
  if (urlPath === '/' || urlPath.endsWith('/')) {
    return path.join(DIST_DIR, 'index.html');
  }
  
  // Intentar servir el archivo directamente
  let filePath = path.join(DIST_DIR, urlPath);
  
  // Si el archivo no existe y no tiene extensión, intentar como HTML
  if (!fs.existsSync(filePath) && !path.extname(filePath)) {
    filePath = path.join(DIST_DIR, urlPath, 'index.html');
    if (!fs.existsSync(filePath)) {
      filePath = path.join(DIST_DIR, urlPath + '.html');
    }
  }
  
  return filePath;
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const filePath = getFilePath(urlPath);
  
  // Verificar que el archivo está dentro del directorio dist
  const resolvedPath = path.resolve(filePath);
  const distResolved = path.resolve(DIST_DIR);
  
  if (!resolvedPath.startsWith(distResolved)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }
  
  serveFile(filePath, res);
});

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});

server.on('error', (err) => {
  console.error('Server error:', err);
  process.exit(1);
});

