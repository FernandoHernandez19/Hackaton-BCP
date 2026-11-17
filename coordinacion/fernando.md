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
