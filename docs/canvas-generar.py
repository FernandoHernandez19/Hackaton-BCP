"""Genera docs/canvas-pukllay.pdf (una página) sobre la plantilla del evento.

Uso, desde la raíz del repositorio:  python docs/canvas-generar.py
Requiere: pypdf y reportlab (python -m pip install pypdf reportlab).
El texto debe coincidir con docs/canvas-pukllay.md (versión oficial).
"""
from io import BytesIO
from pathlib import Path

from pypdf import PdfReader, PdfWriter
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

DOCS = Path(__file__).resolve().parent
ROOT = DOCS.parent
TEMPLATE = DOCS / "canvas-plantilla-ignite.pdf"
OUT = DOCS / "canvas-pukllay.pdf"
QR = ROOT / "public/images/qr-win-crm-ia.png"

# Fuente: Arial de Windows si existe; si no, Helvetica (incluida en reportlab).
REG, BOLD = "Helvetica", "Helvetica-Bold"
arial = Path("C:/Windows/Fonts/arial.ttf")
if arial.exists():
    pdfmetrics.registerFont(TTFont("Arial", str(arial)))
    pdfmetrics.registerFont(TTFont("Arial-Bold", "C:/Windows/Fonts/arialbd.ttf"))
    pdfmetrics.registerFontFamily("Arial", normal="Arial", bold="Arial-Bold", italic="Arial", boldItalic="Arial-Bold")
    REG, BOLD = "Arial", "Arial-Bold"

reader = PdfReader(TEMPLATE)
W, H = (float(reader.pages[0].mediabox.width), float(reader.pages[0].mediabox.height))
buf = BytesIO()
c = canvas.Canvas(buf, pagesize=(W, H))
INK = colors.HexColor("#171717")
GOLD = colors.HexColor("#8A6C00")
YELLOW = colors.HexColor("#F2C500")
PALE = colors.HexColor("#FFF8D6")
GRAY = colors.HexColor("#F7F7F5")
MUTED = colors.HexColor("#555555")


def rect(x, top, width, height, fill, stroke=None):
    c.setFillColor(fill)
    c.setStrokeColor(stroke or fill)
    c.setLineWidth(0.6)
    c.rect(x, H - top - height, width, height, fill=1, stroke=1)


def para(text, x, top, width, size=9, leading=12, color=INK, bold=False, maxheight=None):
    style = ParagraphStyle("p", fontName=BOLD if bold else REG, fontSize=size, leading=leading, textColor=color)
    p = Paragraph(text, style)
    _, height = p.wrap(width, H)
    if maxheight is not None and height > maxheight:
        raise ValueError(f"El texto no cabe ({height:.0f} > {maxheight}): {text[:70]}")
    p.drawOn(c, x, H - top - height)
    return height


# Cabecera original del evento; se cubren las zonas en blanco con el texto.
rect(0, 92, W, H - 92, colors.white)
rect(28, 94, W - 56, 43, PALE)
para("NOMBRE DEL EQUIPO · SOLUCIÓN", 36, 99, 200, 7.1, 8.5, GOLD, True)
para("Equipo Pukllay", 36, 110, 200, 10, 12, INK, True)
para("Pukllay · <i>Juega. Cuida. Deja mejor.</i>", 36, 123, 200, 8, 10, MUTED)
para("INTEGRANTES", 248, 99, 300, 7.1, 8.5, GOLD, True)
para("Luis Fernando · Smith Bazan · Jackelin Soncco", 248, 113, 310, 8.8, 11)
para("COMPORTAMIENTO ELEGIDO", 568, 99, 230, 7.1, 8.5, GOLD, True)
para("Cuidado de espacios públicos<br/>mediante el cierre responsable", 568, 110, 235, 8.8, 10.8)

LEFT, RIGHT, BW = 28, 425, 389
TOP, LOWER, BH = 144, 301, 150


def box(x, top, number, title):
    rect(x, top, BW, BH, GRAY, colors.HexColor("#D4D4CF"))
    para(number, x + 8, top + 8, 20, 10, 12, GOLD, True)
    para(title, x + 27, top + 8, BW - 36, 10, 12, INK, True)


box(LEFT, TOP, "01", "EL PROBLEMA · COMPORTAMIENTO OBSERVABLE")
para("¿Qué situación queremos cambiar, a quién afecta y dónde?", LEFT + 8, TOP + 25, BW - 16, 7.8, 10, MUTED)
para(
    "En parques y losas de <b>Los Olivos</b>, queremos que cada grupo termine su actividad recogiendo sus residuos, "
    "dejando las instalaciones sin daños nuevos y liberando el espacio a tiempo para el siguiente grupo.",
    LEFT + 8, TOP + 41, BW - 16, 9.2, 12.3, maxheight=50,
)
para(
    "<b>Hipótesis por validar:</b> el cierre responsable no se realiza de forma constante ni tiene coordinación y "
    "verificación sencilla. Afecta a quienes usan el espacio después, a vecinos del entorno y al personal municipal. "
    "<b>Público inicial:</b> jóvenes y adultos que ya juegan vóley, fútbol o ejercicio grupal.",
    LEFT + 8, TOP + 93, BW - 16, 8.5, 11, maxheight=52,
)

box(RIGHT, TOP, "02", "NUESTRA SOLUCIÓN")
para("<b>Pukllay:</b> web app para activar y cuidar parques y losas junto con la municipalidad.", RIGHT + 8, TOP + 27, BW - 16, 9, 11.5, maxheight=25)
para(
    "<b>1. Comprometerse:</b> la municipalidad publica espacios, reglas y horarios; el vecino crea o se une a una actividad aceptando “dejo el espacio limpio”.<br/>"
    "<b>2. Llegar:</b> escanea el QR del espacio; solo se valida la cercanía en ese momento, sin guardar recorridos.<br/>"
    "<b>3. Cerrar:</b> lista de cuidado de 3 puntos, foto “después” e incidencias al panel municipal; se comparan fotos antes y después.",
    RIGHT + 8, TOP + 51, BW - 16, 8.4, 10.8, maxheight=76,
)
para("El espacio suma a su racha de cuidado: se reconoce el lugar, no a las personas, sin rankings públicos.", RIGHT + 8, TOP + 129, BW - 16, 7.9, 9.5, maxheight=20)

box(LEFT, LOWER, "03", "PROTOTIPO / DEMOSTRACIÓN")
QR_SIZE = 78
TEXT_W = BW - 16 - QR_SIZE - 10
para("<b>Demo publicada:</b><br/><font size=11><b>win.crm-ia.org</b></font>", LEFT + 8, LOWER + 27, TEXT_W, 8.7, 12, maxheight=30)
para(
    "Recorrido de 90 s con dos vistas, vecino y municipalidad: unirse con compromiso, check-in con QR y foto “antes”, "
    "cierre con lista de cuidado y foto “después”, incidencia y panel con indicador y racha.",
    LEFT + 8, LOWER + 58, TEXT_W, 8.2, 10.4, maxheight=56,
)
para(
    "Espacios, vecinos y actividades son <b>datos simulados</b> y la app lo indica; la ubicación también es simulada. "
    "Respaldo: video del recorrido.",
    LEFT + 8, LOWER + 117, BW - 16, 7.8, 9.6, maxheight=29,
)
if QR.exists():
    qx = LEFT + BW - 8 - QR_SIZE
    c.drawImage(str(QR), qx, H - (LOWER + 27) - QR_SIZE, QR_SIZE, QR_SIZE, preserveAspectRatio=True, mask="auto")
    para("Escanea para abrir", qx, LOWER + 27 + QR_SIZE + 2, QR_SIZE, 6.8, 8, MUTED)

box(RIGHT, LOWER, "04", "PLAN PILOTO 2027")
para(
    "<b>8 semanas · 3 espacios de Los Olivos</b> (dos losas y un parque). Meta de convocatoria: <b>60 vecinos inscritos "
    "y 24 actividades</b> en las 4 semanas de uso; no es una muestra representativa.",
    RIGHT + 8, LOWER + 27, BW - 16, 8.6, 11, maxheight=34,
)
para(
    "<b>Aliados:</b> Municipalidad de Los Olivos (por gestionar; sin convenio aún) y organizadores barriales.<br/>"
    "<b>Etapas:</b> preparación (S1), línea base (S2-3), uso (S4-7), evaluación (S8).<br/>"
    "<b>Riesgos:</b> autorización tardía, baja participación y cierres poco fiables (se mide con observación).",
    RIGHT + 8, LOWER + 64, BW - 16, 8.1, 10.3, maxheight=55,
)
para(
    "<b>Presupuesto tentativo: S/ 1,500.</b> Tecnología 300; impresos 150; traslados 400; conectividad 150; inducción 200; "
    "contingencia 300. Sin remuneraciones ni obras; sin cotizar; financiamiento por gestionar.",
    RIGHT + 8, LOWER + 121, BW - 16, 7.7, 9.3, maxheight=28,
)

rect(28, 459, W - 56, 105, colors.HexColor("#FFFAE8"), YELLOW)
para("05", 36, 467, 20, 10, 12, GOLD, True)
para("¿CÓMO MEDIREMOS EL IMPACTO?", 55, 467, 650, 10, 12, INK, True)
para(
    "<b>Indicador observable:</b> % de actividades observadas con cierre responsable: residuos recogidos, instalaciones "
    "sin nuevos daños atribuibles al grupo y espacio liberado a tiempo. Se comparan fotos antes y después.",
    36, 485, W - 72, 8.6, 11, maxheight=24,
)
para(
    "<b>Cálculo:</b> actividades que cumplen los 3 criterios / total de actividades observadas terminadas × 100.<br/>"
    "<b>Línea base:</b> por medir en semanas 2 y 3 (no se asume 0 %). <b>Meta tentativa:</b> +20 puntos porcentuales, con "
    "máximo de 100 %; se revisa antes de intervenir si la base es alta.",
    36, 510, W - 72, 8.4, 10.5, maxheight=33,
)
para(
    "<b>Comprobación:</b> la misma lista antes y durante el piloto, en actividades comparables, aplicada por el equipo o el "
    "enlace municipal; al menos 12 observaciones por etapa. Las fotos y cierres de la app son apoyo. Sin incidencias no "
    "equivale a cuidado, y la mejora no prueba que todo se deba a la plataforma.",
    36, 544, W - 72, 7.8, 9.2, maxheight=19,
)
para("ENTREGABLE DEL EQUIPO · Propuesta de piloto; las metas no representan resultados obtenidos.", 28, 572, W - 56, 7, 9, MUTED, True)
c.save()

overlay = PdfReader(buf)
writer = PdfWriter(clone_from=TEMPLATE)
writer.pages[0].merge_page(overlay.pages[0])
writer.add_metadata({
    "/Title": "Canvas de solución - Pukllay | Ignite Hackatón UPN × BCP",
    "/Author": "Equipo Pukllay",
    "/Subject": "Canvas de solución: cuidado de espacios públicos mediante el cierre responsable",
})
with OUT.open("wb") as f:
    writer.write(f)

check = PdfReader(OUT)
text = " ".join(check.pages[0].extract_text().split())
for required in ["Pukllay", "Luis Fernando", "Smith Bazan", "Jackelin Soncco", "win.crm-ia.org", "1,500", "20 puntos", "60 vecinos", "24 actividades"]:
    if required not in text:
        raise ValueError(f"Falta contenido esperado: {required}")
if "JuegaBarrio" in text:
    raise ValueError("Quedó el nombre anterior JuegaBarrio")
assert len(check.pages) == 1
print(f"Generado {OUT.relative_to(ROOT)}: una página, contenido verificado.")
