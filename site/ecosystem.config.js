module.exports = {
  apps: [
    {
      name: 'landing-ito',
      // Opción 1: Usar servidor Node.js personalizado (más confiable)
      script: 'server.js',
      cwd: '/var/www/Landing_ITO/site',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOST: '0.0.0.0'
      },
      error_file: '/root/.pm2/logs/landing-ito-error.log',
      out_file: '/root/.pm2/logs/landing-ito-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
    // Opción 2: Usar serve (comentado, usar si prefieres esta opción)
    // {
    //   name: 'landing-ito',
    //   script: 'npx',
    //   args: 'serve -s dist -l 3000 -n',
    //   cwd: '/var/www/Landing_ITO/site',
    //   instances: 1,
    //   autorestart: true,
    //   watch: false,
    //   max_memory_restart: '1G',
    //   env: {
    //     NODE_ENV: 'production',
    //     PORT: 3000,
    //     HOST: '0.0.0.0'
    //   },
    //   error_file: '/root/.pm2/logs/landing-ito-error.log',
    //   out_file: '/root/.pm2/logs/landing-ito-out.log',
    //   log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    // }
  ]
};

