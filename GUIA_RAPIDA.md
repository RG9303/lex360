# 🚀 GUÍA RÁPIDA - Usar tu imagen de equipo

## En 3 pasos:

### 1️⃣ Descarga tu imagen PNG
- Guarda la imagen de los abogados que enviaste
- Asegúrate que sea formato PNG (preferiblemente con fondo transparente)

### 2️⃣ Colócala en la carpeta correcta
```bash
cp ~/Downloads/tu-imagen.png /Users/tescaelements/Desktop/lex-360-app/public/team/team-group.png
```

O simplemente copia el archivo manualmente a:
```
lex-360-app/public/team/team-group.png
```

### 3️⃣ ¡Listo! 
Abre http://localhost:3000 en tu navegador y verás los cambios automáticamente.

---

## 🎯 Lo que verás:

✅ Imagen de fondo con **15% de transparencia** (muy sutil)
✅ Efecto **blanco y negro parcial** (40% desaturación)
✅ **Efecto de volumen** con sombras doradas
✅ **Sin cambios** al resto de la página

---

## 🎚️ Ajustar la transparencia:

Si quieres que se vea más o menos:

**Edita:** `src/app/globals.css`

**Busca:**
```css
.hero-background-layer {
  opacity: 0.15;  ← ESTE VALOR
```

**Prueba estos valores:**
- `0.08` = Casi invisible (muy sutil)
- `0.15` = **ACTUAL** (perfecto)
- `0.25` = Más visible
- `0.35` = Muy prominente

**Guarda y mira los cambios al instante en el navegador.**

---

## 📚 Documentos incluidos:

- **README_IMPLEMENTACION.md** - Resumen completo
- **CAMBIOS_REALIZADOS.md** - Detalles técnicos
- **INSTRUCCIONES_IMAGEN_TEAM.md** - Pasos detallados
- **EJEMPLOS_PERSONALIZACION.md** - Estilos CSS listos para copiar
- **setup_team_image.sh** - Script automático (opcional)

---

## ❓ ¿Algo no se ve bien?

1. **Asegúrate de:** La imagen está en `/public/team/team-group.png`
2. **Recarga el navegador:** Ctrl+Shift+R (fuerza recarga)
3. **Comprueba la consola:** F12 → Console (no debe haber errores)
4. **Prueba un valor diferente de `opacity`** en globals.css

---

## 💡 Tips:

- 🖼️ La imagen funciona mejor si tiene un **fondo transparente**
- 📱 Se ve bien en **mobile, tablet y desktop**
- ⚡ **Sin impacto de rendimiento** (imagen de fondo fija)
- 🔄 Cambiar la imagen es tan fácil como **reemplazar el archivo**

---

**¡Listo para usar! Solo descarga tu imagen y colócala en `/public/team/team-group.png` 🎉**
