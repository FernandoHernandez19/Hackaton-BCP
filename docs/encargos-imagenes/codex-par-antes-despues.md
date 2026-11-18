# Encargo para Codex: par de fotos antes / después

**Qué hacer:** generar 2 imágenes y guardarlas en las rutas exactas de abajo. No toques ningún otro archivo del proyecto, no hagas commit ni push.

## Dónde guardar (rutas exactas)
| Archivo | Ruta completa |
|---|---|
| Foto "antes" | `D:\proyectos IA\tecmasters\10 SKILLS ADRI Y JUANPE\10 SKILLS ADRI Y JUANPE\kit-instagram-web\hakaton BPC\public\images\app\demo-antes.jpg` |
| Foto "después" | `D:\proyectos IA\tecmasters\10 SKILLS ADRI Y JUANPE\10 SKILLS ADRI Y JUANPE\kit-instagram-web\hakaton BPC\public\images\app\demo-despues.jpg` |

Formato JPG, proporción 4:3, 1600x1200 píxeles. La carpeta `public\images\app\` ya existe.

## Para qué sirve
La app Pukllay (parques y losas de Lima) tiene un deslizador "antes / después" en el cierre de cada actividad. Estas dos fotos se muestran como ejemplo en la demo, así que **tienen que tener exactamente el mismo encuadre**: misma cámara, mismo ángulo, misma perspectiva, misma luz y los mismos edificios al fondo. Solo cambia la basura.

## Paso 1: generar `demo-antes.jpg`
```text
Genera una foto realista, tomada con celular, de una losa deportiva de barrio en Lima (Perú) al atardecer, vista frontal a la altura de los ojos, con luz cálida. Hay botellas plásticas, bolsas y envases tirados en el piso y junto a la reja, y un banco de madera con basura encima. No hay personas. Sin texto ni logotipos. Formato 4:3, 1600x1200.
```

## Paso 2: generar `demo-despues.jpg` a partir de la anterior
Usa la imagen del paso 1 como base y **edítala**, no generes una nueva:
```text
Edita esta misma imagen sin cambiar el encuadre, el ángulo, la perspectiva, la luz, los edificios ni la reja: solo quita toda la basura y deja la losa limpia y ordenada, con una bolsa dentro de un tacho y el banco despejado. Mantén exactamente la misma composición. No agregues personas ni texto. Formato 4:3, 1600x1200.
```

## Cómo comprobar que quedó bien
- Las dos imágenes se ven iguales salvo por la basura (reja, edificios, sombras y banco en el mismo lugar).
- No hay personas, texto ni logotipos.
- Pesan menos de 3 MB cada una (la app las comprime después).
- Si el ángulo cambió entre las dos, repite el paso 2.

Al terminar, avisa al usuario que ya están guardadas.
