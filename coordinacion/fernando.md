# Coordinación — Fernando (y su asistente Claude)

Solo escribe aquí Fernando o su asistente. Antes de trabajar, lee `COORDINACION.md` y `coordinacion/tecmasters.md`.
Última actualización: 2026-11-17.

## Estado
| Tarea | Estado | Rama | Notas |
|---|---|---|---|
| Canvas de solución (texto oficial) | Revisar | `tarea/canvas-piloto` | `docs/canvas-pukllay.md` adoptado como oficial y alineado con `Entrevista.md` y la app publicada |
| Plan de piloto 2027 | Revisar | `tarea/canvas-piloto` | Canvas §04 y `Entrevista.md` §4, con tabla de riesgos |
| Presupuesto tentativo | Revisar | `tarea/canvas-piloto` | Canvas §04 y `Entrevista.md` §5 (S/ 1,500, sin cotizar, financiamiento por gestionar) |
| Indicador de impacto | Revisar | `tarea/canvas-piloto` | Canvas §05 y `Entrevista.md` §7 |
| Canvas en PDF (formato del evento) | Revisar | `tarea/canvas-piloto` | `docs/canvas-pukllay.pdf`, una página, con enlace y QR de la demo; se regenera con `python docs/canvas-generar.py` |
| Revisión de la web publicada (pedido de TecMasters) | Listo | `tarea/canvas-piloto` | Ver sección "Revisión web". Solo lectura: no edité `public/` ni `server.mjs` |
| Dos ajustes de texto del canvas (pedido de TecMasters) | Listo | `tarea/canvas-piloto` | "se comparan fotos antes y después" y sin "código de respaldo"; PDF regenerado |

Archivos que toco: `coordinacion/fernando.md`, `Entrevista.md`, `docs/canvas-pukllay.md`, `docs/canvas-pukllay.pdf`, `docs/canvas-generar.py` y `docs/canvas-plantilla-ignite.pdf` (plantilla en blanco del evento).
"Revisar" = falta que el equipo lea y confirme los textos; lo tentativo sigue marcado como tal. No toco `server.mjs`, `public/`, `Dockerfile`, `docker-stack.yml` ni `docs/pitch-y-checklist.md`.

## Mensajes y pedidos
- **Para TecMasters (respuesta a su mensaje del 2026-11-17):**
  1. **Nombre confirmado: Pukllay** ("Juega. Cuida. Deja mejor."). JuegaBarrio queda solo como nombre del primer borrador.
  2. **Prototipo:** de acuerdo, no construyo otra app. El MVP oficial es el publicado en https://win.crm-ia.org. Un prototipo local que había empezado queda descartado y **no se subirá**.
  3. **Canvas, piloto, presupuesto e indicador:** los reclamo (ver Estado). Su borrador `docs/canvas-pukllay.md` **no sobra**: lo adopto como base oficial y lo edito yo desde ahora; por favor no lo modifiquen sin pedirlo aquí.
  4. **Pitch de 90 s, diapositivas y video:** no los reclamo por ahora; siguen sin dueño.
  5. **Integración a `main`:** cuando abran el pull request de `tarea/diseno-ciudad-viva`, lo reviso. Mi rama `tarea/canvas-piloto` sale de la suya, así que conviene fusionar primero la de ustedes.
- **Pedido a TecMasters:** confirmen si el canvas describe bien la app publicada (sección 03): compromiso al unirse, check-in con QR y foto "antes", cierre con checklist y foto "después", incidencias al panel municipal y racha de cuidado por espacio. Si algo no existe o cambió, avísenme aquí.
- **Respuesta al pedido "ayuda con la parte web" (2026-11-17):**
  1. **Revisión web:** abajo, en "Revisión web" (8 puntos, de mayor a menor prioridad).
  2. **Tablero visual:** abajo, en "Ideas del tablero que vale la pena traer".
  3. **Cómo entrego cambios:** entendido, no edito `public/index.html` ni `server.mjs`. **Ofrezco** tomar una parte acotada: *"textos del cierre y del panel municipal"* (puntos 1, 2 y 4 de la revisión), en una rama `tarea/web-textos-cierre` que ustedes revisan e integran. **No la empiezo hasta que respondan "OK" en su archivo**, para no pisarnos.
  4. **Ajustes del canvas:** hechos en `docs/canvas-pukllay.md`, `docs/canvas-generar.py` y el PDF. En la sección 02 y en el indicador ahora dice "se comparan fotos antes y después". También quité "código de respaldo" del canvas y de `Entrevista.md`. Mantengo en `Entrevista.md` §2 que el observador distingue desperfectos preexistentes: es el método de medición del piloto, no una función de la app.
  5. **"Visión web":** lo entendí como revisión de la interfaz para el jurado. Si era otra cosa, díganmelo aquí.

## Revisión web
Revisé https://win.crm-ia.org el 2026-11-17 a 375 px y a 1366 px, solo lectura: **no envié formularios** para no alterar los datos de la demo pública. Bien resuelto: sin desborde horizontal a 375 px, sin errores en consola, `lang="es"`, botones con nombre accesible, "datos simulados" visible y sin ranking de personas.

| # | Prioridad | Qué vi | Propuesta |
|---|---|---|---|
| 1 | Alta | La lista del cierre ("Recogimos la basura", "Guardamos los equipos", "El espacio quedó ordenado") no coincide con los 3 criterios del indicador del canvas, y **falta "espacio liberado a tiempo"**. Además, `#/cierre/act-1` abre el formulario sin haberse unido ni hecho check-in. | Usar los mismos 3 criterios: "Recogimos nuestros residuos", "Dejamos las instalaciones sin daños nuevos", "Liberamos el espacio a la hora". Mostrar el cierre solo a quien hizo check-in u organiza. |
| 2 | Alta | El panel muestra **"100 % · 1 de 1"**: el jurado puede leerlo como resultado. "Incidencias abiertas: 0" aparece en rojo. | Rotular "Cierres registrados en la app (autodeclarado, n = 1)" y añadir una tarjeta "Indicador del piloto: línea base por medir · meta +20 pp". Usar un color neutro o verde cuando el valor es 0. |
| 3 | Alta | **El panel municipal a veces no abre:** de `#/en-vivo` (o `#/cierre/...`) a `#/muni` la pantalla no cambia y sigue mostrando la anterior. Desde Perfil → "Panel municipal (demo)" sí funciona. Es un riesgo para el pitch. | Revisar el manejo de `hashchange` para la ruta `muni`. Mientras tanto, ensayar el pitch entrando siempre por Perfil. |
| 4 | Media | Errores de texto: "Me comprometo a dejar la losa **limpio**". En la ficha de Losa Piloto B, "Dejar la losa limpia" y "Deja limpio el espacio" repiten la misma regla con distinto modo verbal. | "…dejar el espacio limpio" (sirve para parque y losa). Reglas en imperativo y sin repetir: "Llega a la hora", "Deja limpio el espacio", "Respeta el turno del siguiente grupo". |
| 5 | Media | A 375 px los filtros se cortan: "Act…", "Dis…", "Ho…". | Chips desplazables con texto completo, o solo icono + etiqueta corta ("Tipo", "Cerca", "Hora"). |
| 6 | Media | A 375 px el mapa corta las etiquetas en el borde ("Parq…") y la de Parque Piloto A queda bajo el control de zoom. En la barra inferior, "Mis espacios" ocupa 2 líneas y desalinea. | Encuadrar el mapa con margen interior (`fitBounds` con `padding`). Acortar la pestaña a "Espacios" o reducir el tamaño de letra. |
| 7 | Media | Cifras confusas en Explorar: "23 vecinos jugando ahora" junto a "16 vecinos activos". También "1 actividades". | Una sola cifra con "(simulado)". Plural correcto: "1 actividad". |
| 8 | Baja | En escritorio todo va en una columna de 760 px con la barra inferior de móvil. Al proyectar al jurado, el panel se ve pequeño. | A partir de 1024 px, poner el panel municipal en 2 columnas (indicadores a la izquierda, rachas e incidencias a la derecha). |

No verificado: el recorrido completo con envíos (unirse, check-in, cierre), lectores de pantalla y la medición exacta del contraste.

## Ideas del tablero que vale la pena traer
`referencias-visuales.html` se hizo para la propuesta anterior (Mi Barrio Verde). **No recomiendo** traer monedas, cupones, mascota ni **niveles por persona**: chocan con "se reconoce el lugar, no a las personas" del canvas. Sí vale la pena traer, sin cambiar nombre ni estilo Pukllay:

1. **Racha del espacio con tira semanal L–D** (patrón "meta semanal baja"): la racha ya existe; mostrarla como semanas con días marcados y textos que invitan, sin culpa ("¡3 semanas cuidando la Losa B!").
2. **Estado por forma + icono + texto, no solo color**, en los marcadores y en las etiquetas de estado (abierto, bloqueado, con actividad).
3. **Botón deshabilitado que explica por qué**: por ejemplo, "Unirme" sin el compromiso marcado o "Confirmar cierre" sin los 3 criterios.
4. **Al tocar un marcador, abrir una hoja inferior** con el detalle y las acciones permitidas, y dejar el marcador elegido al frente.
5. **Tarjeta para compartir el logro del espacio** ("Esta losa lleva 12 usos en buen estado"). Hace el cuidado *contagioso* (el reto BCP) sin exponer personas.
