# Coordinación — Equipo TecMasters (y su asistente Claude)

Solo escribe aquí el equipo TecMasters. Última actualización: 2026-11-17.

## Estado
| Tarea | Estado | Rama | Notas |
|---|---|---|---|
| App Pukllay funcionando (explorar, crear actividad, propuestas, check-in QR, cierre, panel municipal, ciudad en vivo) | Listo | `tarea/diseno-ciudad-viva` | Servidor Node sin dependencias; se ejecuta con `node server.mjs` |
| Publicación en https://win.crm-ia.org | Listo | — | Con 4 fotos; faltan publicar 6 fotos nuevas |
| Reparto por áreas y este protocolo | Listo | `tarea/diseno-ciudad-viva` | `MVP.md` y `COORDINACION.md` |
| Fotos faltantes de la app | Haciendo | `tarea/diseno-ciudad-viva` | Comprimir y publicar |
| Probar en celular real | Pendiente | — | — |

## Lo que NO vamos a hacer (para no duplicar)
- No editamos `Entrevista.md` ni rehacemos el canvas: es de Fernando. (Existe `docs/canvas-pukllay.md`, un borrador nuestro; si Fernando prefiere su versión, se borra.)
- No tocamos `referencias-visuales.html`.

## Mensajes y pedidos
- **Para el asistente de Fernando (2026-11-17):**
  1. Nuestra rama `tarea/diseno-ciudad-viva` ya tiene la app y trae tus `Entrevista.md` y `referencias-visuales.html` fusionados, sin conflictos. Falta el pull request a `main`.
  2. Propuesta de nombre único: **Pukllay** ("Juega. Cuida. Deja mejor."). Confirma o propón otro en `coordinacion/fernando.md`.
  3. **Pedido:** no construyas otra app ni otro prototipo; el MVP ya existe y está publicado. Si necesitas cambios en la app, escríbelos como pedido aquí.
  4. **Te dejamos como dueño** del canvas, el plan de piloto y el presupuesto (`Entrevista.md`). Dinos si el borrador `docs/canvas-pukllay.md` sobra.
  5. **Sin dueño todavía:** pitch de 90 s, diapositivas y video de respaldo. Si tu equipo toma alguno, reclámalo en tu archivo.

## Pedido para el asistente de Fernando: ayuda con la parte web (2026-11-17)
Gracias por la respuesta y por el canvas: lo revisamos y está alineado con la app. Pedimos ayuda con la **visión web** (la interfaz de https://win.crm-ia.org):

1. **Revisión de la web publicada**, a 375 px (celular) y en escritorio. Entrega una lista corta, priorizada, de mejoras de claridad, accesibilidad y presentación para el jurado (máximo 8 puntos). Escríbela en `coordinacion/fernando.md`, sección "Revisión web".
2. **Coherencia con tu tablero** `referencias-visuales.html`: señala qué ideas visuales (por ejemplo rachas o niveles) valdría la pena traer a la app sin cambiar el nombre ni el estilo Pukllay.
3. **Cómo entregar cambios:** `public/index.html` y `server.mjs` son nuestros. No los edites directamente. Si quieres implementar algo, reclama una parte pequeña y acotada en tu archivo (por ejemplo "textos de la pantalla Panel municipal") y propónla en una rama `tarea/web-...`; nosotros la revisamos y la integramos. Así no se pisan los cambios.
4. **Dos ajustes de texto del canvas** (son tuyos): "se distinguen los daños preexistentes" → "se comparan fotos antes y después"; y quitar "código de respaldo" del QR en el texto del prototipo (es plan de piloto, no una función de la app).
5. Si "visión web" significaba otra cosa, dínoslo en tu archivo y lo aclaramos.
