# 🚀 Guía Rápida de Inicio

## Pasos para ejecutar el sitio web:

### 1. Abrir terminal en la carpeta del proyecto

Navega a la carpeta `site`:

```powershell
cd "c:\Users\lugas\Landing - ITO\site"
```

### 2. Instalar dependencias (solo la primera vez)

```powershell
npm install
```

### 3. Ejecutar servidor de desarrollo

```powershell
npm run dev
```

### 4. Abrir en el navegador

El servidor se ejecutará en: **http://localhost:4321**

Abre tu navegador y ve a esa dirección.

---

## 🛑 Detener el servidor

Presiona `Ctrl + C` en la terminal donde está corriendo el servidor.

---

## 📦 Compilar para producción

Cuando el sitio esté listo para publicarse:

```powershell
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

---

## 🔍 Ver sitio compilado

Para previsualizar la versión de producción:

```powershell
npm run preview
```

---

## ❓ Solución de Problemas

### El servidor no inicia

1. Verifica que estés en la carpeta correcta: `Landing - ITO\site`
2. Ejecuta `npm install` de nuevo
3. Verifica que Node.js esté instalado: `node --version`

### Cambios no se reflejan

1. Detén el servidor (Ctrl + C)
2. Ejecuta `npm run dev` de nuevo
3. Recarga la página en el navegador (F5 o Ctrl + R)

### Puerto 4321 ocupado

Si el puerto está ocupado, Astro te ofrecerá otro puerto automáticamente.

---

## 📂 Estructura Importante

```
site/
├── src/
│   ├── components/    → Componentes del sitio
│   ├── data/          → Datos JSON (escuelas, hoteles, sedes)
│   ├── pages/         → Páginas del sitio
│   └── styles/        → Estilos CSS
│
└── public/
    └── images/        → Imágenes y recursos
```

---

## 🎯 Siguiente Paso

Una vez que el servidor esté corriendo, abre tu navegador en:

**http://localhost:4321**

¡Y disfruta del sitio! 🎉
