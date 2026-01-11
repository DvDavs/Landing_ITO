## Landing Page

### XXXI Encuentro Nacional de Escoltas y Bandas de Guerra del TecNM 2026

---

## 1. Objetivo del sitio

Crear una **landing page institucional** para el
**XXXI Encuentro Nacional de Escoltas y Bandas de Guerra del Tecnológico Nacional de México 2026**, con los siguientes fines:

* Difundir información oficial del evento
* Reconocer a las 40 escuelas participantes
* Proveer información logística (hoteles, sedes, municipios)
* Servir como punto central de consulta durante el evento
* Tener una base escalable para futuras ediciones

> ⚠️ El sitio es **principalmente informativo**, el registro aún no es funcional.

---

## 2. Tecnología propuesta

* **Framework:** Astro
* **Motivo:**

  * Sitio mayormente estático
  * Excelente rendimiento
  * SEO institucional
  * Fácil de escalar a secciones dinámicas después (brackets, resultados)
* **Componentización clara** por secciones
* **Preparado para crecer** sin rehacer estructura

---

## 3. Estructura general del sitio

```
/ (Landing)
│
├─ Logos
├─ Flyer (Hero visual)
├─ Información del Evento
├─ Comunicado Oficial
├─ Escuelas Participantes (40)
├─ Hoteles
├─ Sedes / Municipios
├─ Galería
├─ Registro (informativo)
└─ Footer institucional
```

---

## 4. Secciones detalladas

---

## 🧱 4.1 Logos (Header)

**Contenido**

* Logo del Evento
* Logo del Tecnológico Nacional de México
* Logo del Instituto Tecnológico de Oaxaca

**Reglas**

* Sin texto
* Altura controlada
* Responsive
* Enlazan a sitios oficiales (TecNM / ITO si se autoriza)

---

## 🧱 4.2 Flyer (Hero principal)

**Estado**

* Aún no oficial → se usará el flyer del año pasado como placeholder

**Implementación**

* Imagen grande
* Sin texto encima
* Debajo:

  * Botón: `Información del Evento`
  * Botón: `Escuelas Participantes`

> El flyer es **protagonista visual**, no interactivo.

---

## 🧱 4.3 Información del Evento

**Contenido clave**

* Nombre oficial del evento
* Fechas:

  * 📅 22 al 26 de febrero de 2026
* Sede principal:

  * Instituto Tecnológico de Oaxaca
* Tipo:

  * Evento Nacional Cívico – Competitivo
* Organizador:

  * Tecnológico Nacional de México

---

## 🧱 4.4 Comunicado Oficial

**Fuente:** Documento proporcionado

**Formato**

* Texto institucional destacado
* Puede ir dentro de un bloque con fondo suave
* Encabezado:

  > Comunicado Oficial del Tecnológico Nacional de México

**Texto base**

> *El Tecnológico Nacional de México felicita a todos los Institutos Tecnológicos Federales y Descentralizados que participaron…*

👉 Este bloque **da legitimidad y contexto oficial**.

---

## 🧱 4.5 Escuelas Participantes

**Cantidad:** 40 Institutos Tecnológicos
**Cada escuela tiene:**

* Escolta
* Banda de Guerra

### 📌 Estructura por escuela (Card o página modal)

**Datos**

* Nombre del Instituto
* Logo oficial
* Breve descripción (opcional / institucional)
* Link a sitio web (si existe)

**Multimedia**

* 1 o 2 fotos:

  * Banda de guerra
  * Escolta
    *(Si solo hay una, se usa para ambos)*

**UX**

* Grid con buscador o filtros
* Lazy loading (40 escuelas)

---

## 🧱 4.6 Hoteles

**Objetivo**

* Facilitar logística a delegaciones y acompañantes

### 📌 Vista principal

* Tabla comparativa resumida
* Precio desde
* Incluye desayuno (sí/no)
* Ubicación aproximada

### 📌 Vista detalle (modal o sección)

Por hotel:

* Nombre
* Fotos (si se proporcionaron)
* Tarifas
* Servicios
* Ubicación
* Observaciones importantes
* Link externo al hotel (si existe)
* Código de reserva (si aplica)

> ⚠️ Aclaración visible:
> *Las tarifas están sujetas a disponibilidad y vigencia.*

---

## 🧱 4.7 Sedes / Municipios

**Formato:** Lista visual bien presentada

### Municipios incluidos

* Oaxaca de Juárez
* San Pablo Villa de Mitla
* San Jacinto Amilpas
* Santa Cruz Xoxocotlán
* San Sebastián Tutla
* Santa María El Tule
* Cuilápam de Guerrero
* Santa María Atzompa

### 📌 Vista principal

* Logo del municipio
* Nombre
* Mapa pequeño
* Botón: `Conocer el municipio`

### 📌 Vista de detalle (sección o página)

* Historia breve
* Cultura
* Sitio emblemático (convento, templo, centro histórico)
* Mapa ampliado
* Fotos

👉 Esto funciona como **promoción cultural**, no solo logística.

---

## 🧱 4.8 Brackets / Resultados (opcional, baja prioridad)

**Estado**

* Idea futura
* No crítica para MVP

**Propuesta**

* En lugar de brackets complejos:

  * Tabla de posiciones
  * Indicadores por día
  * Etiqueta: *Resultados preliminares*

👉 Se deja preparado el espacio, no se implementa aún.

---

## 🧱 4.9 Galería

**Contenido**

* Carrusel de imágenes
* Fotos de:

  * Desfiles
  * Ceremonias
  * Bandas
  * Escoltas
  * Municipios

**UX**

* Carrusel + grid
* Lightbox

---

## 🧱 4.10 Registro (informativo)

**Estado**

* No funcional aún

**Contenido**

* Texto explicativo:

  > El proceso de registro se informará próximamente por los canales oficiales.
* QR de ejemplo
* Nota aclaratoria:

  > *QR solo ilustrativo*

---

## 🧱 4.11 Footer institucional

**Logos**

* Gobierno de México
* SEP
* TecNM
* Instituto Tecnológico de Oaxaca
* Gobierno del Estado (si aplica)

**Texto**

* Derechos reservados
* Año 2026

---

## 5. Contenido dinámico futuro (no MVP)

* Resultados en tiempo real
* Brackets
* Descarga de memorias
* Ediciones anteriores
* Streaming

---

## 6. Estado actual del proyecto

| Elemento       | Estado      |
| -------------- | ----------- |
| Estructura     | ✅ Definida  |
| Contenido base | ✅ Parcial   |
| Flyer oficial  | ⏳ Pendiente |
| Registro real  | ⏳ Pendiente |
| Resultados     | ⏳ Futuro    |

---

