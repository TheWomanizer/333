# 🎯 INSTRUCCIONES SÚPER FÁCILES PARA EDITAR TU PORTAFOLIO

## 🚀 LO MÁS IMPORTANTE

**Solo necesitas editar ESTOS archivos para cambiar TODO:**

1. `config/content.js` - ⭐ **ARCHIVO MÁGICO** - Aquí cambias tu info personal y textos
2. `data/blogs.js` - Para editar tus blogs
3. `data/proyectos.js` - Para editar tus proyectos  
4. `data/galeria.js` - Para editar tu galería

---

## 📝 EDITAR TU INFORMACIÓN PERSONAL

Abre `config/content.js` y busca esta sección:

```javascript
personal: {
  name: "José Jiménez",                    // ← Cambia tu nombre aquí
  birthDate: "28 de septiembre de 2005",   // ← Cambia tu fecha de nacimiento
  location: "Medellín, Colombia",          // ← Cambia tu ubicación
  university: "Universidad EAFIT",         // ← Cambia tu universidad
  degree: "Ingeniería de Sistemas",        // ← Cambia tu carrera
  email: "tu@email.com",                   // ← Pon tu email real
  phone: "+57 XXX XXX XXXX",              // ← Pon tu teléfono real
}
```

## 🌐 EDITAR TUS REDES SOCIALES

En el mismo archivo `config/content.js`:

```javascript
social: {
  instagram: {
    url: "https://www.instagram.com/lll333llllll/",  // ← Cambia por tu Instagram
    emoji: "📸",                                     // ← Cambia el emoji si quieres
    label: "Instagram"                               // ← Cambia el texto
  },
  linkedin: {
    url: "https://www.linkedin.com/in/tu-perfil/",  // ← Cambia por tu LinkedIn
    emoji: "💼", 
    label: "LinkedIn"
  },
  github: {
    url: "https://github.com/TuUsuario",            // ← Cambia por tu GitHub
    emoji: "🖥️",
    label: "GitHub"
  }
}
```

**💡 TIP:** Para agregar más redes, copia uno de los bloques y cambia la info.

## 📖 EDITAR TU BIOGRAFÍA

En `config/content.js`, busca `biography:` y edita cada párrafo:

```javascript
biography: [
  {
    emoji: "🌐",
    title: "Tu título aquí:",                    // ← Cambia el título
    content: "Escribe tu historia aquí..."       // ← Escribe tu contenido
  },
  {
    emoji: "🧠", 
    title: "Otro título:",
    content: "Más contenido..."
  }
  // Puedes agregar más párrafos copiando este formato
]
```

## 📝 EDITAR TÍTULOS DE PÁGINAS

En `config/content.js`, busca la sección `pages:`:

```javascript
pages: {
  blogs: {
    title: "MENSAJES DEL ALMA",                    // ← Cambia el título de tu blog
    subtitle: "Reflexiones sobre código..."        // ← Cambia el subtítulo
  },
  gallery: {
    title: "RINCÓN DE FOTOGRAFÍA",                 // ← Cambia el título de galería
    subtitle: "Capturando momentos..."
  },
  projects: {
    title: "MIS PROYECTOS",                        // ← Cambia el título de proyectos
    subtitle: "Creaciones que fusionan..."
  }
}
```

---

## 📝 AGREGAR/EDITAR BLOGS

Ve a `data/blogs.js` y:

### ➕ Para agregar un nuevo blog:
Copia esta estructura y pégala en la lista:

```javascript
{
  id: 4,                                    // ← Pon un nuevo número
  title: "Título de tu blog",              // ← Tu título
  date: "2024-12-12",                      // ← Fecha (YYYY-MM-DD)
  category: "Tecnología",                  // ← Categoría
  preview: "Descripción corta del blog...", // ← Resumen
  content: `
    <p>Aquí escribes todo tu contenido.</p>
    <p>Puedes usar HTML básico como párrafos.</p>
    <ul>
      <li>Listas</li>
      <li>Como esta</li>
    </ul>
  `,
  readTime: "5 min",                       // ← Tiempo de lectura
  tags: ["tag1", "tag2", "tag3"]          // ← Etiquetas
}
```

---

## 💼 AGREGAR/EDITAR PROYECTOS

Ve a `data/proyectos.js` y:

### ➕ Para agregar un nuevo proyecto:

```javascript
{
  id: 6,                                    // ← Nuevo número
  title: "Nombre del Proyecto",
  subtitle: "Descripción corta", 
  description: "Descripción más larga...",
  status: "En Desarrollo",                  // ← Activo, En Desarrollo, Beta, Concepto
  category: "Web Development",              // ← Categoría
  technologies: ["React", "Node.js"],      // ← Lista de tecnologías
  progress: 75,                            // ← Porcentaje 0-100
  github: "https://github.com/tu-usuario/proyecto",  // ← Tu repositorio
  demo: "https://tu-demo.com",             // ← Tu demo (opcional)
  features: [                              // ← Lista de características
    "Característica 1",
    "Característica 2"
  ],
  challenges: [                            // ← Lista de desafíos
    "Desafío 1", 
    "Desafío 2"
  ],
  tags: ["react", "web", "frontend"]      // ← Etiquetas
}
```

---

## 📸 AGREGAR/EDITAR GALERÍA

Ve a `data/galeria.js` y:

### ➕ Para agregar una nueva foto:

```javascript
{
  id: 9,                                    // ← Nuevo número
  title: "Título de la Foto",
  description: "Descripción de la foto...",
  date: "2024-12-12",                      // ← Fecha
  category: "Urbana",                      // ← Urbana, Macro, Abstracta, etc.
  location: "Ciudad, País",               // ← Ubicación
  camera: "Tu Cámara",                    // ← Modelo de cámara
  settings: "f/2.8 | 1/500s | ISO 200",  // ← Configuración
  src: "/galeria/tu-imagen.jpg",         // ← Ruta de la imagen
  tags: ["ciudad", "foto", "arte"]       // ← Etiquetas
}
```

**🖼️ SUBIR IMÁGENES:**
1. Sube tu imagen a la carpeta `public/galeria/`
2. En `src:` pon `"/galeria/nombre-de-tu-imagen.jpg"`

---

## 🎨 PERSONALIZAR COLORES Y ESTILOS

En `config/content.js`, sección `visual:`:

```javascript
visual: {
  primaryColor: "purple",              // ← purple, blue, green, red, etc.
  accentColor: "#9333ea",             // ← Color en código hex
  animations: {
    enableParticles: true,            // ← true/false para partículas
    enableHoverEffects: true          // ← true/false para efectos hover
  }
}
```

---

## ⚠️ REGLAS IMPORTANTES

1. **SIEMPRE** mantén las comas `,` al final de cada línea
2. **NO BORRES** las llaves `{}` o corchetes `[]`
3. **USA COMILLAS DOBLES** `"texto"` para todos los textos
4. **GUARDA EL ARCHIVO** después de cada cambio
5. **HAZ BACKUP** antes de hacer cambios grandes

---

## 🔄 VER LOS CAMBIOS

1. Guarda el archivo que editaste
2. En la terminal ejecuta: `npm run dev`
3. Ve a `http://localhost:3000` para ver los cambios

---

¡Eso es todo! Con estos archivos tienes control total sobre tu portafolio. 🚀

**¿Algo no funciona?** Revisa que no hayas borrado comas o comillas por accidente.