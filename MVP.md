# MVP — Acuerdos

Escribir solo lo acordado; si algo no está decidido, poner "pendiente".
*MVP* = producto mínimo viable: lo justo para mostrar en la demo. Ver la guía en [README.md](README.md).

> Borrador preparado a partir de la propuesta JuegaBarrio (ver `docs/`). Lo marcado como **(propuesto)** necesita confirmación del equipo.

- **Idea elegida:** JuegaBarrio, "Deja la losa mejor de como la encontraste" **(propuesto)**
- **Comportamiento del reto BCP:** cuidar los espacios públicos
- **Usuario:** vecinos que usan parques y losas deportivas, y la municipalidad que los administra
- **Problema:** los espacios públicos se usan sin un cierre responsable: nadie se compromete a dejarlos bien ni hay forma de saber en qué estado quedan
- **Recorrido principal de la demo:** **(propuesto)**
  1. El vecino se une a una actividad en una losa y acepta el compromiso "dejo la losa limpia".
  2. Al llegar escanea el QR de la losa, ve las reglas y toma una foto "antes" (check-in simulado en la demo).
  3. Al terminar hace el cierre en 30 segundos: checklist de 3 toques y foto "después". Si hay incidencia, llega al panel municipal.
  4. La losa suma a su "Racha de cuidado" y el panel municipal muestra el indicador.
- **Máximo tres capacidades esenciales:**
  1. Unirse a una actividad con compromiso de cuidado
  2. Check-in por QR con foto "antes"
  3. Cierre responsable (checklist + foto "después") y panel municipal con el indicador
- **Qué funcionará realmente:** unirse con compromiso, check-in, cierre con checklist y fotos, incidencias, racha por espacio e indicador del panel (se guardan en `data/db.json`)
- **Qué se simulará:** pendiente **(propuesto: ubicación GPS y todos los datos de ejemplo, marcados como "datos simulados")**
- **Fuera de alcance:** pagos, ranking público de personas, integración con sistemas municipales, notificaciones push reales, moderación automática de imágenes
- **Indicador de impacto:** % de actividades cerradas con el espacio en buen estado, verificado con foto antes/después y auditoría humana al azar. Línea base y meta: pendiente (se definen con las 2 primeras semanas del piloto)
- **Stack elegido:** servidor Node.js sin dependencias (`server.mjs`) + una página (`public/index.html`) con mapa Leaflet **(propuesto, ya funciona)**
- **Dónde se publica la demo:** `win.crm-ia.org` (Server TEC)
- **Responsable de integración:** pendiente
- **Respaldo:** pendiente (video de 90 segundos del recorrido)

## Tareas

Estados: Pendiente → Haciendo → Revisar → Listo

| Tarea | Responsable | Depende de | Está lista cuando | Estado |
|---|---|---|---|---|
Responsables: **Dev A, Dev B, Dev C** son los 3 integrantes de desarrollo y **Apoyo** es la persona de diseño y presentación. Falta poner nombres (pendiente). Cada tarea va en su rama `tarea/...` y su issue en GitHub (textos en `docs/issues-tareas.md`).

| # | Tarea | Rama | Responsable | Depende de | Está lista cuando | Estado |
|---|---|---|---|---|---|---|
| 1 | Acordar este archivo (idea, stack, nombres) | `tarea/propuesta-juegabarrio` | Todos | — | Los campos "propuesto" quedan confirmados por el equipo | Haciendo |
| 2 | Base técnica (servidor Node), datos demo y API compartida | `tarea/base-tecnica` | Dev A | 1 | `node server.mjs` abre la app en `localhost:3000` en la copia de cada integrante | Revisar |
| 3 | Mapa y lista de espacios demo (con "datos simulados") | `tarea/mapa-espacios` | Dev B | 2 | Se ven 3 espacios en el mapa y en la lista; al tocar uno se abre su ficha | Pendiente |
| 4 | Ficha de espacio, detalle de actividad, unirse con compromiso "dejo la losa limpia" | `tarea/unirse-actividad` | Dev B | 2 | El vecino se une y ve su compromiso guardado | Pendiente |
| 5 | Check-in simulado por QR y foto "antes" | `tarea/checkin-qr` | Dev C | 2 | Al abrir el QR de la losa se registra la llegada y la foto "antes" | Pendiente |
| 6 | Cierre responsable: checklist de 3 toques y foto "después" | `tarea/cierre-responsable` | Dev C | 5 | La actividad pasa a completada y suma a la racha de la losa | Pendiente |
| 7 | Reporte de incidencia desde el cierre | `tarea/incidencias` | Dev C | 6 | La incidencia aparece en el panel municipal | Pendiente |
| 8 | Panel municipal: indicador principal, racha por losa e incidencias | `tarea/panel-municipal` | Dev A | 2 | Muestra el % de cierres con espacio en buen estado y se actualiza tras un cierre | Pendiente |
| 9 | Publicar la demo en `win.crm-ia.org` (Docker + Traefik en Server TEC) | `tarea/despliegue` | Dev A | 2 | La demo abre con HTTPS desde ese subdominio | Pendiente |
| 10 | Canvas de solución completo (problema, 3 pasos, piloto 2027, indicador) | `tarea/canvas-pitch` | Apoyo | 1 | Las 5 secciones del canvas están llenas y revisadas por el equipo | Pendiente |
| 11 | Guion del pitch de 90 segundos y diapositivas | `tarea/canvas-pitch` | Apoyo | 10 | El equipo ensayó el pitch completo una vez | Pendiente |
| 12 | Cartel del QR de la losa y pantallas de apoyo | `tarea/diseno-cartel` | Apoyo | 1 | Cartel listo para mostrar en la demo | Pendiente |
| 13 | Video de respaldo del recorrido (90 s) | `tarea/video-respaldo` | Apoyo + Dev C | 6 | Video grabado del recorrido completo por si falla internet | Pendiente |
| 14 | Integrar y probar la demo completa desde `main` | — | Dev A (integración) | 3 a 9 | El recorrido principal funciona de inicio a fin y también en el sitio publicado | Pendiente |

**Ruta (orden de trabajo):** 1 → 2 (base lista primero) → 3 a 8 en paralelo → 9 → 13 → 14. Las tareas 10 a 12 van en paralelo desde el principio. Si falta tiempo, se recorta 7, 12 y 13; el recorrido 3 → 4 → 5 → 6 → 8 es lo mínimo.

**Archivos compartidos** (avisar antes de tocar): `lib/` (datos y tipos), `app/layout.tsx`, `app/globals.css`.
