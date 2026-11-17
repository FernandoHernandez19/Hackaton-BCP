# Canvas de solución — Pukllay

**Versión oficial.** Dueño: Fernando (ver `COORDINACION.md`). Base: el borrador del equipo TecMasters, `Entrevista.md` y la demo publicada en https://win.crm-ia.org.
Versión de una página para entregar: [`canvas-pukllay.pdf`](canvas-pukllay.pdf). Lo marcado como tentativo es una propuesta, no un dato verificado.

**Nombre de la solución:** Pukllay — "Juega. Cuida. Deja mejor." (*pukllay* significa "jugar" en quechua)
**Equipo:** Equipo Pukllay (provisional). **Integrantes:** Luis Fernando, Smith Bazan y Jackelin Soncco; cuarto integrante por confirmar.
**Comportamiento elegido (reto BCP n.º 1):** cuidar los espacios públicos mediante un cierre responsable después de cada actividad.

## 01. El problema (comportamiento observable)
Queremos que los grupos que usan parques y losas deportivas de Los Olivos terminen su actividad recogiendo sus residuos, dejando las instalaciones sin daños nuevos y liberando el espacio a tiempo para el siguiente grupo.

**Hipótesis por validar:** hoy ese cierre no se hace de forma constante y no hay una forma sencilla de coordinarlo ni comprobarlo. No tenemos datos de campo que midan su frecuencia; el piloto los obtendrá. Afecta a quienes usan el espacio después, a los vecinos del entorno y al personal municipal de mantenimiento.

**Público inicial:** jóvenes y adultos que ya juegan u organizan vóley, fútbol o ejercicio grupal, convocados con organizadores barriales.

## 02. Nuestra solución (3 pasos)
1. **Comprometerse:** el vecino ve un espacio habilitado por la municipalidad, con sus reglas y horarios, y crea o se une a una actividad aceptando "dejo el espacio limpio".
2. **Llegar:** escanea el QR del espacio para confirmar su llegada. Solo se valida la cercanía aproximada en ese momento; no se guarda el recorrido.
3. **Cerrar:** al terminar, el grupo hace un cierre breve: lista de cuidado de 3 puntos, foto "después" y reporte de incidencia si hay un problema. Los desperfectos que ya existían se distinguen de los nuevos. El espacio suma a su "racha de cuidado" y la municipalidad lo ve en su panel.

**Por qué ayuda:** vuelve fácil el momento que hoy se olvida (el cierre), pone el compromiso antes de jugar y hace visible el cuidado del espacio, no de las personas: sin rankings públicos.

## 03. Prototipo / demostración
Demo publicada: **https://win.crm-ia.org** (QR en `public/images/qr-win-crm-ia.png`), desarrollada por el equipo TecMasters. Recorrido de 90 segundos con vista de vecino y de municipalidad: explorar y unirse, check-in con QR y foto "antes", cierre con lista de cuidado y foto "después", incidencia y panel municipal con indicador y racha.

Los espacios, los vecinos y las actividades son **datos simulados** y la app lo indica. La validación de ubicación también es simulada. Respaldo: video del recorrido (pendiente de grabar).

## 04. Plan piloto 2027
- **Dónde y cuánto:** 8 semanas en 3 espacios públicos de Los Olivos (idealmente dos losas y un parque) que la municipalidad autorice.
- **Etapas:** semana 1, preparación; semanas 2 y 3, línea base sin Pukllay; semanas 4 a 7, uso con actividades, check-in y cierre; semana 8, evaluación.
- **Alcance tentativo:** 60 vecinos inscritos y 24 actividades en las 4 semanas de uso. Son metas de convocatoria, no una muestra representativa.
- **Aliados:** Municipalidad Distrital de Los Olivos (alianza **por gestionar**: aún no hay convenio, permiso ni contacto confirmado) y organizadores barriales. El apoyo de la UPN al seguimiento queda **por confirmar**.
- **Recursos:** la web app, teléfonos con cámara e internet, QR impresos con código de respaldo, un enlace municipal y el acompañamiento del equipo. No requiere obras ni hardware especial.
- **Riesgos:** que la municipalidad no autorice los espacios a tiempo, baja participación y que el cierre registrado en la app no refleje lo ocurrido. Por eso el indicador se mide con observación humana.

### Presupuesto tentativo (sin cotizar)
| Concepto | Monto |
|---|---:|
| Tecnología: alojamiento, dominio y servicios | S/ 300 |
| Impresión de QR, reglas e instrucciones | S/ 150 |
| Traslados y visitas de seguimiento | S/ 400 |
| Conectividad de apoyo para las pruebas | S/ 150 |
| Inducción y materiales de convocatoria | S/ 200 |
| Contingencia | S/ 300 |
| **Total (8 semanas)** | **S/ 1,500** |

No incluye remuneraciones ni obras. Aportes propuestos: el equipo pone el desarrollo y el acompañamiento; la municipalidad, la autorización y el tiempo de un enlace. El financiamiento de los gastos queda por gestionar. No depende de premios económicos ni de cobros.

## 05. ¿Cómo mediremos el impacto?
- **Indicador observable:** % de actividades observadas que cumplen el cierre responsable: residuos recogidos, instalaciones ordenadas y sin nuevos daños atribuibles al grupo, y espacio liberado a tiempo.
- **Cálculo:** actividades observadas que cumplen los 3 criterios / total de actividades observadas que terminaron × 100.
- **Línea base:** por medir en las semanas 2 y 3, con la misma lista de verificación. No se asume 0 %.
- **Meta esperada (tentativa):** +20 puntos porcentuales frente a la línea base, con tope de 100 %. Se revisa antes de intervenir si la línea base ya es alta.
- **Cómo comprobaremos el cambio:** un observador del equipo o el enlace municipal aplica la lista antes y durante el piloto, en actividades comparables por espacio, tipo y horario, con al menos 12 observaciones por etapa. Siempre se informa cuántas actividades se verificaron. Las fotos y los cierres de la app son un indicador adicional de adopción.
- **Precaución:** que no haya incidencias no significa que el espacio quedó cuidado, y una mejora observada no prueba que todo el cambio se deba a la plataforma.

## Cómo regenerar el PDF
Si cambia este texto, actualiza también `docs/canvas-generar.py` y ejecútalo desde la raíz del repositorio (requiere Python con `pypdf` y `reportlab`):

```bash
python docs/canvas-generar.py
```
