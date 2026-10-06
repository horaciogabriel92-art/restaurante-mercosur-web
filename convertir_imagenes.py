import os
from PIL import Image
from pathlib import Path

IMG_DIR = Path("public/img")
LOGO_SOURCE = Path("../../34 años mercosur.png")

# Crear versión comprimida del logo (para header y footer)
def procesar_logo():
    if not LOGO_SOURCE.exists():
        print(f"No se encontró el logo: {LOGO_SOURCE}")
        return

    img = Image.open(LOGO_SOURCE)
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # Redimensionar para web (máximo 800px de ancho para header, 500px para footer)
    ancho_header = 800
    ratio = ancho_header / img.width
    alto_header = int(img.height * ratio)
    header = img.resize((ancho_header, alto_header), Image.LANCZOS)

    ancho_footer = 500
    ratio = ancho_footer / img.width
    alto_footer = int(img.height * ratio)
    footer = img.resize((ancho_footer, alto_footer), Image.LANCZOS)

    header.save(IMG_DIR / "logo-header.webp", "WEBP", quality=90, method=6)
    footer.save(IMG_DIR / "logo-cream.webp", "WEBP", quality=90, method=6)

    # También una versión grande para Home si se necesita
    ancho_general = 600
    ratio = ancho_general / img.width
    alto_general = int(img.height * ratio)
    general = img.resize((ancho_general, alto_general), Image.LANCZOS)
    general.save(IMG_DIR / "logo.webp", "WEBP", quality=90, method=6)

    print(f"Logo procesado: {LOGO_SOURCE} -> logo-header.webp, logo-cream.webp, logo.webp")


def convertir_imagenes():
    extensiones = {".png", ".jpg", ".jpeg"}
    archivos = [f for f in IMG_DIR.iterdir() if f.suffix.lower() in extensiones]

    for archivo in archivos:
        try:
            img = Image.open(archivo)

            # Convertir a RGB si es necesario (WebP no soporta paleta indexada directamente)
            if img.mode in ('P', 'LA', 'L'):
                img = img.convert('RGBA')
            elif img.mode == 'RGBA':
                pass
            elif img.mode != 'RGB':
                img = img.convert('RGB')

            destino = archivo.with_suffix(".webp")
            img.save(destino, "WEBP", quality=85, method=6)
            print(f"Convertido: {archivo.name} -> {destino.name}")

            # Borrar original
            archivo.unlink()
        except Exception as e:
            print(f"Error con {archivo}: {e}")


if __name__ == "__main__":
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    # Primero convertir las imagenes viejas, LUEGO el logo nuevo
    # para que el logo de 34 anios no sea sobrescrito por los logos antiguos
    convertir_imagenes()
    procesar_logo()
    print("Proceso completado.")
