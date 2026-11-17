# Issues de tareas (listos para crear en GitHub)

Cada bloque sigue la plantilla `.github/ISSUE_TEMPLATE/tarea.md`. La tabla de `MVP.md` es la fuente de verdad. Responsables: Dev A, Dev B, Dev C y Apoyo hasta poner nombres.

## [Tarea] Base técnica, datos demo y tipos compartidos
**Qué hay que hacer:** crear el servidor Node (`server.mjs`), los datos demo y la API.
**Está terminado cuando…** `node server.mjs` abre la app en `localhost:3000` en la copia de cada integrante.
**Depende de…** acordar `MVP.md`. **Responsable:** Dev A. **Rama:** `tarea/base-tecnica`

## [Tarea] Mapa y lista de espacios demo
**Qué hay que hacer:** mostrar 3 espacios demo en mapa y lista, con la etiqueta "datos simulados".
**Está terminado cuando…** al tocar un espacio se abre su ficha.
**Depende de…** base técnica. **Responsable:** Dev B. **Rama:** `tarea/mapa-espacios`

## [Tarea] Ficha de espacio, actividad y unirse con compromiso
**Qué hay que hacer:** ficha del espacio, detalle de la actividad y botón "Unirme" con el compromiso "dejo la losa limpia".
**Está terminado cuando…** el vecino se une y ve su compromiso guardado.
**Depende de…** base técnica. **Responsable:** Dev B. **Rama:** `tarea/unirse-actividad`

## [Tarea] Check-in simulado por QR y foto "antes"
**Qué hay que hacer:** página que simula el escaneo del QR de la losa y registra la llegada y la foto "antes".
**Está terminado cuando…** la llegada y la foto quedan guardadas en la actividad.
**Depende de…** base técnica. **Responsable:** Dev C. **Rama:** `tarea/checkin-qr`

## [Tarea] Cierre responsable
**Qué hay que hacer:** checklist de 3 toques y foto "después"; la actividad pasa a completada.
**Está terminado cuando…** el cierre suma a la racha de cuidado de la losa.
**Depende de…** check-in. **Responsable:** Dev C. **Rama:** `tarea/cierre-responsable`

## [Tarea] Incidencias
**Qué hay que hacer:** reportar una incidencia desde el cierre.
**Está terminado cuando…** la incidencia aparece en el panel municipal.
**Depende de…** cierre responsable. **Responsable:** Dev C. **Rama:** `tarea/incidencias`

## [Tarea] Panel municipal
**Qué hay que hacer:** mostrar el indicador principal (% de cierres con espacio en buen estado), la racha por losa y las incidencias.
**Está terminado cuando…** se actualiza después de un cierre.
**Depende de…** base técnica. **Responsable:** Dev A. **Rama:** `tarea/panel-municipal`

## [Tarea] Publicar en win.crm-ia.org
**Qué hay que hacer:** contenedor Docker y ruta de Traefik en Server TEC, sin tocar los stacks existentes.
**Está terminado cuando…** la demo abre con HTTPS desde `win.crm-ia.org`.
**Depende de…** base técnica. **Responsable:** Dev A. **Rama:** `tarea/despliegue`

## [Tarea] Canvas de solución y pitch
**Qué hay que hacer:** llenar el canvas (problema, 3 pasos, piloto 2027, indicador) y el guion de 90 segundos.
**Está terminado cuando…** las 5 secciones están llenas y el equipo ensayó el pitch una vez.
**Depende de…** acordar `MVP.md`. **Responsable:** Apoyo. **Rama:** `tarea/canvas-pitch`

## [Tarea] Cartel del QR y pantallas de apoyo
**Qué hay que hacer:** diseñar el cartel de la losa con su QR.
**Está terminado cuando…** está listo para mostrar en la demo.
**Depende de…** acordar `MVP.md`. **Responsable:** Apoyo. **Rama:** `tarea/diseno-cartel`

## [Tarea] Video de respaldo
**Qué hay que hacer:** grabar el recorrido completo de 90 segundos.
**Está terminado cuando…** el video existe por si falla internet.
**Depende de…** cierre responsable. **Responsable:** Apoyo + Dev C. **Rama:** `tarea/video-respaldo`

## [Tarea] Integrar y probar la demo completa
**Qué hay que hacer:** unir las ramas en `main` y probar el recorrido de inicio a fin, también en el sitio publicado.
**Está terminado cuando…** el recorrido principal funciona desde `main` y desde `win.crm-ia.org`.
**Depende de…** todas las tareas del recorrido. **Responsable:** Dev A (integración).
