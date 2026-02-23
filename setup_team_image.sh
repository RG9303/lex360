#!/bin/bash

# Script para colocar la imagen del equipo
# Uso: ./setup_team_image.sh /ruta/a/tu/imagen.png

if [ -z "$1" ]; then
    echo "❌ Error: Debes proporcionar la ruta a tu imagen"
    echo ""
    echo "Uso:"
    echo "  ./setup_team_image.sh /ruta/a/tu/imagen.png"
    echo ""
    echo "Ejemplo:"
    echo "  ./setup_team_image.sh ~/Downloads/equipo.png"
    exit 1
fi

SOURCE_IMAGE="$1"
DEST_DIR="./public/team"
DEST_FILE="$DEST_DIR/team-group.png"

# Verificar que el archivo existe
if [ ! -f "$SOURCE_IMAGE" ]; then
    echo "❌ Error: No se encontró el archivo: $SOURCE_IMAGE"
    exit 1
fi

# Crear directorio si no existe
mkdir -p "$DEST_DIR"

# Copiar imagen
cp "$SOURCE_IMAGE" "$DEST_FILE"

if [ $? -eq 0 ]; then
    echo "✅ Imagen copiada exitosamente a: $DEST_FILE"
    echo ""
    echo "Detalles del archivo:"
    ls -lh "$DEST_FILE"
    echo ""
    echo "🎨 La imagen aparecerá en el hero section con:"
    echo "   - Transparencia: 15%"
    echo "   - Efecto de desaturación: 40%"
    echo "   - Efecto de volumen y sombra"
    echo ""
    echo "📝 Puedes ajustar estos valores en: src/app/globals.css"
else
    echo "❌ Error al copiar la imagen"
    exit 1
fi
