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

    # Redimensionar para web (máximo 400px de ancho para header, 300px para footer)
    ancho_header = 400
    ratio = ancho_header / img.width
    alto_header = int(img.height * ratio)
    header = img.resize((ancho_header, alto_header), Image.LANCZOS)

    ancho_footer = 300
    ratio = ancho_footer / img.width
    alto_footer = int(img.height * ratio)
    footer = img.resize((ancho_footer, alto_footer), Image.LANCZOS)

    header.save(IMG_DIR / "logo-header.webp", "WEBP", quality=85, method=6)
    footer.save(IMG_DIR / "logo-cream.webp", "WEBP", quality=85, method=6)

    # También una versión grande para Home si se necesita
    img.save(IMG_DIR / "logo.webp", "WEBP", quality=85, method=6)

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
    procesar_logo()
    convertir_imagenes()
    print("Proceso completado.")
