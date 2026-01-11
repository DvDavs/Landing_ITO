# Landing Page - XXXI Encuentro Nacional de Escoltas y Bandas de Guerra TecNM 2026

Landing page profesional para el XXXI Encuentro Nacional de Escoltas y Bandas de Guerra del Tecnológico Nacional de México 2026, sede Instituto Tecnológico de Oaxaca.

## 🚀 Características

### Diseño Profesional
- **Diseño Moderno y Responsive**: Optimizado para todos los dispositivos
- **View Transitions API**: Transiciones suaves entre páginas
- **Navegación Intuitiva**: Header sticky con menú responsive
- **Animaciones Profesionales**: Efectos visuales cuidados y elegantes

### Páginas Implementadas

1. **Inicio** (`/`)
   - Hero section con flyer del evento
   - Comunicado oficial del TecNM
   - Secciones destacadas de características
   - Información logística
   - Call to action

2. **Información del Evento** (`/evento`)
   - Datos completos del encuentro
   - Programa general por días
   - Disciplinas competitivas
   - Valores del evento
   - Timeline interactivo

3. **Escuelas Participantes** (`/escuelas`)
   - 40 institutos tecnológicos clasificados
   - Búsqueda en tiempo real
   - Filtros por región (Norte, Centro, Sur)
   - Información detallada de cada institución
   - Estadísticas regionales

4. **Hoteles y Hospedaje** (`/hoteles`)
   - Tabla comparativa de 7 hoteles
   - Información detallada por hotel
   - Tarifas preferenciales
   - Servicios y ubicaciones
   - Consejos para reservar

5. **Sedes y Municipios** (`/sedes`)
   - 8 municipios anfitriones
   - Historia y cultura de cada sede
   - Lugares de interés turístico
   - Mapa de ubicaciones
   - Patrimonio cultural de Oaxaca

6. **Galería** (`/galeria`)
   - Galería de imágenes profesional
   - Filtros por categoría
   - Lightbox modal con navegación
   - Carga optimizada de imágenes

7. **Registro** (`/registro`)
   - Información del proceso de registro
   - Requisitos para delegaciones
   - Fechas importantes
   - Preguntas frecuentes
   - Canales oficiales de contacto

### Componentes Profesionales

- **Header**: Navegación sticky con menú hamburguesa responsive
- **Footer**: Footer institucional con enlaces y contacto
- **Layout Base**: Sistema de layout con View Transitions

### Tecnologías

- **Astro**: Framework principal para sitio estático
- **TypeScript**: Type safety en scripts
- **CSS Moderno**: Variables CSS, Grid, Flexbox
- **Fonts**: Montserrat + Playfair Display (Google Fonts)

## 📦 Estructura del Proyecto

```
site/
├── public/
│   └── images/
│       ├── logos/          # Logos institucionales
│       ├── escoltas/       # Imágenes de escoltas y bandas
│       ├── hoteles/        # Fotos de hoteles
│       ├── sedes/          # Mapas y ubicaciones
│       └── flyer.jpg       # Flyer del evento
├── src/
│   ├── components/
│   │   ├── Header.astro    # Navegación principal
│   │   └── Footer.astro    # Footer institucional
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base con view transitions
│   ├── pages/
│   │   ├── index.astro     # Página principal
│   │   ├── evento.astro    # Información del evento
│   │   ├── escuelas.astro  # Escuelas participantes
│   │   ├── hoteles.astro   # Hoteles y hospedaje
│   │   ├── sedes.astro     # Sedes y municipios
│   │   ├── galeria.astro   # Galería de imágenes
│   │   └── registro.astro  # Información de registro
│   ├── data/
│   │   ├── schools.json    # Datos de 40 escuelas
│   │   ├── hotels.json     # Datos de hoteles
│   │   └── venues.json     # Datos de municipios
│   └── styles/
│       └── global.css      # Estilos globales
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🛠️ Instalación y Desarrollo

### Requisitos
- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Navegar a la carpeta del proyecto
cd site

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### Comandos Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de build
npm run astro        # CLI de Astro
```

## 🎨 Diseño y Estilos

### Colores Institucionales
- **Primary**: #8B1538 (Guinda TecNM)
- **Secondary**: #C5A572 (Dorado)
- **Accent**: #004B8D (Azul institucional)

### Tipografía
- **Headings**: Playfair Display (serif elegante)
- **Body**: Montserrat (sans-serif moderna)

### Características de Diseño
- Sistema de diseño consistente
- Componentes reutilizables
- Responsive design (mobile-first)
- Animaciones y transiciones suaves
- Accesibilidad optimizada
- SEO optimizado

## 📱 Responsive Design

El sitio está completamente optimizado para:
- **Desktop**: 1280px+
- **Tablet**: 768px - 1279px
- **Mobile**: < 768px

## ⚡ Optimizaciones

- **Performance**: Sitio estático de carga rápida
- **SEO**: Meta tags optimizados en cada página
- **Images**: Lazy loading automático
- **Code Splitting**: Carga optimizada de JavaScript
- **View Transitions**: Navegación fluida entre páginas

## 🚀 Deployment

### Build para Producción

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

### Hosting Recomendado
- **Netlify**: Deploy automático desde Git
- **Vercel**: Optimizado para Astro
- **GitHub Pages**: Hosting gratuito
- **Cloudflare Pages**: CDN global

## 📄 Licencia

Proyecto desarrollado para el Instituto Tecnológico de Oaxaca y el Tecnológico Nacional de México.

## 🤝 Contribuciones

Para reportar problemas o sugerencias, contacta a los administradores del proyecto.

---

**Desarrollado con ❤️ para el XXXI Encuentro Nacional de Escoltas y Bandas de Guerra TecNM 2026**
