#!/bin/bash

# Script de configuración rápida para el servidor
# Ejecutar como root: sudo bash setup-server.sh

echo "🔧 Configurando servidor para Landing ITO..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en /var/www/Landing_ITO/site"
    exit 1
fi

# Detener proceso actual si existe
echo "📦 Deteniendo proceso actual de PM2..."
pm2 stop landing-ito 2>/dev/null || true
pm2 delete landing-ito 2>/dev/null || true

# Verificar que dist existe, si no, compilar
if [ ! -d "dist" ]; then
    echo "⚠️  El directorio dist/ no existe. Compilando..."
    npm run build
    if [ $? -ne 0 ]; then
        echo "❌ Error al compilar el proyecto"
        exit 1
    fi
fi

# Iniciar con PM2 usando la configuración
echo "🚀 Iniciando aplicación con PM2..."
pm2 start ecosystem.config.cjs

if [ $? -ne 0 ]; then
    echo "❌ Error al iniciar PM2"
    exit 1
fi

# Guardar configuración de PM2
pm2 save

echo "✅ Aplicación iniciada con PM2"
echo ""
echo "📊 Estado de PM2:"
pm2 status

echo ""
echo "🔍 Verificando puerto 3000..."
sleep 3
if ss -tlnp | grep -q ":3000"; then
    echo "✅ Puerto 3000 está escuchando"
    ss -tlnp | grep ":3000"
    echo ""
    echo "🌐 Probando conexión local..."
    curl -s -o /dev/null -w "HTTP Status: %{http_code}\n" http://localhost:3000 || echo "⚠️  No se pudo conectar"
else
    echo "⚠️  Puerto 3000 no está escuchando. Revisa los logs: pm2 logs landing-ito"
fi

echo ""
echo "📝 Próximos pasos:"
echo "1. Configura Nginx como proxy reverso:"
echo "   sudo cp ../../nginx-landing-ito.conf /etc/nginx/sites-available/landing-ito"
echo "   sudo ln -s /etc/nginx/sites-available/landing-ito /etc/nginx/sites-enabled/"
echo "   sudo nginx -t"
echo "   sudo systemctl restart nginx"
echo ""
echo "2. Verifica los logs: pm2 logs landing-ito"
echo "3. Prueba localmente: curl http://localhost:3000"
echo "4. Prueba desde fuera: curl http://147.182.206.143"

