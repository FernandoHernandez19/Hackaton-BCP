# Coordinación entre equipos y asistentes de IA

Este repo lo tocan varias personas y varios asistentes de IA (Claude Code). Para no duplicar trabajo, los asistentes se comunican por **archivos en git**, no por chat. Cada equipo escribe **solo en su propio archivo** dentro de `coordinacion/`, así nunca hay conflictos de fusión.

## Protocolo (obligatorio para personas y asistentes)
1. **Antes de empezar cualquier tarea:** `git fetch` y leer `COORDINACION.md` y todos los archivos de `coordinacion/` (también en `origin/tarea/*` si aún no están en `main`).
2. **Reclamar la tarea:** escribir una línea en tu archivo (`Estado: Haciendo`, rama y qué archivos tocarás). Si otro la tiene reclamada, no la hagas: escribe un pedido en tu archivo.
3. **Trabajar en tu rama** `tarea/...`. No tocar archivos que son de otra área (tabla de abajo) sin pedirlo antes.
4. **Al terminar:** actualizar tu línea a `Listo` con el enlace del commit o pull request y avisar qué falta.
5. **Pedidos entre equipos:** se escriben en la sección "Pedidos" de tu archivo, con el nombre del destinatario y qué necesitas. El destinatario responde en su archivo.
6. Si tienes duda de quién es dueño de algo, no lo hagas: pregunta primero.

Los asistentes de IA no hacen push, no abren pull requests ni fusionan sin autorización de su usuario (regla de `CLAUDE.md`).

## Áreas y dueños
| Área | Dueño | Archivos |
|---|---|---|
| App, fotos de la app y publicación en `win.crm-ia.org` | Equipo TecMasters | `server.mjs`, `public/`, `Dockerfile`, `docker-stack.yml` |
| Canvas, plan de piloto, presupuesto e indicador | Fernando | `Entrevista.md`, `docs/canvas-*.md` |
| Tablero visual de referencia | Fernando | `referencias-visuales.html` |
| Pitch de 90 s y diapositivas | pendiente | `docs/pitch-y-checklist.md` |
| Video de respaldo | pendiente | — |
| Integración a `main` | Fernando (dueño del repo) | — |

**Archivos compartidos** (cambios pequeños y avisados): `MVP.md`, `README.md`.
**Publicación:** solo el equipo TecMasters publica en Server TEC. Si necesitas que se publique algo, escribe un pedido.

## Archivos de coordinación
- `coordinacion/tecmasters.md` — equipo TecMasters y su asistente.
- `coordinacion/fernando.md` — Fernando y su asistente (plantilla lista para completar).
