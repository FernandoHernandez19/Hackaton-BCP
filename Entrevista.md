# Entrevista propuesta — JuegaBarrio

**Objetivo:** proponer respuestas a los puntos pendientes y dejar un borrador del canvas listo para revisar.

**Estado:** propuesta del asistente, pendiente de revisión del equipo. Los nombres sugeridos, el lugar del piloto, las cantidades, el presupuesto y las metas no son decisiones aprobadas ni resultados obtenidos.

**Documentos de referencia:** `README2.md`, `arquitectura-mvp.md` y `Canvas_Equipo_Ignite_Hackaton_UPN_BCP.pdf`.

## 1. Nombre del equipo e integrantes

**Pregunta:** ¿cómo se llama el equipo y quiénes lo integran?

**Respuesta propuesta:** usar provisionalmente **Equipo JuegaBarrio**, para mantener coherencia con el producto. Si ya existe un nombre de equipo, conservarlo y presentar JuegaBarrio únicamente como nombre de la solución.

**Integrantes:** Luis Fernando , smith Bazan, Jackelin Soncco.

**Para revisar:** confirmar el nombre y añadir los integrantes.

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

**Respuesta propuesta:** A adultos y  jovenes que ya participan u organizan actividades deportivas y recreativas, empezando por grupos de vóley, fútbol y ejercicio grupal. La convocatoria inicial se realizaría con organizadores barriales y apoyo municipal.

Este segmento permite probar una conducta repetida con grupos existentes y un organizador identificable. La municipalidad sería aliada operativa y usuaria del panel; los vecinos serían usuarios de la experiencia de participación.

**Para revisar:** confirmar el segmento inicial. La restricción a adultos es una propuesta para el piloto, no una característica ya establecida del producto.

## 4. Piloto 2027 y alianza municipal

**Pregunta:** ¿dónde, con quién y durante cuánto tiempo lo probaríamos?

**Respuesta propuesta:** piloto de **8 semanas en 2027**, en **3 espacios públicos de Los Olivos**: idealmente dos losas y un parque, seleccionados y autorizados por la municipalidad según disponibilidad y condiciones de uso.

La Municipalidad Distrital de Los Olivos sería una **aliada potencial por gestionar**. Los documentos plantean trabajar con una municipalidad desde el inicio, pero no acreditan que ya exista un convenio, permiso o contacto confirmado. La ejecución en campo quedaría condicionada a esa coordinación.

| Etapa | Duración | Actividades |
|---|---|---|
| Preparación | Semana 1 | Gestionar autorización, seleccionar espacios, acordar reglas y capacitar al enlace municipal y a los organizadores. |
| Línea base | Semanas 2 y 3 | Observar actividades habituales sin JuegaBarrio, usando la misma lista de cuidado que se empleará después. |
| Prueba de uso | Semanas 4 a 7 | Habilitar actividades, check-in y cierre responsable; revisar incidencias y acompañar a los usuarios. |
| Evaluación | Semana 8 | Comparar resultados, recoger opiniones y acordar ajustes o continuidad. |

**Alcance tentativo:** 60 vecinos únicos inscritos y 24 actividades realizadas durante las cuatro semanas de uso de la plataforma. Son objetivos de convocatoria y operación, no una muestra representativa ni una garantía de participación.

**Recursos:** PWA, teléfonos con cámara y acceso a internet, QR impresos, un enlace municipal, organizadores vecinales y acompañamiento del equipo. No se contempla construir instalaciones ni comprar hardware especializado.

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

**Pregunta:** ¿cómo demostraremos el funcionamiento si aún no tenemos un enlace final?

**Respuesta propuesta:** presentar un recorrido de 90 segundos con dos vistas: vecino y municipalidad. Utilizar tres espacios de demostración y datos claramente identificados como simulados.

1. El gestor municipal habilita un espacio, sus reglas y horarios; un vecino encuentra una actividad de vóley y se une.
2. El vecino realiza el check-in con QR; para la demo puede simularse la validación de cercanía, indicando expresamente la simulación.
3. El organizador registra el estado final, los participantes confirman el cierre y el panel municipal actualiza los indicadores. Un reporte de ejemplo permite mostrar la bandeja de incidencias.

**Material de respaldo propuesto:** storyboard con las pantallas de mapa, detalle de actividad, check-in, cierre y panel municipal; además, un video del recorrido cuando el prototipo esté disponible.

**Enlace o captura:** pendiente de incorporar cuando exista. Este documento describe la demostración; no acredita que el prototipo o el storyboard ya estén construidos.

**Para revisar:** confirmar este recorrido e incorporar posteriormente el enlace o las capturas reales.

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

**Indicadores secundarios:** actividades completadas, puntualidad, participación recurrente, horas de uso y atención de incidencias, según las definiciones de `arquitectura-mvp.md`.

**Precaución de interpretación:** la ausencia de reportes no demuestra por sí sola que el espacio quedó cuidado. La comparación antes/después mostraría un cambio observado; no probaría que todo el cambio se deba a la plataforma. No se prometerán reducciones de gasto municipal ni mejoras de seguridad sin evidencia.

**Para revisar:** confirmar indicador, meta y viabilidad del seguimiento propuesto.

## 8. Texto propuesto para el canvas

Los siguientes textos son un borrador sujeto a las decisiones anteriores. Aún no se ha modificado el PDF original.

### Datos del equipo

- **Nombre:** Equipo JuegaBarrio — provisional.
- **Integrantes:** pendiente de completar con nombres reales.
- **Comportamiento elegido:** cuidado de espacios públicos mediante el cierre responsable de actividades.

### 01. El problema — comportamiento observable

Queremos que los grupos que usan parques y losas recojan sus residuos y dejen el espacio en condiciones adecuadas para el siguiente grupo. La hipótesis por validar en Los Olivos es que este cierre no se realiza de forma constante ni tiene una coordinación sencilla. Esto afecta a participantes, otros vecinos y personal municipal.

### 02. Nuestra solución

JuegaBarrio facilita el cuidado en tres pasos: 1) la municipalidad publica espacios, reglas y horarios y los vecinos se unen a actividades; 2) registran su llegada con QR y validación de cercanía; 3) el grupo realiza y confirma un cierre responsable. El panel municipal permite seguir el uso y atender incidencias. Las reglas visibles y el cierre compartido facilitan repetir la conducta positiva.

### 03. Prototipo / demostración

Demo propuesta de 90 segundos: encontrar una actividad, unirse, hacer check-in y registrar el cierre; después, mostrar la actualización del panel municipal y una incidencia de ejemplo. Se usarán tres espacios demo y datos simulados identificados como tales. Enlace o capturas: pendientes de incorporar; respaldo previsto mediante storyboard y video del recorrido.

### 04. Plan piloto 2027

Piloto propuesto de 8 semanas en 3 espacios de Los Olivos, con 60 vecinos adultos inscritos y 24 actividades previstas durante la fase de uso. Alianza municipal por gestionar. Recursos: PWA, teléfonos, QR, organizadores y enlace municipal. Presupuesto tentativo: S/ 1,500, sin remuneraciones ni obras. Incluye preparación, línea base, cuatro semanas de uso y evaluación.

### 05. ¿Cómo mediremos el impacto?

- **Indicador observable:** porcentaje de actividades observadas que cumplen el cierre responsable: residuos recogidos, instalaciones cuidadas y espacio liberado a tiempo.
- **Línea base:** por medir durante dos semanas, antes del uso de JuegaBarrio.
- **Meta esperada:** aumentar 20 puntos porcentuales frente a la línea base, con máximo de 100 %; meta tentativa a revisar antes de intervenir si la base es alta.
- **Comprobación del cambio:** comparar observaciones antes y después en espacios, actividades y horarios similares, con la misma lista de cuidado, evidencia y cantidades observadas explícitas.

## 9. Revisión del equipo

Puedes editar las respuestas directamente o anotar los cambios aquí:

- Nombre definitivo del equipo:
- Integrantes:
- Cambios al problema o al público:
- Distrito, espacios y situación de la alianza:
- Cambios al presupuesto, duración o escala:
- Enlace o material del prototipo disponible:
- Cambios al indicador o la meta:

Después de revisar estas respuestas, se podrá trasladar la versión acordada al canvas conservando su estructura de una página.
