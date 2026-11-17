# MVP — Acuerdos

> **Antes de trabajar, lee [COORDINACION.md](COORDINACION.md)** y los archivos de `coordinacion/`: ahí se reclaman las tareas para no duplicar trabajo.

Escribir solo lo acordado; si algo no está decidido, poner "pendiente".
*MVP* = producto mínimo viable: lo justo para mostrar en la demo. Ver la guía en [README.md](README.md).

> Nombre unificado: **Pukllay** ("Juega. Cuida. Deja mejor."). JuegaBarrio fue el nombre del primer borrador. Lo marcado como **(propuesto)** necesita confirmación del equipo.

- **Idea elegida:** Pukllay, "Juega. Cuida. Deja mejor." **(propuesto)**
- **Comportamiento del reto BCP:** cuidar los espacios públicos mediante un cierre responsable después de cada actividad
- **Usuario:** vecinos y organizadores que usan parques y losas deportivas, y la municipalidad que los administra
- **Problema:** hipótesis por validar: el cierre responsable (recoger residuos y dejar el espacio listo para el siguiente grupo) no se hace de forma constante ni tiene una coordinación sencilla. No hay datos de campo que midan su frecuencia
- **Recorrido principal de la demo:**
  1. El vecino explora el mapa, ve un espacio y crea o se une a una actividad con el compromiso "dejo el espacio limpio".
  2. Al llegar confirma su llegada con el QR del espacio y la cercanía aproximada (simulada en la demo).
  3. Al terminar hace el cierre: checklist de 3 toques, foto "después" y reporte de incidencia si hay un problema.
  4. El panel municipal actualiza el indicador y la racha de cuidado del espacio.
- **Máximo tres capacidades esenciales:**
  1. Unirse o crear una actividad en un horario habilitado, con compromiso de cuidado
  2. Check-in con QR y foto "antes"
  3. Cierre responsable y panel municipal con el indicador
- **Qué funcionará realmente:** crear y unirse a actividades en franjas habilitadas, propuestas de juegos con apoyos, check-in, cierre con fotos, incidencias, racha por espacio e indicador del panel (datos en `data/db.json`)
- **Qué se simulará:** la validación de ubicación, los 3 espacios y todos los vecinos, actividades en curso y rachas de ejemplo. La app lo indica con "datos simulados"
- **Fuera de alcance:** pagos, ranking público de personas, integración con sistemas municipales, notificaciones push reales, moderación automática de imágenes
- **Indicador de impacto:** % de actividades observadas que cumplen el cierre responsable (residuos recogidos, instalaciones cuidadas y espacio liberado a tiempo), con la misma lista de verificación antes y durante el piloto. Línea base: por medir en las semanas 2 y 3. Meta tentativa: +20 puntos porcentuales frente a la línea base. Detalle en `docs/canvas-pukllay.md`
- **Piloto 2027 (propuesto):** 8 semanas, 3 espacios de Los Olivos, 60 vecinos inscritos y 24 actividades en la fase de uso. Presupuesto tentativo de S/ 1,500 (sin cotizar). Alianza municipal por gestionar
- **Stack elegido:** servidor Node.js sin dependencias (`server.mjs`) y una sola página (`public/index.html`) con mapa Leaflet **(propuesto, ya funciona)**
- **Dónde se publica la demo:** https://win.crm-ia.org (Server TEC)
- **Integrantes:** Luis Fernando, Smith Bazan y Jackelin Soncco (según `Entrevista.md`); cuarto integrante: pendiente
- **Responsable de integración:** pendiente
- **Respaldo:** video de 90 segundos del recorrido (pendiente de grabar)

## Reparto por áreas (quién es dueño de qué)

Cada área tiene una sola persona dueña. Antes de tocar algo ajeno, se avisa al dueño. Los nombres en pendiente se completan hoy.

| Área | Dueño | Qué incluye | Fuente oficial |
|---|---|---|---|
| App y publicación en `win.crm-ia.org` | Equipo TecMasters (pendiente nombre) | Código, fotos de la app, publicar en Server TEC | `server.mjs`, `public/` |
| Canvas, plan de piloto y presupuesto | Fernando | Textos del canvas, piloto 2027, costos, indicador | `Entrevista.md` |
| Pitch de 90 s y diapositivas | pendiente (una persona) | Guion, ensayo, diapositivas | `docs/pitch-y-checklist.md` |
| Video de respaldo | pendiente | Grabar el recorrido de 90 s | — |
| Diseño visual | Decisión conjunta | Nombre y estilo Pukllay | `public/index.html` |
| Integración a `main` | Fernando (dueño del repo) | Revisar y fusionar los pull requests | — |

Reglas: una tarea activa por persona, una rama `tarea/...` por tarea, avisar por el grupo antes de empezar ("estoy haciendo X") y traer `main` a tu rama antes de empezar.

## Tareas

Estados: Pendiente → Haciendo → Revisar → Listo
Responsables: **Dev A, Dev B, Dev C** son los 3 integrantes de desarrollo y **Apoyo** es la persona de diseño y presentación. Falta poner nombres. Cada tarea va en su rama `tarea/...` y su issue en GitHub (textos en `docs/issues-tareas.md`).

| # | Tarea | Rama | Responsable | Depende de | Está lista cuando | Estado |
|---|---|---|---|---|---|---|
| 1 | Acordar este archivo (idea, nombre, stack, integrantes) | `tarea/propuesta-juegabarrio` | Todos | — | Los campos "propuesto" quedan confirmados por el equipo | Revisar |
| 2 | Base técnica (servidor Node), datos demo y API | `tarea/diseno-ciudad-viva` | Dev A | 1 | `node server.mjs` abre la app en `localhost:3000` | Listo |
| 3 | Explorar: mapa, buscador, filtros y fichas de espacio | `tarea/diseno-ciudad-viva` | Dev B | 2 | Se ven 3 espacios en el mapa y en la lista; al tocar uno se abre su ficha | Listo |
| 4 | Actividades: crear en franja habilitada, unirse con compromiso y propuestas | `tarea/diseno-ciudad-viva` | Dev B | 2 | El vecino crea, se une y apoya propuestas | Listo |
| 5 | Check-in con QR y foto "antes" | `tarea/diseno-ciudad-viva` | Dev C | 2 | Se registra la llegada desde la pantalla del QR | Listo |
| 6 | Cierre responsable: checklist y foto "después" | `tarea/diseno-ciudad-viva` | Dev C | 5 | La actividad pasa a completada y suma a la racha | Listo |
| 7 | Reporte de incidencia desde el cierre | `tarea/diseno-ciudad-viva` | Dev C | 6 | La incidencia aparece en el panel municipal | Listo |
| 8 | Panel municipal: indicador, racha e incidencias | `tarea/diseno-ciudad-viva` | Dev A | 2 | El % se actualiza tras un cierre | Listo |
| 9 | Publicar la demo en `win.crm-ia.org` | `tarea/despliegue` | Dev A | 2 | La demo abre con HTTPS desde ese subdominio | Listo |
| 10 | Canvas de solución completo | `tarea/canvas-pitch` | Apoyo | 1 | Las 5 secciones están llenas y revisadas por el equipo | Revisar (borrador en `docs/canvas-pukllay.md`) |
| 11 | Pitch de 90 segundos y ensayo | `tarea/canvas-pitch` | Apoyo | 10 | El equipo ensayó el pitch completo una vez | Revisar (guion en `docs/pitch-y-checklist.md`) |
| 12 | Fotos faltantes en `public/images/app/` | `tarea/diseno-cartel` | Apoyo | 1 | Están las 5 imágenes que faltan (ver `docs/prompts-imagenes-codex.md`) | Pendiente |
| 13 | Video de respaldo del recorrido (90 s) | `tarea/video-respaldo` | Apoyo + Dev C | 6 | Video grabado del recorrido completo por si falla internet | Pendiente |
| 14 | Probar en un celular real e integrar todo en `main` | — | Responsable de integración | 2 a 9 | El recorrido funciona en un celular y desde `win.crm-ia.org`, y el pull request está fusionado | Pendiente |

**Ruta que queda (en orden):** 10 y 11 (revisar textos) → 12 y 13 → 14. Si falta tiempo, se recortan las fotos faltantes (la app dibuja ilustraciones) y el video de respaldo se graba al final con lo que haya.

**Archivos compartidos** (avisar antes de tocar): `server.mjs` y `public/index.html`.
