# Hackatón BCP — Guía del equipo

Guía corta para trabajar juntos sin pisarnos. Léela completa una vez (10 minutos).

## A. Estado

- **Propuesta:** pendiente. Se completará en [MVP.md](MVP.md). Los borradores de ideas previos se guardan solo en la computadora del coordinador (están excluidos en `.gitignore`) y no son acuerdos.
- **Stack:** pendiente. *Stack* = conjunto de herramientas y lenguajes con los que se construye el producto.
- **Repositorio remoto:** pendiente. *Repositorio* = carpeta del proyecto con historial de cambios (Git). El *remoto* es la copia compartida en GitHub; cada uno tiene además su copia *local* en su computadora.
- **Cómo instalar y ejecutar el producto:** se añadirá aquí cuando el stack exista y se haya comprobado.

## B. Preparación del coordinador (una sola vez)

1. **Crear o conectar el repositorio:** en GitHub Desktop, *File → Add local repository* y elegir esta carpeta; luego *Publish repository* (puede ser privado).
2. **Publicar esta base:** antes de publicar, en la pestaña *Changes* revisar los archivos, escribir un resumen (ej. "Base de colaboración") y pulsar *Commit to main*. Un *commit* es un punto guardado del proyecto con una descripción.
3. **Invitar al equipo:** en GitHub, *Settings → Collaborators → Add people*.
4. **Crear el tablero:** en GitHub, pestaña *Projects → New project → Board*, con las columnas **Pendiente → Haciendo → Revisar → Listo**. Las plantillas de esta carpeta **no** crean el tablero ni las tareas automáticamente: hay que crearlos a mano.
5. **Nombrar responsable de integración y respaldo** y anotarlos en [MVP.md](MVP.md). *Integrar* = unir el trabajo de una tarea a `main`.

## C. Incorporación de cada compañero

1. Tener cuenta en [GitHub](https://github.com).
2. Instalar [GitHub Desktop](https://desktop.github.com) y un editor de código (por ejemplo [VS Code](https://code.visualstudio.com)).
3. Aceptar la invitación al repositorio (llega por correo o en las notificaciones de GitHub).
4. **Clonar** el repositorio: en GitHub Desktop, *File → Clone repository*. *Clonar* = descargar tu propia copia local.
5. Elegir una tarea en la columna **Pendiente** del tablero, asignártela y moverla a **Haciendo**.

## D. Rutina de trabajo (GitHub Desktop)

`main` es la rama con la versión que funciona para la demo. Una *rama* es una copia paralela donde haces tu tarea sin afectar a `main`.

1. **Actualizar main:** elegir *Current branch → main* y pulsar *Fetch origin* / *Pull origin*.
2. **Crear tu rama:** *Current branch → New branch*, con nombre `tarea/descripcion-corta` (ej. `tarea/mapa`).
3. **Hacer el cambio**, con ayuda de IA si lo necesitas (ver [PROMPTS.md](PROMPTS.md), prompt B).
4. **Probarlo:** comprobar que tu tarea funciona y que la demo sigue funcionando.
5. **Revisar y guardar:** en *Changes*, mirar cada archivo modificado. Desmarca lo que no sea de tu tarea. Escribe un resumen y pulsa *Commit to tarea/...*.
6. **Subir la rama y abrir un pull request:** *Push origin* y luego *Create Pull Request*. Un *pull request* (PR) es una propuesta para revisar y unir tus cambios a `main`. Completa la plantilla que aparece.
7. **Avisar** al responsable de integración y mover la tarjeta a **Revisar**.
8. **Después de integrar:** volver a `main` y actualizarlo (paso 1). Mover la tarjeta a **Listo**.

**Importante:** actualizar `main` **no** actualiza una rama que ya habías creado. Si tu rama se quedó atrás, en GitHub Desktop: *Branch → Update from main*.

**Conflictos:** un *conflicto* ocurre cuando dos personas cambiaron la misma parte de un archivo. No borres el trabajo del otro: avisa al responsable de integración y resuélvanlo juntos conservando ambos trabajos.

### Revisión de un PR (breve)

El responsable de integración (o su respaldo) solo comprueba:

- Que la tarea funciona y cumple su condición de terminado.
- Que no rompe el recorrido principal de la demo.
- Que no modifica cosas ajenas a la tarea.

Si todo está bien: *Merge pull request* en GitHub. Si no, deja un comentario claro.

## E. Cinco acuerdos

1. **Una tarea activa por persona.**
2. **Cambios pequeños y frecuentes.**
3. **Coordinar antes de modificar archivos compartidos** (los que usan varias tareas).
4. **No subir contraseñas, *tokens* (claves de acceso) ni archivos `.env`** (archivos con configuración secreta). El archivo [.gitignore](.gitignore) ayuda a evitarlo, pero revisa siempre antes del commit.
5. **No integrar cambios que impidan ejecutar la demo.**

## Archivos de esta base

| Archivo | Para qué sirve |
|---|---|
| [MVP.md](MVP.md) | Plantilla para definir la propuesta, el alcance y las tareas. *MVP* = producto mínimo viable: lo justo para la demo. |
| [CLAUDE.md](CLAUDE.md) | Reglas que lee Claude Code (asistente de programación) al trabajar en este repositorio. |
| [PROMPTS.md](PROMPTS.md) | Tres instrucciones listas para copiar en el asistente de IA. |
| [.github/ISSUE_TEMPLATE/tarea.md](.github/ISSUE_TEMPLATE/tarea.md) | Plantilla para crear tareas (*issues*) en GitHub. |
| [.github/pull_request_template.md](.github/pull_request_template.md) | Plantilla que aparece al abrir un pull request. |
| [.gitignore](.gitignore) | Lista de archivos que Git no debe subir (secretos y archivos locales). |
