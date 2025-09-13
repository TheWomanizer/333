# 🎯 GUÍA RÁPIDA PARA EDITAR TU PORTAFOLIO

¡Hola! Esta guía te ayudará a cambiar fácilmente todo el contenido de tu portafolio sin tocar código complejo.

## 📁 ARCHIVOS QUE PUEDES EDITAR

### 🎨 **Configuración General**
- `config/content.js` - ⭐ **ARCHIVO PRINCIPAL** para editar tu información personal, redes sociales y textos

### 📝 **Contenido Específico**
- `data/blogs.js` - Editar artículos del blog
- `data/proyectos.js` - Editar tus proyectos  
- `data/galeria.js` - Editar tu galería fotográfica
- `data/libros.js` - Editar tu biblioteca (cuando esté listo)

---

## 🚀 EDICIONES RÁPIDAS

### ✏️ **Cambiar tu información personal**
Abre `config/content.js` y edita:
```javascript
personal: {
  name: "TU NOMBRE AQUÍ",
  birthDate: "TU FECHA DE NACIMIENTO",
  location: "TU CIUDAD",
  email: "tu@email.com",
  phone: "+57 XXX XXX XXXX"
}
```

### 🌐 **Cambiar redes sociales**
En el mismo archivo:
```javascript
social: {
  instagram: {
    url: "TU URL DE INSTAGRAM",
    emoji: "📸", // Cambia el emoji si quieres
    label: "Instagram"
  }
  // Agrega más redes si necesitas
}
```

### 📖 **Cambiar tu biografía**
Edita los párrafos en `pages.about.biography`:
```javascript
biography: [
  {
    emoji: "🌐",
    title: "Tu título aquí:",
    content: "Escribe tu historia aquí..."
  }
]
```

---

## 📝 EDITAR BLOGS

Ve a `data/blogs.js` y:

### ➕ **Agregar nuevo blog:**
```javascript
{
  id: 4, // Nuevo ID
  title: "Tu Título",
  date: "2024-12-12",
  category: "Tu Categoría",
  preview: "Descripción corta...",
  content: `<p>Tu contenido aquí...</p>`,
  readTime: "X min",
  tags: ["tag1", "tag2"]
}
```

### ✏️ **Editar blog existente:**
Busca el blog por ID y cambia los campos que necesites.

---

## 💼 EDITAR PROYECTOS

Ve a `data/proyectos.js` y:

### ➕ **Agregar nuevo proyecto:**
```javascript
{
  id: 6,
  title: "Nombre del Proyecto",
  subtitle: "Descripción corta",
  description: "Descripción más larga...",
  status: "En Desarrollo", // Activo, Beta, Concepto
  category: "Web Development",
  technologies: ["React", "Node.js"],
  progress: 50, // 0-100
  github: "https://github.com/tu-usuario/proyecto",
  demo: "https://tu-demo.com"
}
```

---

## 📸 EDITAR GALERÍA

Ve a `data/galeria.js` y:

### ➕ **Agregar nueva foto:**
```javascript
{
  id: 9,
  title: "Título de la Foto",
  description: "Descripción...",
  date: "2024-12-12",
  category: "Urbana", // Urbana, Macro, Abstracta, etc.
  location: "Lugar",
  camera: "Tu Cámara",
  settings: "f/2.8 | 1/500s | ISO 200",
  src: "/galeria/tu-imagen.jpg", // Sube la imagen a public/galeria/
  tags: ["tag1", "tag2"]
}
```

---

## 🎨 PERSONALIZACIÓN VISUAL

En `config/content.js`, sección `visual`:
```javascript
visual: {
  primaryColor: "purple", // purple, blue, green, red
  accentColor: "#9333ea", // Color hex personalizado
  animations: {
    enableParticles: true, // true/false
    enableHoverEffects: true // true/false
  }
}
```

---

## 📂 SUBIR IMÁGENES

1. **Para galería:** Sube imágenes a `public/galeria/`
2. **Para proyectos:** Sube imágenes a `public/proyectos/`
3. **Para perfil:** Sube a `public/textures/`

Luego referencia como: `"/galeria/mi-imagen.jpg"`

---

## 🆘 CONSEJOS IMPORTANTES

1. **Siempre haz backup** de tus archivos antes de editar
2. **Mantén la estructura** de los objetos JavaScript
3. **No borres las comas** al final de cada propiedad
4. **Usa comillas dobles** para strings
5. **Para HTML en contenido**, usa backticks `` `<p>contenido</p>` ``

---

## 🔄 DESPUÉS DE EDITAR

1. Guarda los archivos
2. Si tienes el servidor de desarrollo corriendo (`npm run dev`), los cambios aparecerán automáticamente
3. Si no, ejecuta `npm run dev` en la terminal

---

¡Con estos archivos puedes cambiar TODO el contenido de tu portafolio fácilmente! 🚀