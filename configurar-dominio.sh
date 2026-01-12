#!/bin/bash

# Script para configurar dominio o subdominio en Nginx
# Uso: sudo bash configurar-dominio.sh ejemplo.com
#      sudo bash configurar-dominio.sh evento.oaxaca.tecnm.mx

if [ -z "$1" ]; then
    echo "❌ Error: Debes proporcionar el dominio o subdominio"
    echo "Uso: sudo bash configurar-dominio.sh ejemplo.com"
    echo "     sudo bash configurar-dominio.sh evento.oaxaca.tecnm.mx"
    exit 1
fi

DOMINIO=$1
CONFIG_FILE="/etc/nginx/sites-available/landing-ito"

echo "🌐 Configurando dominio/subdominio: $DOMINIO"

# Verificar que Nginx está instalado
if ! command -v nginx &> /dev/null; then
    echo "❌ Nginx no está instalado"
    exit 1
fi

# Crear archivo de configuración si no existe
if [ ! -f "$CONFIG_FILE" ]; then
    echo "📝 Creando archivo de configuración de Nginx..."
    sudo tee "$CONFIG_FILE" > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMINIO;

    # Tamaño máximo de archivos
    client_max_body_size 10M;

    # Logs
    access_log /var/log/nginx/landing-ito-access.log;
    error_log /var/log/nginx/landing-ito-error.log;

    # Configuración de proxy
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }

    # Cache para archivos estáticos
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        proxy_pass http://localhost:3000;
        proxy_set_header Host \$host;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
EOF
    echo "✅ Archivo de configuración creado"
    
    # Crear enlace simbólico si no existe
    if [ ! -L "/etc/nginx/sites-enabled/landing-ito" ]; then
        echo "🔗 Creando enlace simbólico..."
        sudo ln -s "$CONFIG_FILE" /etc/nginx/sites-enabled/landing-ito
    fi
else
    # Hacer backup de la configuración actual
    echo "📦 Creando backup de configuración actual..."
    sudo cp "$CONFIG_FILE" "${CONFIG_FILE}.backup.$(date +%Y%m%d_%H%M%S)"
    
    # Actualizar server_name en la configuración existente
    echo "✏️  Actualizando configuración de Nginx..."
    sudo sed -i "s/server_name.*;/server_name $DOMINIO;/" "$CONFIG_FILE"
fi

# Verificar configuración
echo "🔍 Verificando configuración de Nginx..."
if sudo nginx -t; then
    echo "✅ Configuración válida"
    
    # Reiniciar Nginx
    echo "🔄 Reiniciando Nginx..."
    sudo systemctl restart nginx
    
    if [ $? -eq 0 ]; then
        echo "✅ Nginx reiniciado correctamente"
        echo ""
        echo "📝 Próximos pasos:"
        
        # Detectar si es subdominio de oaxaca.tecnm.mx
        if [[ "$DOMINIO" == *".oaxaca.tecnm.mx" ]]; then
            echo "⚠️  NOTA: Este es un subdominio de oaxaca.tecnm.mx"
            echo "   Debes solicitar la configuración DNS al administrador del TecNM Oaxaca:"
            echo "   - Email: direccion@itoaxaca.edu.mx"
            echo "   - Tel: (951) 501 50 16"
            echo ""
            echo "   Información a proporcionar:"
            echo "   Tipo: A"
            echo "   Nombre: $(echo $DOMINIO | cut -d'.' -f1)"
            echo "   Valor: 147.182.206.143"
        else
            echo "1. Configura el DNS en tu proveedor de dominio:"
            echo "   Tipo: A"
            echo "   Nombre: @ (o www para subdominio)"
            echo "   Valor: 147.182.206.143"
        fi
        
        echo ""
        echo "2. Espera la propagación DNS (15 min - 48 horas)"
        echo ""
        echo "3. Verifica DNS:"
        echo "   dig $DOMINIO"
        echo ""
        echo "4. (Opcional) Configura SSL con Let's Encrypt:"
        echo "   sudo apt install certbot python3-certbot-nginx -y"
        echo "   sudo certbot --nginx -d $DOMINIO"
    else
        echo "❌ Error al reiniciar Nginx"
        exit 1
    fi
else
    echo "❌ Error en la configuración de Nginx"
    echo "Restaurando backup..."
    sudo cp "${CONFIG_FILE}.backup.*" "$CONFIG_FILE" 2>/dev/null || true
    exit 1
fi

