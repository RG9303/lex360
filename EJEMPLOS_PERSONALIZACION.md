# 🎨 Ejemplos de Personalización

Si deseas experimentar con diferentes estilos, aquí te muestro varias opciones:

## 1️⃣ Estilo Sutilísimo (Apenas visible)

```css
.hero-background-layer {
  background-image: url('/team/team-group.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.08;
  position: absolute;
  inset: 0;
  z-index: 0;
  filter: grayscale(60%) contrast(0.9) blur(1px);
}
```

**Resultado:** Efecto muy sutil, casi como una marca de agua

---

## 2️⃣ Estilo Actual (Recomendado - Perfecto Balance)

```css
.hero-background-layer {
  background-image: url('/team/team-group.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.15;
  position: absolute;
  inset: 0;
  z-index: 0;
  filter: grayscale(40%) contrast(1.1) blur(0.5px);
}
```

**Resultado:** Balance perfecto entre visibilidad y profesionalismo

---

## 3️⃣ Estilo Más Dramático (Color completo)

```css
.hero-background-layer {
  background-image: url('/team/team-group.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.20;
  position: absolute;
  inset: 0;
  z-index: 0;
  filter: grayscale(10%) contrast(1.2) blur(0.3px);
}
```

**Resultado:** Imagen más visible, con más color

---

## 4️⃣ Estilo Premium (Blanco y negro elegante)

```css
.hero-background-layer {
  background-image: url('/team/team-group.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.12;
  position: absolute;
  inset: 0;
  z-index: 0;
  filter: grayscale(100%) contrast(1.3) blur(0.2px) brightness(1.1);
}
```

**Resultado:** Blanco y negro con alto contraste, muy elegante

---

## 5️⃣ Estilo Vintage (Sepia)

```css
.hero-background-layer {
  background-image: url('/team/team-group.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.18;
  position: absolute;
  inset: 0;
  z-index: 0;
  filter: grayscale(20%) contrast(1.1) sepia(20%) blur(0.5px) brightness(0.95);
}
```

**Resultado:** Tonos sepia, aspecto retro-elegante

---

## 6️⃣ Estilo Bold (Muy prominente)

```css
.hero-background-layer {
  background-image: url('/team/team-group.png');
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  opacity: 0.30;
  position: absolute;
  inset: 0;
  z-index: 0;
  filter: grayscale(30%) contrast(1.2) blur(0px);
}
```

**Resultado:** Imagen muy visible, profesional y audaz

---

## 🌟 Variaciones del Efecto de Volumen

### Volumen Sutil
```css
.hero-background-shadow {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(circle at 50% 50%, rgba(194, 169, 110, 0.03) 0%, rgba(2, 5, 10, 0.2) 100%);
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.5), inset 0 0 80px rgba(2, 5, 10, 0.3);
  pointer-events: none;
}
```

### Volumen Actual (Recomendado)
```css
.hero-background-shadow {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(circle at 50% 50%, rgba(194, 169, 110, 0.08) 0%, rgba(2, 5, 10, 0.4) 100%);
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.8), inset 0 0 120px rgba(2, 5, 10, 0.6);
  pointer-events: none;
}
```

### Volumen Dramático
```css
.hero-background-shadow {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(circle at 50% 50%, rgba(194, 169, 110, 0.12) 0%, rgba(2, 5, 10, 0.6) 100%);
  box-shadow: inset 0 0 80px rgba(0, 0, 0, 1), inset 0 0 150px rgba(2, 5, 10, 0.8);
  pointer-events: none;
}
```

### Volumen Minimalista (Solo gradiente)
```css
.hero-background-shadow {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 5, 10, 0.3) 100%);
  pointer-events: none;
}
```

---

## 🎯 Combinaciones Recomendadas

### Para Foto Corporativa Profesional
```css
/* Hero Background Layer */
opacity: 0.12;
filter: grayscale(50%) contrast(1.0) blur(0.4px);

/* Hero Background Shadow */
background: radial-gradient(circle at 50% 50%, rgba(194, 169, 110, 0.06) 0%, rgba(2, 5, 10, 0.35) 100%);
box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.7), inset 0 0 100px rgba(2, 5, 10, 0.5);
```

### Para Foto Colorida de Equipo
```css
/* Hero Background Layer */
opacity: 0.18;
filter: grayscale(25%) contrast(1.15) blur(0.3px);

/* Hero Background Shadow */
background: radial-gradient(circle at 50% 50%, rgba(194, 169, 110, 0.10) 0%, rgba(2, 5, 10, 0.45) 100%);
box-shadow: inset 0 0 70px rgba(0, 0, 0, 0.8), inset 0 0 130px rgba(2, 5, 10, 0.6);
```

### Para Foto en Blanco y Negro
```css
/* Hero Background Layer */
opacity: 0.20;
filter: grayscale(100%) contrast(1.25) blur(0.2px);

/* Hero Background Shadow */
background: radial-gradient(circle at 50% 50%, rgba(194, 169, 110, 0.07) 0%, rgba(2, 5, 10, 0.4) 100%);
box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.9), inset 0 0 120px rgba(2, 5, 10, 0.6);
```

---

## 🔧 Cómo Usar Estos Ejemplos

1. **Elige el estilo que más te guste** de los anteriores
2. **Abre el archivo:** `src/app/globals.css`
3. **Busca las clases:**
   - `.hero-background-layer`
   - `.hero-background-shadow`
4. **Reemplaza con el código del ejemplo**
5. **Guarda el archivo**
6. **El navegador se actualiza automáticamente** (HMR - Hot Module Replacement)

---

## 📱 Nota sobre Responsive Design

Todos estos estilos funcionan perfectamente en:
- ✅ Desktop (1920px+)
- ✅ Laptop (1200px+)
- ✅ Tablet (768px+)
- ✅ Mobile (375px+)

La propiedad `background-attachment: fixed` mantiene el efecto parallax incluso en móvil.

---

## ✨ Tips Profesionales

1. **Para fotos con mucho detalle:** Aumenta `opacity` hasta 0.20-0.25
2. **Para fotos claras:** Reduce `opacity` a 0.08-0.12
3. **Para mantener legibilidad de texto:** Mantén `opacity` bajo 0.25
4. **Para un efecto más "wow":** Reduce `grayscale` y aumenta `contrast`
5. **Para efecto más sutil y elegante:** Aumenta `grayscale` y reduce `opacity`

---

**¡Experimenta y encuentra tu estilo perfecto!** 🎨
