# 🎺 Landing Page - XXXI Encuentro Nacional de Escoltas y Bandas de Guerra TecNM 2026

Landing page institucional oficial para el **XXXI Encuentro Nacional de Escoltas y Bandas de Guerra del Tecnológico Nacional de México 2026**, organizado por el **Instituto Tecnológico de Oaxaca**.

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Instalación y Uso](#-instalación-y-uso)
- [Páginas y Secciones](#-páginas-y-secciones)
- [Datos y Contenido](#-datos-y-contenido)
- [Despliegue](#-despliegue)
- [Mantenimiento](#-mantenimiento)
- [Documentación Adicional](#-documentación-adicional)

---

## 🎯 Descripción del Proyecto

Este proyecto es una **landing page institucional** desarrollada para difundir información oficial del XXXI Encuentro Nacional de Escoltas y Bandas de Guerra del TecNM 2026. El sitio web tiene como objetivos:

- ✅ Difundir información oficial del evento
- ✅ Reconocer a las 40 escuelas participantes
- ✅ Proveer información logística (hoteles, sedes, municipios)
- ✅ Servir como punto central de consulta durante el evento
- ✅ Tener una base escalable para futuras ediciones

### Información del Evento

- **Nombre**: XXXI Encuentro Nacional de Escoltas y Bandas de Guerra del Tecnológico Nacional de México
- **Fechas**: 22 al 26 de febrero de 2026
- **Sede Principal**: Instituto Tecnológico de Oaxaca
- **Tipo**: Evento Nacional Cívico – Competitivo
- **Organizador**: Tecnológico Nacional de México

---

## ✨ Características

### Diseño y UX

- 🎨 **Diseño Moderno y Profesional**: Interfaz institucional limpia y elegante
- 📱 **Totalmente Responsive**: Optimizado para móviles, tablets y desktop
- ⚡ **Alto Rendimiento**: Sitio estático con carga rápida
- ♿ **Accesible**: Cumple con estándares WCAG 2.1
- 🔍 **SEO Optimizado**: Meta tags, Schema.org y structured data

### Funcionalidades

- 🔎 **Búsqueda en Tiempo Real**: Filtrado de escuelas participantes
- 🏨 **Comparador de Hoteles**: Tabla comparativa con tarifas y servicios
- 🗺️ **Información de Sedes**: 8 municipios anfitriones con datos culturales
- 📸 **Galería de Imágenes**: Carrusel y grid con lightbox
- 📊 **Estadísticas**: Información por regiones (Norte, Centro, Sur)

### Contenido

- 📚 **40 Instituciones Participantes**: Con información completa de cada una
- 🏨 **7 Hoteles**: Con tarifas, servicios y códigos de reserva
- 🏛️ **8 Municipios**: Información cultural e histórica
- 📄 **Comunicado Oficial**: Texto institucional del TecNM
- 🖼️ **Galería Visual**: Imágenes de escoltas y bandas

---

## 📁 Estructura del Proyecto

```
Landing - ITO/
│
├── site/                          # Proyecto Astro principal
│   ├── public/                    # Archivos estáticos
│   │   └── images/                # Imágenes y recursos
│   │       ├── logos/             # Logos institucionales
│   │       ├── escoltas/          # Fotos de escoltas y bandas
│   │       ├── hoteles/           # Fotos de hoteles
│   │       ├── sedes/             # Mapas y ubicaciones
│   │       └── flyer.jpg          # Flyer del evento
│   │
│   ├── src/
│   │   ├── components/            # Componentes Astro reutilizables
│   │   │   ├── Header.astro       # Navegación principal
│   │   │   ├── HeaderLogos.astro  # Logos institucionales
│   │   │   ├── HeroFlyer.astro    # Sección hero con flyer
│   │   │   ├── EventInfo.astro    # Información del evento
│   │   │   ├── OfficialStatement.astro  # Comunicado oficial
│   │   │   ├── SchoolsSection.astro     # Sección de escuelas
│   │   │   ├── HotelsSection.astro      # Sección de hoteles
│   │   │   ├── VenuesSection.astro      # Sección de sedes
│   │   │   ├── Gallery.astro            # Galería de imágenes
│   │   │   ├── RegistrationInfo.astro  # Información de registro
│   │   │   └── Footer.astro       # Footer institucional
│   │   │
│   │   ├── data/                  # Datos estructurados en JSON
│   │   │   ├── schools.json        # 40 instituciones participantes
│   │   │   ├── hotels.json         # 7 hoteles con tarifas
│   │   │   └── venues.json         # 8 municipios anfitriones
│   │   │
│   │   ├── layouts/
│   │   │   └── BaseLayout.astro   # Layout base con View Transitions
│   │   │
│   │   ├── pages/                 # Páginas del sitio
│   │   │   ├── index.astro        # Página principal
│   │   │   ├── evento.astro       # Información del evento
│   │   │   ├── escuelas.astro     # Escuelas participantes
│   │   │   ├── hoteles.astro      # Hoteles y hospedaje
│   │   │   ├── sedes.astro        # Sedes y municipios
│   │   │   ├── galeria.astro      # Galería de imágenes
│   │   │   └── registro.astro     # Información de registro
│   │   │
│   │   └── styles/
│   │       └── global.css         # Estilos globales y variables CSS
│   │
│   ├── astro.config.mjs           # Configuración de Astro
│   ├── package.json               # Dependencias y scripts
│   ├── tsconfig.json              # Configuración TypeScript
│   └── README.md                  # Documentación técnica del sitio
│
├── Hoteles/                       # Documentos y recursos de hoteles
├── Logo ITO/                      # Logos del Instituto Tecnológico de Oaxaca
├── Logo tecNM/                    # Logos del Tecnológico Nacional de México
├── Logo Bandas de guerra/         # Logos del evento
├── Fotos de escoltas/             # Imágenes adicionales
├── Sedes -Municipios/             # Información de sedes
├── Comunicado/                    # Comunicados oficiales
│
├── INSTRUCCIONES_DE_EJECUCION.md  # Guía rápida de inicio
├── Requerimientos.md              # Especificaciones del proyecto
├── RESUMEN_PROYECTO.md            # Resumen completo del proyecto
└── README.md                      # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

### Framework Principal

- **[Astro](https://astro.build)** v5.16.8
  - Framework moderno para sitios estáticos
  - Excelente rendimiento y SEO
  - Componentes reutilizables
  - View Transitions API

### Lenguajes y Herramientas

- **TypeScript**: Type safety en scripts
- **CSS Moderno**: Variables CSS, Grid, Flexbox
- **HTML5 Semántico**: Estructura accesible
- **JSON**: Datos estructurados

### Fuentes

- **Montserrat**: Tipografía sans-serif para cuerpo de texto
- **Playfair Display**: Tipografía serif para títulos

### Colores Institucionales

- **Guinda TecNM**: `#8B1538` (Primary)
- **Dorado**: `#C5A572` (Secondary)
- **Azul Institucional**: `#004B8D` (Accent)

---

## 🚀 Instalación y Uso

### Requisitos Previos

- **Node.js**: Versión 18 o superior
- **npm**: Gestor de paquetes (incluido con Node.js)

### Pasos de Instalación

1. **Navegar a la carpeta del proyecto**:
   ```bash
   cd site
   ```

2. **Instalar dependencias** (solo la primera vez):
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:4321
   ```

### Comandos Disponibles

```bash
npm run dev          # Servidor de desarrollo (http://localhost:4321)
npm run build        # Compilar para producción
npm run preview      # Vista previa de la versión compilada
npm run astro        # CLI de Astro
```

### Detener el Servidor

Presiona `Ctrl + C` en la terminal donde está corriendo el servidor.

---

## 📄 Páginas y Secciones

### 1. Página Principal (`/`)

- Hero section con flyer del evento
- Comunicado oficial del TecNM
- Información general del evento
- Enlaces rápidos a secciones principales
- Footer institucional

### 2. Información del Evento (`/evento`)

- Fechas y horarios
- Programa general por días
- Disciplinas competitivas
- Valores y objetivos del evento
- Timeline interactivo

### 3. Escuelas Participantes (`/escuelas`)

- **40 Institutos Tecnológicos** clasificados
- Búsqueda en tiempo real
- Filtros por región (Norte, Centro, Sur)
- Información detallada de cada institución:
  - Nombre oficial y corto
  - Región
  - Descripción institucional
  - Enlace a sitio web
  - Indicadores de Escolta y Banda
- Estadísticas regionales

### 4. Hoteles y Hospedaje (`/hoteles`)

- **7 Hoteles** con información completa
- Tabla comparativa de tarifas
- Información detallada por hotel:
  - Tarifas por tipo de habitación
  - Servicios incluidos
  - Ubicación y distancias
  - Códigos de reserva
  - Notas importantes
- Clasificación por categoría (económico, medio, alto)
- Disclaimers sobre disponibilidad

### 5. Sedes y Municipios (`/sedes`)

- **8 Municipios anfitriones**:
  - Oaxaca de Juárez
  - San Pablo Villa de Mitla
  - San Jacinto Amilpas
  - Santa Cruz Xoxocotlán
  - San Sebastián Tutla
  - Santa María El Tule
  - Cuilápam de Guerrero
  - Santa María Atzompa
- Información cultural e histórica
- Atractivos turísticos
- Información de presidentes municipales

### 6. Galería (`/galeria`)

- Galería de imágenes profesional
- Filtros por categoría
- Lightbox modal con navegación
- Carga optimizada de imágenes (lazy loading)
- Fotos de escoltas, bandas y eventos anteriores

### 7. Registro (`/registro`)

- Información del proceso de registro
- Requisitos para delegaciones
- Fechas importantes
- Preguntas frecuentes
- Canales oficiales de contacto
- ⚠️ **Nota**: El registro aún no es funcional, solo informativo

---

## 📊 Datos y Contenido

### Archivos de Datos

Los datos están estructurados en archivos JSON dentro de `site/src/data/`:

#### `schools.json`
Contiene información de las 40 instituciones participantes:
- Nombre oficial y corto
- Región (Norte, Centro, Sur)
- Descripción institucional
- Enlace a sitio web
- Indicadores de Escolta y Banda

#### `hotels.json`
Contiene información de los 7 hoteles:
- Nombre y categoría
- Tarifas por tipo de habitación
- Servicios incluidos
- Ubicación y dirección
- Contacto (teléfono, email, sitio web)
- Códigos de reserva
- Notas importantes

#### `venues.json`
Contiene información de los 8 municipios:
- Nombre del municipio
- Información histórica
- Atractivos turísticos
- Información del presidente municipal
- Notas culturales

### Actualización de Contenido

Para actualizar el contenido:

1. **Escuelas**: Edita `site/src/data/schools.json`
2. **Hoteles**: Edita `site/src/data/hotels.json`
3. **Municipios**: Edita `site/src/data/venues.json`
4. **Imágenes**: Reemplaza archivos en `site/public/images/`
5. **Texto**: Edita componentes en `site/src/components/`

---

## 🌐 Despliegue

### Compilar para Producción

```bash
cd site
npm run build
```

Los archivos compilados se generarán en la carpeta `site/dist/`

### Opciones de Hosting Recomendadas

1. **Vercel** (Recomendado)
   - Optimizado para Astro
   - Deploy automático desde Git
   - CDN global

2. **Netlify**
   - Deploy automático
   - Build optimizado
   - Formularios y funciones serverless

3. **GitHub Pages**
   - Hosting gratuito
   - Integración con repositorios Git

4. **Cloudflare Pages**
   - CDN global
   - Deploy rápido

5. **Servidor Propio**
   - Sube la carpeta `dist/` a tu servidor
   - Configura el servidor web (Apache/Nginx)

---

## 🔧 Mantenimiento

### Estructura Modular

El proyecto está diseñado para ser fácil de mantener:

- **Componentes reutilizables**: Modificaciones en un componente se reflejan en todas las páginas que lo usan
- **Datos separados**: El contenido está en archivos JSON, fácil de actualizar
- **Estilos centralizados**: Variables CSS para cambios rápidos de diseño

### Próximas Mejoras Sugeridas

- [ ] Implementar registro funcional
- [ ] Agregar sistema de brackets
- [ ] Integrar resultados en tiempo real
- [ ] Actualizar galería durante el evento
- [ ] Mapa interactivo de municipios
- [ ] Streaming en vivo (si aplica)
- [ ] Sistema de notificaciones
- [ ] Descarga de programa oficial

---

## 📚 Documentación Adicional

El proyecto incluye documentación adicional en la raíz:

- **[INSTRUCCIONES_DE_EJECUCION.md](./INSTRUCCIONES_DE_EJECUCION.md)**: Guía rápida de inicio paso a paso
- **[Requerimientos.md](./Requerimientos.md)**: Especificaciones detalladas del proyecto
- **[RESUMEN_PROYECTO.md](./RESUMEN_PROYECTO.md)**: Resumen completo del estado del proyecto
- **[site/README.md](./site/README.md)**: Documentación técnica del sitio web

---

## 🎨 Características de Diseño

### Responsive Design

El sitio está completamente optimizado para:

- **Mobile**: < 768px
- **Tablet**: 768px - 1279px
- **Desktop**: 1280px+

### Accesibilidad

- HTML5 semántico
- ARIA labels donde es necesario
- Alt texts en todas las imágenes
- Navegación por teclado
- Indicadores de foco visibles
- Contraste de colores adecuado

### SEO

- Meta tags optimizados en cada página
- Open Graph para redes sociales
- Schema.org structured data
- Sitemap automático
- URLs amigables

---

## 📞 Soporte y Contacto

Para mantenimiento o actualizaciones del sitio:

- Consulta la documentación en `site/README.md` para estructura técnica
- Los componentes en `site/src/components/` están documentados
- Los datos en `site/src/data/` son auto-explicativos

---

## 📝 Licencia

Proyecto desarrollado para el **Instituto Tecnológico de Oaxaca** y el **Tecnológico Nacional de México**.

---

## ✅ Estado del Proyecto

**Versión**: 1.0  
**Estado**: ✅ Completado y listo para revisión  
**Fecha**: Enero 2026

### Checklist de Entrega

- [x] Estructura de carpetas organizada
- [x] Todos los componentes funcionando
- [x] Datos JSON completos
- [x] Estilos institucionales aplicados
- [x] Responsive en todos los dispositivos
- [x] SEO implementado
- [x] Accesibilidad cumplida
- [x] README completo
- [x] Instrucciones de ejecución
- [x] Assets copiados y organizados
- [x] Servidor de desarrollo funcional
- [x] Build de producción verificado

---

## 🎉 ¡Proyecto Completado!

La landing page está lista para:

1. ✅ Revisión institucional
2. ✅ Ajustes de contenido (si necesarios)
3. ✅ Despliegue en producción
4. ✅ Uso durante el evento febrero 2026

---

**Desarrollado con ❤️ para el XXXI Encuentro Nacional de Escoltas y Bandas de Guerra TecNM 2026**

*Instituto Tecnológico de Oaxaca - Tecnológico Nacional de México*
