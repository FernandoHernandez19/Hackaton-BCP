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

---

# Recursos nuevos para pedir a Codex (versión "app novedosa")

Guárdalos en `public/images/app/` con el nombre exacto. Orden de prioridad: del 1 al 4 se notan en la demo; el resto es opcional. Estilo común: **fotografía realista o ilustración plana limpia, paleta amarillo #ffc400, negro azulado #14181f y turquesa #17b8c9, sin texto, sin logotipos, sin rostros reconocibles, barrio de Lima (Perú).**

## 1. Par antes / después (el más importante)
Dos fotos del **mismo encuadre exacto** (misma cámara, mismo ángulo y misma luz), para que el deslizador "antes / después" de la app se luzca. Formato 4:3, 1600x1200.

| Archivo | Prompt |
|---|---|
| `demo-antes.jpg` | Losa deportiva de barrio en Lima al atardecer, vista frontal a la altura de los ojos. Tiene botellas plásticas, bolsas y envases tirados por el piso y junto a la reja; un banco con basura encima. Sin personas. Foto realista de celular. |
| `demo-despues.jpg` | **Exactamente el mismo encuadre, ángulo y luz** que la imagen anterior, pero la losa está limpia y ordenada: sin basura, bolsas en el tacho, banco despejado. Sin personas. Foto realista de celular. |

Cuando los tengas, avísame: los conecto al cierre de ejemplo de la demo (marcado como "imagen de ejemplo").

## 2. Sello de cuidado (celebración al cerrar)
`sello-cuidado.png` — 800x800, **fondo transparente**. Un sello/medalla redonda amarilla (#ffc400) con borde punteado azul oscuro, un visto grande en el centro, dos destellos pequeños y una hoja verde. Estilo 3D suave tipo insignia de app, con brillo sutil. Sin texto.

## 3. Ilustraciones de bienvenida (3 pantallas)
Ilustración plana, fondo transparente, 900x640 cada una. Hoy la app usa unas hechas en código; estas las reemplazarían.
- `onb-juega.png` — vecinos de distintas edades jugando vóley y fútbol en una losa con un celular mostrando un mapa con pines.
- `onb-cuida.png` — un grupo recoge botellas y las pone en una bolsa, uno toma una foto del espacio con su celular.
- `onb-deja-mejor.png` — un sello de cuidado grande sobre una losa limpia al atardecer, con pequeños destellos.

## 4. Fotos de actividades que aún usan ilustración
Cuadradas 800x800. `cat-gincana.jpg` ya existe. Faltan solo si quieres variar: `cat-ajedrez.jpg` (ajedrez gigante en un parque), `cat-yoga.jpg` (esteras de yoga al amanecer), `cat-tenis.jpg` (tenis de mesa al aire libre).

## 5. Estados vacíos (opcional)
Ilustración plana, 700x500, fondo transparente.
- `vacio-actividades.png` — una losa vacía con un balón y un cartel QR, sensación de "sé el primero en jugar".
- `vacio-espacios.png` — un marcador de mapa con un corazón vacío, para "Mis espacios".

## 6. Sonido (opcional)
`sello.mp3` — un "plin" corto y alegre de 1 segundo para la celebración. Libre de derechos.
