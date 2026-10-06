import os
from PIL import Image
from pathlib import Path

IMG_DIR = Path("public/img")
LOGO_SOURCE = Path("../../34 años mercosur.png")


def aplicar_transparencia_fondo_blanco(img, max_dist=25, gamma=1.5):
    """
    El logo de 34 años fue exportado con fondo blanco sólido en vez de transparente.
    Esta función convierte el blanco exterior en transparencia real, usando una
    transición suave para evitar bordes pixelados al ponerlo sobre fondos oscuros.
    Preserva el fondo burdeos del logo y la jarra de cerveza.
    """
    import numpy as np
    arr = np.array(img.convert('RGBA')).astype(float)
    rgb = arr[:, :, :3]
    alpha = arr[:, :, 3]

    # Distancia euclídea al blanco puro
    white_dist = np.sqrt(np.sum((rgb - 255) ** 2, axis=2))

    # Alpha: 0 en blanco puro, 255 lejos del blanco, transición suave en el halo
    new_alpha = 255 * np.clip(white_dist / max_dist, 0, 1) ** gamma
    # Respetar el alpha original (por si el PNG ya tuviera transparencia real)
    new_alpha = new_alpha * (alpha / 255.0)
    arr[:, :, 3] = new_alpha

    result = Image.fromarray(arr.astype(np.uint8))
    # Recortar al bounding box del contenido visible para eliminar exceso transparente
    bbox = result.split()[3].getbbox()
    if bbox:
        result = result.crop(bbox)
    return result


# Crear versión comprimida del logo (para header y footer)
def procesar_logo():
    if not LOGO_SOURCE.exists():
        print(f"No se encontró el logo: {LOGO_SOURCE}")
        return

    img = Image.open(LOGO_SOURCE)
    # Aplicar transparencia real al fondo blanco del logo
    img = aplicar_transparencia_fondo_blanco(img)

    def guardar_logo(src, ancho, path, calidad=90):
        ratio = ancho / src.width
        alto = int(src.height * ratio)
        resized = src.resize((ancho, alto), Image.LANCZOS)
        # Forzar RGBA para que WebP guarde el canal alfa
        if resized.mode != 'RGBA':
            resized = resized.convert('RGBA')
        resized.save(IMG_DIR / path, "WEBP", quality=calidad, method=6)
        print(f"  -> {path}: modo={Image.open(IMG_DIR / path).mode}, size={resized.size}")

    IMG_DIR.mkdir(parents=True, exist_ok=True)
    guardar_logo(img, 800, "logo-header.webp")
    guardar_logo(img, 500, "logo-cream.webp")
    guardar_logo(img, 600, "logo.webp")

    print(f"Logo procesado: {LOGO_SOURCE}")


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
