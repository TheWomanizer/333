// data/libros.js - Biblioteca personal
export const librosData = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    categoria: "Distopía",
    fechaLectura: "2023-05-15",
    rating: 5,
    estado: "Leído",
    portada: "/libros/1984.jpg", // Placeholder
    resumen: "Una obra maestra sobre el totalitarismo y la manipulación de la verdad. Me hizo reflexionar profundamente sobre la importancia de la privacidad digital y la libertad de pensamiento en nuestra era tecnológica.",
    citaFavorita: "La libertad es la libertad de decir que dos más dos son cuatro. Si se concede esto, todo lo demás viene por sí solo.",
    impactoPersonal: "Este libro transformó mi visión sobre la ciberseguridad. Me motivó a desarrollar herramientas que protejan la privacidad y combatan la vigilancia digital.",
    tags: ["distopia", "politica", "libertad", "tecnologia"],
    paginasFavoritas: [112, 298, 45],
    notas: [
      "La doble moral: amor/odio simultáneo hacia el Gran Hermano",
      "El concepto de 'crimipensamiento' es aterrador y real",
      "Winston representa la resistencia humana ante la opresión"
    ]
  },
  {
    id: 2,
    title: "El Poder del Ahora",
    author: "Eckhart Tolle",
    categoria: "Espiritualidad",
    fechaLectura: "2023-08-22",
    rating: 5,
    estado: "Releído",
    portada: "/libros/poder-ahora.jpg",
    resumen: "Una guía transformadora sobre la presencia consciente y la liberación del sufrimiento mental. Base fundamental de mi práctica de programación consciente.",
    citaFavorita: "Date cuenta profundamente de que el momento presente es todo lo que tienes. Haz del AHORA el foco principal de tu vida.",
    impactoPersonal: "Revolucionó mi forma de programar. Ahora cada línea de código la escribo desde la presencia total, convirtiendo el desarrollo en meditación activa.",
    tags: ["espiritualidad", "mindfulness", "presencia", "consciencia"],
    paginasFavoritas: [67, 134, 201],
    notas: [
      "La mente como herramienta, no como identidad",
      "El dolor vs el sufrimiento: distinción crucial",
      "Programar desde la presencia: código más limpio y creativo"
    ]
  },
  {
    id: 3,
    title: "Sapiens: De animales a dioses",
    author: "Yuval Noah Harari",
    categoria: "Historia",
    fechaLectura: "2023-12-03",
    rating: 4,
    estado: "Leído",
    portada: "/libros/sapiens.jpg",
    resumen: "Un viaje fascinante por la historia de la humanidad desde la revolución cognitiva hasta la era digital. Perspectiva única sobre cómo llegamos hasta aquí.",
    citaFavorita: "La revolución cognitiva es el punto en que la historia declaró su independencia de la biología.",
    impactoPersonal: "Me ayudó a entender el papel de la tecnología en la evolución humana y mi responsabilidad como desarrollador en el siguiente salto evolutivo.",
    tags: ["historia", "evolucion", "tecnologia", "humanidad"],
    paginasFavoritas: [89, 234, 367],
    notas: [
      "Los mitos colectivos como base de la civilización",
      "La revolución agrícola: ¿progreso o trampa?",
      "IA y el futuro de Homo Sapiens"
    ]
  },
  {
    id: 4,
    title: "Clean Code",
    author: "Robert C. Martin",
    categoria: "Programación",
    fechaLectura: "2024-01-15",
    rating: 5,
    estado: "Consultado",
    portada: "/libros/clean-code.jpg",
    resumen: "La biblia del código limpio. Transformó mi forma de escribir código de 'que funcione' a 'que sea arte'. Cada función es ahora un poema de lógica.",
    citaFavorita: "El código limpio siempre parece que fue escrito por alguien que se preocupa.",
    impactoPersonal: "Elevó mi programación de craft a art. Ahora veo el código como literatura técnica que debe ser bella, legible y mantenible.",
    tags: ["programacion", "clean-code", "desarrollo", "calidad"],
    paginasFavoritas: [23, 156, 278],
    notas: [
      "Nombres descriptivos > comentarios explicativos",
      "Funciones pequeñas hacen una sola cosa perfectamente",
      "El código es comunicación entre desarrolladores"
    ]
  },
  {
    id: 5,
    title: "El Arte de la Guerra",
    author: "Sun Tzu",
    categoria: "Estrategia",
    fechaLectura: "2024-03-10",
    rating: 4,
    estado: "Leído",
    portada: "/libros/arte-guerra.jpg",
    resumen: "Estrategias milenarias aplicables al desarrollo de software y la ciberseguridad. La guerra como metáfora de la programación defensiva.",
    citaFavorita: "La suprema excelencia consiste en quebrar la resistencia del enemigo sin luchar.",
    impactoPersonal: "Inspiró mi enfoque en ciberseguridad: prevenir ataques es mejor que defenderse de ellos. La programación defensiva como arte marcial.",
    tags: ["estrategia", "tacticas", "ciberseguridad", "filosofia"],
    paginasFavoritas: [34, 67, 98],
    notas: [
      "Conoce tu código, conoce tus vulnerabilidades",
      "La velocidad es la esencia de la guerra (y del deploy)",
      "Ganar sin pelear: arquitectura segura por diseño"
    ]
  },
  {
    id: 6,
    title: "Dune",
    author: "Frank Herbert",
    categoria: "Ciencia Ficción",
    fechaLectura: "2024-06-20",
    rating: 5,
    estado: "Leído",
    portada: "/libros/dune.jpg",
    resumen: "Épica espacial que combina política, ecología, religión y tecnología. Una visión profética sobre el futuro de la humanidad y la tecnología.",
    citaFavorita: "El miedo es el asesino de la mente. El miedo es la pequeña muerte que conduce a la obliteración total.",
    impactoPersonal: "Me enseñó a ver la programación como ecología digital. Cada sistema debe ser sostenible, cada algoritmo debe fluir como el agua en el desierto.",
    tags: ["sci-fi", "ecologia", "futuro", "sistemas"],
    paginasFavoritas: [145, 287, 432],
    notas: [
      "La especia como metáfora de los datos",
      "Sistemas complejos requieren equilibrio",
      "El poder corrompe, incluso en la tecnología"
    ]
  },
  {
    id: 7,
    title: "Implementando Domain-Driven Design",
    author: "Vaughn Vernon",
    categoria: "Arquitectura",
    fechaLectura: "2024-09-05",
    rating: 4,
    estado: "En Progreso",
    portada: "/libros/ddd.jpg",
    resumen: "Guía práctica para implementar DDD en aplicaciones reales. Transformando dominios complejos en código elegante y mantenible.",
    citaFavorita: "El dominio es el corazón del software. Todo lo demás son detalles.",
    impactoPersonal: "Revolucionó mi arquitectura de software. Ahora diseño sistemas que hablan el lenguaje del negocio, no solo el de la máquina.",
    tags: ["arquitectura", "ddd", "diseño", "software"],
    paginasFavoritas: [78, 234, 456],
    notas: [
      "Bounded contexts definen límites naturales",
      "Aggregates protegen invariantes de negocio",
      "El lenguaje ubícuo une desarrolladores y expertos"
    ]
  },
  {
    id: 8,
    title: "La Bhagavad Gita",
    author: "Vyasa",
    categoria: "Filosofía",
    fechaLectura: "2024-11-12",
    rating: 5,
    estado: "Estudiando",
    portada: "/libros/bhagavad-gita.jpg",
    resumen: "Diálogo eterno entre Arjuna y Krishna sobre el dharma, la acción correcta y la realización espiritual. Filosofía aplicada al desarrollo consciente.",
    citaFavorita: "Tienes derecho a realizar tu trabajo prescrito, pero no a los frutos de la acción.",
    impactoPersonal: "Base de mi filosofía de 'programación sin apego'. Escribo código con total dedicación pero sin ansiedad por los resultados.",
    tags: ["filosofia", "dharma", "espiritualidad", "accion"],
    paginasFavoritas: [23, 67, 89],
    notas: [
      "Karma Yoga: programar como servicio desinteresado",
      "Dharma del desarrollador: código ético y consciente",
      "Desapego: crear sin ansiedad por el reconocimiento"
    ]
  }
];

// Categorías disponibles
export const categorias = [
  "Todas",
  "Distopía",
  "Espiritualidad", 
  "Historia",
  "Programación",
  "Estrategia",
  "Ciencia Ficción",
  "Arquitectura",
  "Filosofía"
];

// Estados de lectura
export const estados = [
  "Todos",
  "Leído",
  "Releído",
  "En Progreso",
  "Consultado",
  "Estudiando"
];

// Función para obtener todos los libros
export const getAllLibros = () => librosData;

// Función para obtener libros por categoría
export const getLibrosByCategoria = (categoria) => {
  if (categoria === "Todas") return librosData;
  return librosData.filter(libro => libro.categoria === categoria);
};

// Función para obtener libros por estado
export const getLibrosByEstado = (estado) => {
  if (estado === "Todos") return librosData;
  return librosData.filter(libro => libro.estado === estado);
};

// Función para buscar libros
export const searchLibros = (query) => 
  librosData.filter(libro => 
    libro.title.toLowerCase().includes(query.toLowerCase()) ||
    libro.author.toLowerCase().includes(query.toLowerCase()) ||
    libro.resumen.toLowerCase().includes(query.toLowerCase()) ||
    libro.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

// Función para obtener estadísticas
export const getEstadisticas = () => {
  const total = librosData.length;
  const leidos = librosData.filter(l => l.estado === "Leído" || l.estado === "Releído").length;
  const enProgreso = librosData.filter(l => l.estado === "En Progreso").length;
  const promedioRating = librosData.reduce((acc, l) => acc + l.rating, 0) / total;
  
  return {
    total,
    leidos,
    enProgreso,
    promedioRating: Math.round(promedioRating * 10) / 10
  };
};