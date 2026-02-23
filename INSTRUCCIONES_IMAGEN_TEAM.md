# Cómo Reemplazar la Imagen del Equipo

## Pasos para colocar tu imagen en la aplicación:

### 1. **Descarga tu imagen**
   - Descarga la imagen PNG que adjuntaste (foto del equipo de abogados)

### 2. **Ubicación correcta**
   - Coloca la imagen en la carpeta: `/public/team/`
   - **Nombre del archivo:** `team-group.png`
   - Ruta completa: `/Users/tescaelements/Desktop/lex-360-app/public/team/team-group.png`

### 3. **Requerimientos de la imagen**
   - **Formato:** PNG (recomendado para transparencia)
   - **Recomendación:** La imagen debe tener fondo transparente para mejores resultados
   - **Tamaño:** 1200x600px (o proporciones similares)

### 4. **Opciones de personalización**
   
   Si deseas ajustar el efecto de transparencia y volumen, edita el archivo:
   **`src/app/globals.css`**
   
   Busca la sección `.hero-background-layer` y ajusta:
   
   ```css
   .hero-background-layer {
     opacity: 0.15;  /* Cambia este valor para más/menos transparencia (0-1) */
     filter: grayscale(40%) contrast(1.1) blur(0.5px);
   }
   ```
   
   **Parámetros disponibles:**
   - `opacity: 0.15` → Transparencia (0 = invisible, 1 = opaco)
   - `grayscale(40%)` → Desaturación (0% = color completo, 100% = blanco/negro)
   - `contrast(1.1)` → Contraste (1 = sin cambio, valores > 1 = más contraste)
   - `blur(0.5px)` → Desenfoque (mayor valor = más borroso)

### 5. **Efecto de Volumen**
   
   El efecto de sombra y volumen está configurado en la clase `.hero-background-shadow`:
   
   ```css
   .hero-background-shadow {
     background: radial-gradient(circle at 50% 50%, rgba(194, 169, 110, 0.08) 0%, rgba(2, 5, 10, 0.4) 100%);
     box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.8), inset 0 0 120px rgba(2, 5, 10, 0.6);
   }
   ```
   
   Puedes ajustar:
   - `rgba(194, 169, 110, 0.08)` → Color y opacidad del glow dorado
   - `rgba(2, 5, 10, 0.4)` → Oscuridad de los bordes
   - `60px` y `120px` → Tamaño del efecto de sombra

### 6. **Previsualizar cambios**
   - El servidor dev está en: `http://localhost:3000`
   - Los cambios se actualizarán automáticamente en el navegador

## Nota Importante:
✅ **Ningún cambio en el formato actual de la app** - solo se agregó:
- Una capa de imagen de fondo con transparencia en el hero section
- Efectos de sombra interna para simular volumen
- Todo está detrás del contenido existente (HeroAnimation, botones, etc.)

## Soporte de navegadores:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
