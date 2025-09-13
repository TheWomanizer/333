// data/galeria.js - Datos de la galería fotográfica
export const galeriaData = [
  {
    id: 1,
    title: "Amanecer en Medellín",
    description: "La luz dorada filtrándose entre los edificios de la ciudad eterna",
    date: "2024-11-28",
    category: "Urbana",
    location: "Medellín, Colombia",
    camera: "Canon EOS R5",
    settings: "f/5.6 | 1/250s | ISO 400",
    src: "/galeria/medellin-amanecer.jpg", // Placeholder - estas imágenes deberían existir
    tags: ["ciudad", "amanecer", "arquitectura", "luz"]
  },
  {
    id: 2,
    title: "Reflexiones en Agua",
    description: "El universo reflejado en una simple gota de rocío matutino",
    date: "2024-11-15",
    category: "Macro",
    location: "Jardín, Antioquia",
    camera: "Sony A7R IV",
    settings: "f/2.8 | 1/500s | ISO 200",
    src: "/galeria/gota-rocio.jpg",
    tags: ["macro", "naturaleza", "agua", "reflexion"]
  },
  {
    id: 3,
    title: "Geometría Sagrada",
    description: "Patrones fractales encontrados en la naturaleza urbana",
    date: "2024-10-22",
    category: "Abstracta",
    location: "Centro de Medellín",
    camera: "Fujifilm X-T4",
    settings: "f/8.0 | 1/125s | ISO 800",
    src: "/galeria/geometria-urbana.jpg",
    tags: ["geometria", "patrones", "abstracto", "urbano"]
  },
  {
    id: 4,
    title: "Silencio Digital",
    description: "La tranquilidad entre las líneas de código y la pantalla",
    date: "2024-10-10",
    category: "Conceptual",
    location: "Home Studio",
    camera: "iPhone 15 Pro Max",
    settings: "f/1.8 | 1/60s | ISO 1600",
    src: "/galeria/setup-nocturno.jpg",
    tags: ["tecnologia", "nocturno", "minimalismo", "trabajo"]
  },
  {
    id: 5,
    title: "Manos que Crean",
    description: "El momento de crear, donde la mente se conecta con la materia",
    date: "2024-09-30",
    category: "Retrato",
    location: "Estudio Personal",
    camera: "Canon EOS R6",
    settings: "f/4.0 | 1/200s | ISO 1200",
    src: "/galeria/manos-creando.jpg",
    tags: ["retrato", "creacion", "arte", "manos"]
  },
  {
    id: 6,
    title: "Meditación en Movimiento",
    description: "La danza silenciosa del humo de incienso elevándose",
    date: "2024-09-15",
    category: "Espiritual",
    location: "Espacio de Meditación",
    camera: "Sony A7 III",
    settings: "f/2.0 | 1/400s | ISO 3200",
    src: "/galeria/incienso-humo.jpg",
    tags: ["meditacion", "espiritual", "humo", "tranquilidad"]
  },
  {
    id: 7,
    title: "Código y Café",
    description: "La alquimia perfecta: cafeína, código y creatividad",
    date: "2024-08-28",
    category: "Lifestyle",
    location: "Café Local",
    camera: "Leica Q2",
    settings: "f/3.5 | 1/125s | ISO 800",
    src: "/galeria/cafe-codigo.jpg",
    tags: ["lifestyle", "cafe", "programacion", "rutina"]
  },
  {
    id: 8,
    title: "Luces de la Noche",
    description: "La ciudad que nunca duerme, vista desde las alturas",
    date: "2024-08-12",
    category: "Nocturna",
    location: "Cerro Nutibara",
    camera: "Nikon Z7 II",
    settings: "f/11 | 30s | ISO 100",
    src: "/galeria/medellin-noche.jpg",
    tags: ["nocturno", "ciudad", "luces", "panorama"]
  }
];

// Categorías disponibles
export const categorias = [
  "Todas",
  "Urbana",
  "Macro", 
  "Abstracta",
  "Conceptual",
  "Retrato",
  "Espiritual",
  "Lifestyle",
  "Nocturna"
];

// Función para obtener todas las imágenes
export const getAllImages = () => galeriaData;

// Función para obtener imágenes por categoría
export const getImagesByCategory = (category) => {
  if (category === "Todas") return galeriaData;
  return galeriaData.filter(img => img.category === category);
};

// Función para buscar imágenes
export const searchImages = (query) => 
  galeriaData.filter(img => 
    img.title.toLowerCase().includes(query.toLowerCase()) ||
    img.description.toLowerCase().includes(query.toLowerCase()) ||
    img.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
    img.location.toLowerCase().includes(query.toLowerCase())
  );