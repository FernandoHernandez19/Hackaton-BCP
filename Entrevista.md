# Entrevista — Pukllay

**Objetivo:** respuestas base para el canvas de solución. Dueño: Fernando (ver `COORDINACION.md`).

**Estado (2026-11-17):** el nombre de la solución, **Pukllay** ("Juega. Cuida. Deja mejor."), está confirmado. El lugar del piloto, las cantidades, el presupuesto y las metas siguen siendo propuestas: no son decisiones aprobadas por terceros ni resultados obtenidos.

**Documentos de referencia:** `docs/propuesta-juegabarrio-readme.md`, `docs/arquitectura-mvp.md`, la demo publicada en https://win.crm-ia.org y el canvas oficial `docs/canvas-pukllay.md`.

## 1. Nombre del equipo e integrantes

**Pregunta:** ¿cómo se llama el equipo y quiénes lo integran?

**Respuesta:** la solución se llama **Pukllay** ("jugar" en quechua). Como nombre del equipo se usa provisionalmente **Equipo Pukllay**; si el equipo ya tiene otro nombre, se conserva y Pukllay queda solo como nombre de la solución. JuegaBarrio fue el nombre del primer borrador.

**Integrantes:** Luis Fernando, Smith Bazan y Jackelin Soncco.

**Para revisar:** confirmar el nombre del equipo y si hay un cuarto integrante.

## 2. Problema y comportamiento elegido

**Pregunta:** ¿qué conducta concreta queremos cambiar, dónde ocurre y a quién afecta?

**Respuesta propuesta:** enfocarnos en que los grupos que usan parques y losas terminen sus actividades recogiendo sus residuos y dejando las instalaciones en condiciones adecuadas para el siguiente grupo. El problema por validar es que este cierre responsable no se realiza de forma constante ni cuenta con una coordinación y verificación sencilla.

El escenario propuesto es un conjunto de espacios públicos de Los Olivos. Afectaría a quienes participan en actividades, a otros usuarios del espacio, a vecinos del entorno y al personal municipal responsable de su mantenimiento.

**Comportamiento elegido:** cuidar los espacios públicos mediante un cierre responsable después de cada actividad.

**Conducta observable:** al finalizar, el grupo recoge los residuos generados, deja las instalaciones sin nuevos daños observables atribuibles a su actividad y registra el cierre. Los desperfectos preexistentes se reportan y se diferencian del estado causado por el grupo.

**Límite de la propuesta:** los documentos definen el cuidado como objetivo, pero no aportan observaciones que acrediten la frecuencia local del problema. Esta descripción es una hipótesis para validar; no debe presentarse como un hallazgo de campo.

**Para revisar:** confirmar si esta es la conducta principal o si el equipo prefiere priorizar otra.

## 3. Público inicial

**Pregunta:** ¿quiénes usarían primero la solución?

**Respuesta propuesta:** jóvenes y adultos que ya participan u organizan actividades deportivas y recreativas, empezando por grupos de vóley, fútbol y ejercicio grupal. La convocatoria inicial se realizaría con organizadores barriales y apoyo municipal.

Este segmento permite probar una conducta repetida con grupos existentes y un organizador identificable. La municipalidad sería aliada operativa y usuaria del panel; los vecinos serían usuarios de la experiencia de participación.

**Para revisar:** confirmar el segmento inicial. Limitarlo a jóvenes y adultos es una propuesta para el piloto, no una restricción del producto.

## 4. Piloto 2027 y alianza municipal

**Pregunta:** ¿dónde, con quién y durante cuánto tiempo lo probaríamos?

**Respuesta propuesta:** piloto de **8 semanas en 2027**, en **3 espacios públicos de Los Olivos**: idealmente dos losas y un parque, seleccionados y autorizados por la municipalidad según disponibilidad y condiciones de uso.

La Municipalidad Distrital de Los Olivos sería una **aliada potencial por gestionar**. Los documentos plantean trabajar con una municipalidad desde el inicio, pero no acreditan que ya exista un convenio, permiso o contacto confirmado. La ejecución en campo quedaría condicionada a esa coordinación.

| Etapa | Duración | Actividades |
|---|---|---|
| Preparación | Semana 1 | Gestionar autorización, seleccionar espacios, acordar reglas y capacitar al enlace municipal y a los organizadores. |
| Línea base | Semanas 2 y 3 | Observar actividades habituales sin Pukllay, usando la misma lista de cuidado que se empleará después. |
| Prueba de uso | Semanas 4 a 7 | Habilitar actividades, check-in y cierre responsable; revisar incidencias y acompañar a los usuarios. |
| Evaluación | Semana 8 | Comparar resultados, recoger opiniones y acordar ajustes o continuidad. |

**Alcance tentativo:** 60 vecinos únicos inscritos y 24 actividades realizadas durante las cuatro semanas de uso de la plataforma. Son objetivos de convocatoria y operación, no una muestra representativa ni una garantía de participación.

**Recursos:** PWA, teléfonos con cámara y acceso a internet, QR impresos, un enlace municipal, organizadores vecinales y acompañamiento del equipo. No se contempla construir instalaciones ni comprar hardware especializado.

**Riesgos y respuesta prevista:**

| Riesgo | Respuesta prevista |
|---|---|
| La municipalidad no autoriza los espacios a tiempo | Iniciar la gestión en la semana 1 y, si se retrasa, mover el calendario sin acortar la línea base. |
| Baja participación | Convocar a grupos que ya juegan con un organizador conocido y acompañar las primeras actividades. |
| El cierre registrado en la app no refleja lo ocurrido | Medir el indicador con observación humana y usar la app solo como dato de apoyo. |
| Fallas de conexión en el espacio | QR impreso con código de respaldo y acompañamiento del equipo. |

**Para revisar:** confirmar distrito, duración y escala. Los tres espacios de Los Olivos ya aparecen como escenario de demo en la arquitectura; su uso real en el piloto todavía debe acordarse.

## 5. Presupuesto aproximado

**Pregunta:** ¿cuánto necesitaríamos y quién aportaría los recursos?

**Respuesta propuesta:** establecer un presupuesto de planificación de **S/ 1,500** para las ocho semanas, sin incluir remuneraciones del equipo ni obras físicas.

| Concepto | Asignación propuesta |
|---|---:|
| Operación tecnológica: alojamiento, dominio y servicios necesarios | S/ 300 |
| Impresión de QR, reglas e instrucciones de uso | S/ 150 |
| Traslados y visitas de seguimiento | S/ 400 |
| Conectividad de apoyo para las pruebas | S/ 150 |
| Inducción y materiales de convocatoria | S/ 200 |
| Contingencia | S/ 300 |
| **Total** | **S/ 1,500** |

Estos importes son asignaciones tentativas, no cotizaciones ni precios verificados. Deben ajustarse después de definir proveedores, apoyos y condiciones reales del piloto.

Se propone que el equipo aporte desarrollo y acompañamiento; la municipalidad, autorización, coordinación y tiempo de un enlace. El financiamiento de los gastos queda por gestionar. El piloto no dependería de premios económicos ni de cobros de reserva.

**Para revisar:** confirmar el presupuesto disponible y los aportes que realmente puede asumir cada parte.

## 6. Prototipo y demostración

**Pregunta:** ¿cómo demostraremos el funcionamiento?

**Respuesta:** con la demo publicada por el equipo TecMasters en **https://win.crm-ia.org** (QR en `public/images/qr-win-crm-ia.png`). Es un recorrido de 90 segundos con dos vistas, vecino y municipalidad, y la app lo indica como datos simulados.

1. El vecino explora el mapa, ve un espacio con sus reglas y horarios y crea o se une a una actividad comprometiéndose a dejar el espacio limpio.
2. Al llegar escanea el QR del espacio y puede tomar una foto "antes". La validación de cercanía es simulada en la demo.
3. Al terminar hace el cierre con una lista de cuidado y una foto "después", y reporta una incidencia si encuentra un problema.
4. El panel municipal muestra el indicador, la racha de cuidado del espacio y la bandeja de incidencias.

**Respaldo:** video del recorrido (pendiente de grabar; sin dueño todavía) y, si falla el sitio, la versión local con `node server.mjs`.

**Límite:** los espacios, los vecinos y las actividades son de demostración. La demo no acredita resultados ni una alianza municipal.

## 7. Indicador, línea base y meta

**Pregunta:** ¿cómo comprobaremos un cambio de comportamiento?

**Respuesta propuesta:** usar como indicador principal el **porcentaje de actividades observadas que cumplen el cierre responsable**.

**Fórmula:** actividades observadas que cumplen todos los criterios de cuidado / total de actividades observadas que terminaron en el periodo × 100.

**Criterios comunes para ambos periodos:**

- El grupo recoge y dispone correctamente los residuos generados durante la actividad.
- Las instalaciones y los elementos utilizados quedan ordenados y sin nuevos daños observables atribuibles a la actividad, considerando su estado inicial.
- El grupo deja el espacio disponible al terminar el horario acordado.

La lista se aplicaría en la línea base y durante el piloto, aunque todavía no exista un registro digital en la etapa inicial. Así se compara la conducta con el mismo criterio. El registro en la plataforma sería un indicador adicional de adopción.

**Línea base:** por medir durante las semanas 2 y 3. No asumir 0 %. Registrar tanto el porcentaje como la cantidad de actividades observadas y las condiciones iniciales de cada espacio.

**Meta tentativa:** aumentar el cumplimiento en **20 puntos porcentuales** frente a la línea base durante las cuatro semanas de uso, con un máximo de 100 %. Si la medición inicial revela poco margen de mejora, el equipo revisaría la meta antes de iniciar la intervención.

**Comprobación:** aplicar una lista breve antes y después de actividades comparables por espacio, tipo y horario. Un observador del equipo o enlace municipal registraría las comprobaciones; las fotos del espacio y confirmaciones de participantes servirían como apoyo, con consentimiento y evitando captar personas identificables. Se procuraría observar al menos 12 actividades en la línea base y 12 durante el uso, informando siempre cuántas se pudieron verificar.

**Indicadores secundarios:** actividades completadas, puntualidad, participación recurrente, horas de uso y atención de incidencias, según las definiciones de `docs/arquitectura-mvp.md`.

**Precaución de interpretación:** la ausencia de reportes no demuestra por sí sola que el espacio quedó cuidado. La comparación antes/después mostraría un cambio observado; no probaría que todo el cambio se deba a la plataforma. No se prometerán reducciones de gasto municipal ni mejoras de seguridad sin evidencia.

**Para revisar:** confirmar indicador, meta y viabilidad del seguimiento propuesto.

## 8. Texto del canvas

El texto oficial del canvas está en **`docs/canvas-pukllay.md`** y su versión de una página para entregar en **`docs/canvas-pukllay.pdf`**. Se eliminó de aquí la copia anterior porque repetía las secciones con datos distintos (integrantes pendientes y público solo de adultos).

## 9. Revisión del equipo

Puedes editar las respuestas directamente o anotar los cambios aquí:

- Nombre de la solución: **Pukllay** (confirmado el 2026-11-17)
- Nombre definitivo del equipo:
- Integrantes: Luis Fernando, Smith Bazan y Jackelin Soncco (¿cuarto integrante?)
- Cambios al problema o al público:
- Distrito, espacios y situación de la alianza:
- Cambios al presupuesto, duración o escala:
- Enlace o material del prototipo disponible: https://win.crm-ia.org
- Cambios al indicador o la meta:

Si cambia algo aquí, hay que actualizar también `docs/canvas-pukllay.md` y regenerar el PDF (ver ese archivo).
