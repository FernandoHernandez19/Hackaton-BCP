# Imágenes para Pukllay (pedir a Codex)

La app ya busca estas imágenes y, si no existen, dibuja una ilustración. Basta con guardarlas en `public/images/app/` con el nombre exacto.

Estilo común para todas: **fotografía realista, luz de tarde, colores vivos, cálida y acogedora, barrio de Lima (Perú) en un distrito de clase media. Sin texto, sin logotipos, sin marcas, sin rostros reconocibles. Espacios cuidados y limpios.**

## Fotos de espacios (formato horizontal 16:9, 1600x900, JPG)

| Archivo | Prompt |
|---|---|
| `parque-demo-2.jpg` (también vale .png) (Parque Piloto A) | Parque vecinal en Lima con árboles grandes, bancas de madera, un farol y una pequeña cancha de fútbol de pasto al fondo. Nadie en primer plano. |
| `losa-demo-1.jpg` (también vale .png) (Losa Piloto B) | Losa deportiva de barrio en Lima con piso azul y líneas blancas, red de vóley y aro de básquet, rejas verdes, edificios bajos de ladrillo al fondo, jardín cuidado alrededor. |
| `losa-demo-3.jpg` (también vale .png) (Parque Piloto C) | Parque pequeño de barrio en Lima con rayuela pintada en el piso, mesas de ajedrez, árboles jóvenes y bancas, sensación de espacio comunitario. |

## Miniaturas de actividades (cuadradas 1:1, 800x800, JPG)

| Archivo | Prompt |
|---|---|
| `cat-futbol.jpg` (también vale .png) | Balón de fútbol sobre pasto verde con un arco de fútbol desenfocado al fondo, luz de tarde. |
| `cat-voley.jpg` (también vale .png) | Balón de vóley amarillo y azul sobre una losa deportiva con la red desenfocada al fondo. |
| `cat-basquet.jpg` (también vale .png) | Balón de básquet sobre una losa de barrio con el aro desenfocado al fondo. |
| `cat-baile.jpg` (también vale .png) | Grupo de vecinos (vistos de espaldas o desenfocados) bailando zumba en un parque al atardecer. |
| `cat-juegostradicionales.jpg` (también vale .png) | Rayuela y trompos de colores sobre el piso de un parque, vista cenital. |
| `cat-bienestar.jpg` (también vale .png) | Esteras de yoga en un parque al amanecer con luz suave, sin rostros visibles. |
| `cat-otro.jpg` (también vale .png) | Vecinos reunidos en un parque limpio y soleado, vistos de lejos. |

## Fondo del escáner QR (vertical, 1200x1200, JPG)

Se usa el mismo `parque-demo-2.jpg` (también vale .png) desenfocado por la app. No hace falta imagen aparte.

## Cómo se publican
1. Guardar los archivos en `public/images/app/`.
2. Pedirle a Claude "publicar de nuevo": actualiza el stack en Server TEC.
