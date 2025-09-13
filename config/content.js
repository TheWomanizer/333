// config/content.js - Configuración central de todo el contenido del portafolio
// 🚀 EDITA ESTE ARCHIVO PARA CAMBIAR TODO EL CONTENIDO DE TU PORTAFOLIO

export const SITE_CONFIG = {
  // ===========================
  // 📌 INFORMACIÓN PERSONAL
  // ===========================
  personal: {
    name: "José Jiménez",
    birthDate: "28 de septiembre de 2005",
    location: "Medellín, Colombia",
    university: "Universidad EAFIT",
    degree: "Ingeniería de Sistemas",
    email: "tu@email.com", // Cambia por tu email real
    phone: "+57 XXX XXX XXXX", // Cambia por tu teléfono real
  },

  // ===========================
  // 🌐 REDES SOCIALES
  // ===========================
  social: {
    instagram: {
      url: "https://www.instagram.com/lll333llllll/",
      emoji: "📸",
      label: "Instagram"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/jose-jimenez-vasquez-a388571a2/",
      emoji: "💼", 
      label: "LinkedIn"
    },
    github: {
      url: "https://github.com/TheWomanizer",
      emoji: "🖥️",
      label: "GitHub"
    }
  },

  // ===========================
  // 📝 TEXTOS DE PÁGINAS
  // ===========================
  pages: {
    home: {
      title: "Bienvenido",
      subtitle: "Desarrollador Full-Stack & Místico Digital"
    },
    about: {
      title: "MI NOMBRE ES",
      // 🔥 EDITA TU BIOGRAFÍA AQUÍ 🔥
      biography: [
        {
          emoji: "🌐",
          title: "Origen autodidacta:",
          content: "Desde los 14 años me sumergí en las profundidades de la red. Mientras otros jugaban, yo exploraba terminales, redes privadas, VPNs, cifrado, exploits y sistemas operativos como Kali Linux y Qubes. Me formé en foros antiguos y comunidades como 4chan /g/ y canales de IRC vinculados al movimiento \"Anonymous\". Me alejé pronto de lo ilegal, pero conservé una ética crítica y sólida: comprender sistemas para protegerlos, mejorarlos o repensarlos."
        },
        {
          emoji: "🧠", 
          title: "Espíritu del código, alma del Ser:",
          content: "Mi familia es el centro de mi mundo. Practicamos la fe católica, pero yo he expandido mi espiritualidad hacia una práctica universal conectada con el Gran Arquitecto del Universo. Meditación, yoga, journaling, respiración consciente, ayuno y visualización creativa son parte de mi día a día. Para mí, programar no es solo construir con código, es crear con propósito, estética y visión trascendental."
        },
        {
          emoji: "👨‍💻",
          title: "Dominio tecnológico:",
          content: "Soy desarrollador full-stack, apasionado por crear experiencias. Domino Next.js, React, TailwindCSS, Framer Motion y UX/UI emocional, combinándolos con Node.js, Python (Django/FastAPI), bases SQL/NoSQL, GraphQL, OAuth2 y AWS. Integro modelos de IA (GPT, DeepSeek, Claude), recomiendo contenido, entreno IA personalizada con LangChain, Pinecone, vector stores y más."
        }
      ],
      skills: [
        "Configuración y endurecimiento de servidores Linux, Apache y NGINX.",
        "Automatización con Bash y Python.", 
        "Control de versiones avanzado con Git y CI/CD.",
        "Interfaces adaptadas a rendimiento, accesibilidad y diseño sensible.",
        "Análisis semántico y procesamiento de lenguaje natural."
      ],
      mission: "Todo lo que desarrollo está impregnado de simbolismo, filosofía y amor propio. Mi misión es liberar a otros del caos mediante herramientas bellas, funcionales y profundamente humanas."
    },
    blogs: {
      title: "MENSAJES DEL ALMA",
      subtitle: "Reflexiones sobre código, consciencia y el universo digital"
    },
    gallery: {
      title: "RINCÓN DE FOTOGRAFÍA", 
      subtitle: "Capturando momentos, creando eternidad"
    },
    projects: {
      title: "MIS PROYECTOS",
      subtitle: "Creaciones que fusionan código, consciencia y propósito"
    },
    books: {
      title: "RINCÓN DE LECTURA",
      subtitle: "Libros que han moldeado mi visión del mundo"
    }
  },

  // ===========================
  // 🎨 CONFIGURACIÓN VISUAL
  // ===========================
  visual: {
    primaryColor: "purple", // purple, blue, green, red, etc.
    accentColor: "#9333ea",
    fonts: {
      heading: "Emblema One",
      body: "Dosis"
    },
    animations: {
      enableParticles: true,
      enableHoverEffects: true,
      transitionSpeed: 0.3
    }
  }
};

// ===========================
// 📚 CONFIGURACIÓN DE CONTENIDO EDITABLE
// ===========================

// 🔥 INSTRUCCIONES PARA EDITAR:
// 1. Para cambiar tu información personal, edita la sección 'personal'
// 2. Para cambiar redes sociales, edita la sección 'social'  
// 3. Para cambiar tu biografía, edita los párrafos en 'pages.about.biography'
// 4. Para cambiar títulos de páginas, edita 'pages.{página}.title'
// 5. Los blogs, proyectos y galería se editan en sus archivos respectivos

export default SITE_CONFIG;