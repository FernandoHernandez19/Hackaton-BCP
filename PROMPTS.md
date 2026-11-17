# Prompts listos para copiar

Copia el bloque completo en tu asistente de IA (Claude Code u otro) desde tu copia local del repositorio. Reemplaza lo que está entre corchetes.

## A. ARRANCAR EL MVP

Usar una sola vez, cuando el equipo elija la propuesta.

```text
Lee README.md, MVP.md y CLAUDE.md. Esta es la propuesta elegida:
[PEGA AQUÍ LA PROPUESTA]

1. Completa MVP.md solo con lo que esté confirmado en la propuesta; marca el resto como "pendiente".
2. Lista las decisiones pendientes que debemos tomar.
3. Recomienda el stack más sencillo para esta demo, considerando que el equipo no tiene experiencia avanzada. Explica por qué en pocas líneas.
4. Espera a que confirme stack y alcance. Después, en una rama nueva desde main, prepara una base ejecutable mínima y documenta en README.md cómo instalarla e iniciarla (solo comandos que hayas comprobado).
5. Divide el trabajo en tareas pequeñas en la tabla de MVP.md, con dependencias y condición de terminado.
6. Prioriza construir primero un recorrido completo de la demo, aunque sea simple, y después mejorarlo.
No publiques ni integres cambios sin mi autorización.
```

## B. HACER MI TAREA

```text
Tarea: [DESCRIPCIÓN]
Criterios para terminar: [CUÁNDO ESTÁ LISTA]
Rama: [tarea/nombre]

Lee README.md, MVP.md y CLAUDE.md. Revisa si mi tarea depende de otras y si están listas.
Comprueba la rama actual y los cambios sin guardar; conserva cualquier cambio existente.
Si la rama no existe, créala desde main actualizado, solo si el estado local lo permite; si no, explícame qué hacer.
Implementa solo lo necesario para cumplir los criterios. Avísame antes de tocar archivos compartidos.
Pruébalo y dime cómo lo probaste.
Al final, prepara un resumen para el pull request: qué cambié, cómo lo probé y qué falta.
No hagas push ni abras el pull request sin mi autorización.
```

## C. REVISAR E INTEGRAR

```text
Lee README.md, MVP.md y CLAUDE.md. Revisa los cambios de la rama [tarea/nombre] respecto a main.
1. Comprueba que cumple los criterios de la tarea: [CRITERIOS].
2. Comprueba que el recorrido principal de la demo sigue funcionando.
3. Señala errores y cambios ajenos a la tarea.
No reescribas el proyecto ni añadas mejoras fuera de la tarea.
Integra a main solo si te lo autorizo explícitamente.
```
