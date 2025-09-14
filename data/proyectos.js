// data/proyectos.js - Datos de los proyectos

export const proyectosData = [
  {
    id: 1,
    title: "NeuroChat AI",
    subtitle: "Sistema de Chat Inteligente con IA Personalizada",
    description:
      "Una plataforma de chat avanzada que integra múltiples modelos de IA (GPT-4, Claude, DeepSeek) con análisis semántico, memoria contextual y personalización adaptativa.",
    longDescription: `
      <p>NeuroChat AI es mi proyecto más ambicioso en el campo de la inteligencia artificial conversacional. Esta plataforma integra múltiples modelos de IA de última generación para crear experiencias de chat únicas y personalizadas.</p>

      <h3>Características Principales:</h3>
      <ul>
        <li><strong>Multi-modelo IA:</strong> Integración con GPT-4, Claude, DeepSeek y modelos locales</li>
        <li><strong>Memoria Contextual:</strong> Sistema de vectores con Pinecone para recordar conversaciones pasadas</li>
        <li><strong>Análisis Semántico:</strong> Procesamiento avanzado de lenguaje natural con LangChain</li>
        <li><strong>Personalización Adaptativa:</strong> La IA aprende de las preferencias del usuario</li>
        <li><strong>Interface Neuromórfica:</strong> Diseño UI/UX inspirado en redes neuronales</li>
      </ul>

      <p>El sistema utiliza una arquitectura de microservicios con Node.js y FastAPI, almacenamiento vectorial para la memoria semántica, y una interfaz React con animaciones Framer Motion que simula el comportamiento de neuronas.</p>
    `,
    status: "En Desarrollo",
    category: "Inteligencia Artificial",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "FastAPI",
      "LangChain",
      "Pinecone",
      "OpenAI",
      "Claude",
      "DeepSeek",
      "TailwindCSS",
      "Framer Motion",
    ],
    startDate: "2024-09-01",
    progress: 75,
    features: [
      "Chat multimodal con IA",
      "Memoria contextual persistente",
      "Análisis de sentimientos",
      "Recomendaciones personalizadas",
      "API REST completa",
      "Dashboard de analytics",
    ],
    challenges: [
      "Optimización de costos de API",
      "Latencia en respuestas complejas",
      "Balanceeo entre modelos",
      "Privacidad de datos",
    ],
    github: "https://github.com/TheWomanizer/neurochat-ai",
    demo: null,
    images: ["/proyectos/neurochat-1.jpg", "/proyectos/neurochat-2.jpg"],
    tags: ["IA", "chat", "machine-learning", "nlp", "personalización"],
  },
  {
    id: 2,
    title: "EthosSecure",
    subtitle: "Framework de Seguridad Ética para Aplicaciones Web",
    description:
      "Un framework completo de seguridad que implementa principios éticos hacker para proteger aplicaciones web, incluyendo detección de vulnerabilidades y hardening automático.",
    longDescription: `
      <p>EthosSecure nace de mi formación en seguridad informática y la filosofía hacker ética. Es un framework que automatiza la implementación de medidas de seguridad en aplicaciones web siguiendo los mejores principios de la ciberseguridad responsable.</p>

      <h3>Módulos del Framework:</h3>
      <ul>
        <li><strong>VulnScanner:</strong> Análisis automático de vulnerabilidades OWASP Top 10</li>
        <li><strong>EthosGuard:</strong> Sistema de prevención de intrusiones en tiempo real</li>
        <li><strong>CryptoShield:</strong> Implementación automática de cifrado end-to-end</li>
        <li><strong>AuditTrail:</strong> Sistema de logging y auditoría completo</li>
        <li><strong>AccessMatrix:</strong> Control de acceso basado en roles y políticas</li>
      </ul>

      <p>El framework está construido con una mentalidad de "seguridad por diseño", donde cada componente integra protecciones desde su concepción, no como una capa adicional.</p>
    `,
    status: "Activo",
    category: "Ciberseguridad",
    technologies: [
      "Python",
      "FastAPI",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "OpenSSL",
      "JWT",
      "OAuth2",
      "Prometheus",
    ],
    startDate: "2024-09-15",
    progress: 90,
    features: [
      "Análisis de vulnerabilidades automático",
      "Hardening de servidores Linux",
      "Monitoreo de seguridad 24/7",
      "Cifrado automático de datos",
      "Dashboard de amenazas",
      "Alertas en tiempo real",
    ],
    challenges: [
      "Falsos positivos en detección",
      "Performance en análisis profundo",
      "Compatibilidad con frameworks legacy",
      "Balance seguridad-usabilidad",
    ],
    github: "https://github.com/TheWomanizer/ethos-secure",
    demo: "https://demo.ethossecure.dev",
    images: ["/proyectos/ethossecure-1.jpg", "/proyectos/ethossecure-2.jpg"],
    tags: [
      "seguridad",
      "ethical-hacking",
      "framework",
      "vulnerabilidades",
      "protección",
    ],
  },
  {
    id: 3,
    title: "MindfulCode",
    subtitle: "Editor de Código con Principios de Programación Consciente",
    description:
      "Un editor de código único que integra técnicas de mindfulness y bienestar digital para crear una experiencia de programación más consciente y productiva.",
    longDescription: `
      <p>MindfulCode surge de mi práctica diaria de meditación y programación. Es un editor que transforma el acto de programar en una experiencia mindful, integrando técnicas de respiración consciente y bienestar digital.</p>

      <h3>Características Innovadoras:</h3>
      <ul>
        <li><strong>Breathing Mode:</strong> Recordatorios de respiración consciente durante el coding</li>
        <li><strong>Zen Theme:</strong> Temas visuales diseñados para reducir fatiga mental</li>
        <li><strong>Flow Tracker:</strong> Análisis de patrones de concentración y productividad</li>
        <li><strong>Mindful Breaks:</strong> Pausas automáticas con ejercicios de mindfulness</li>
        <li><strong>Code Meditation:</strong> Modo especial para revisión contemplativa del código</li>
      </ul>

      <p>Más que un editor, es una herramienta para cultivar presencia y consciencia durante el desarrollo, mejorando tanto la calidad del código como el bienestar del programador.</p>
    `,
    status: "Beta",
    category: "Herramientas",
    technologies: [
      "Electron",
      "TypeScript",
      "Monaco Editor",
      "React",
      "Node.js",
      "SQLite",
      "Chart.js",
      "Howler.js",
    ],
    startDate: "2024-10-09",
    progress: 60,
    features: [
      "Editor de código completo",
      "Recordatorios de respiración",
      "Análisis de productividad",
      "Temas zen personalizables",
      "Sounds ambientales",
      "Métricas de bienestar",
    ],
    challenges: [
      "Balance entre funcionalidad y simplicidad",
      "Integración con IDEs existentes",
      "Métricas de bienestar precisas",
      "Performance en proyectos grandes",
    ],
    github: "https://github.com/TheWomanizer/mindful-code",
    demo: "https://mindfulcode.app",
    images: ["/proyectos/mindfulcode-1.jpg", "/proyectos/mindfulcode-2.jpg"],
    tags: ["editor", "mindfulness", "bienestar", "productividad", "coding"],
  },
  {
    id: 4,
    title: "QuantumPortfolio",
    subtitle: "Este Portafolio Personal",
    description:
      "Mi portafolio personal construido con Next.js, featuring animaciones cuánticas, diseño neuromórfico y una experiencia inmersiva que refleja mi filosofía de programación consciente.",
    longDescription: `
      <p>Este mismo portafolio es un proyecto en sí mismo, diseñado para ser más que una simple colección de trabajos. Es una experiencia inmersiva que refleja mi filosofía de desarrollo y mi enfoque único hacia la tecnología.</p>

      <h3>Arquitectura y Diseño:</h3>
      <ul>
        <li><strong>Next.js 15:</strong> Framework React de última generación</li>
        <li><strong>Framer Motion:</strong> Animaciones físicamente realistas</li>
        <li><strong>TailwindCSS:</strong> Sistema de diseño consistente</li>
        <li><strong>Diseño Responsivo:</strong> Optimizado para todos los dispositivos</li>
        <li><strong>Performance First:</strong> Optimizaciones de carga y rendering</li>
      </ul>

      <p>Cada sección está cuidadosamente crafteada para contar una historia, desde las animaciones cuánticas hasta la tipografía que refleja personalidad y profesionalismo.</p>
    `,
    status: "Activo",
    category: "Web Development",
    technologies: [
      "Next.js",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "TypeScript",
      "Vercel",
    ],
    startDate: "2024-11-01",
    progress: 95,
    features: [
      "Sistema de blogs dinámico",
      "Galería fotográfica interactiva",
      "Showcase de proyectos",
      "Animaciones cuánticas",
      "Diseño neuromórfico",
      "SEO optimizado",
    ],
    challenges: [
      "Optimización de animaciones",
      "Balance visual-performance",
      "Compatibilidad cross-browser",
      "Accesibilidad completa",
    ],
    github: "https://github.com/TheWomanizer/quantum-portfolio",
    demo: "https://eskhe.com",
    images: ["/proyectos/portfolio-1.jpg", "/proyectos/portfolio-2.jpg"],
    tags: ["portfolio", "next.js", "web-design", "animaciones", "personal"],
  },
  {
    id: 5,
    title: "SpiritualTech",
    subtitle: "Plataforma de Meditación con IA",
    description:
      "Una aplicación que combina inteligencia artificial con prácticas espirituales, generando meditaciones personalizadas basadas en el estado emocional y objetivos del usuario.",
    longDescription: `
      <p>SpiritualTech es la intersección perfecta entre mi práctica espiritual y mis habilidades técnicas. Esta plataforma utiliza IA para crear experiencias de meditación únicas y personalizadas.</p>

      <h3>Funcionalidades Espirituales-Tech:</h3>
      <ul>
        <li><strong>AI Meditation Generator:</strong> Meditaciones generadas por IA según el estado del usuario</li>
        <li><strong>Biometric Integration:</strong> Conexión con dispositivos de monitoreo cardíaco</li>
        <li><strong>Sacred Geometry Visualizer:</strong> Visualizaciones matemáticas para meditación</li>
        <li><strong>Chakra Balancer:</strong> Análisis y equilibrio energético digital</li>
        <li><strong>Manifestation Tracker:</strong> Seguimiento de intenciones y manifestaciones</li>
      </ul>

      <p>La app integra conocimientos milenarios con tecnología de vanguardia, creando un puente entre lo ancestral y lo futurista.</p>
    `,
    status: "Concepto",
    category: "Espiritualidad + Tech",
    technologies: [
      "React Native",
      "Python",
      "TensorFlow",
      "Firebase",
      "Spotify API",
      "WebGL",
      "Three.js",
    ],
    startDate: "2024-12-01",
    progress: 25,
    features: [
      "Meditaciones generadas por IA",
      "Tracking biométrico",
      "Visualizaciones 3D",
      "Soundscapes adaptativos",
      "Community espiritual",
      "Progress spiritual analytics",
    ],
    challenges: [
      "Validación científica vs. espiritual",
      "Privacy en datos biométricos",
      "UX para diferentes niveles espirituales",
      "Monetización ética",
    ],
    github: "https://github.com/TheWomanizer/spiritual-tech",
    demo: null,
    images: ["/proyectos/spiritualtech-1.jpg", "/proyectos/spiritualtech-2.jpg"],
    tags: ["espiritualidad", "IA", "meditación", "biométrico", "visualización"],
  },

  // =====================
  // Proyectos añadidos según tu ecosistema actual
  // =====================
  {
    id: 6,
    title: "Buddy — Entrenador IA de Gimnasio",
    subtitle: "App de entrenamiento tipo Duolingo con recomendador de ejercicios",
    description:
      "Aplicación de fitness con IA que guía rutinas, recomienda el siguiente ejercicio en tiempo real y gamifica el progreso con personajes (Wolf, Penguins, Bear, Robot).",
    longDescription: `
      <p>Buddy es una app de entrenamiento diseñada para ser "Duolingo para el gym". Combina una UX muy cuidada, personajes y micro-momentos épicos con un <strong>motor de recomendación</strong> que sugiere el siguiente ejercicio según tu historial y objetivos.</p>
      <h3>Stack & Diseño</h3>
      <ul>
        <li><strong>React Native Web + Expo Router:</strong> Un solo código para web y móvil</li>
        <li><strong>PyTorch Mobile:</strong> Inferencia on-device del recomendador</li>
        <li><strong>Firebase/Firestore:</strong> Sincronización multi-dispositivo</li>
        <li><strong>Framer Motion:</strong> Animaciones de calidad "tipo Apple"</li>
      </ul>
      <h3>Qué lo hace especial</h3>
      <ul>
        <li>Recomendación de siguiente ejercicio tras cada selección</li>
        <li>Gamificación con personajes y streaks</li>
        <li>Modo offline básico</li>
        <li>Experiencia "HD" con micro-interacciones (háptico + audio)</li>
      </ul>
    `,
    status: "En Desarrollo",
    category: "Inteligencia Artificial",
    technologies: [
      "React Native Web",
      "Expo Router",
      "TypeScript",
      "Tamagui",
      "TailwindCSS",
      "Framer Motion",
      "Firebase/Firestore",
      "PyTorch Mobile",
      "AWS Lambda",
    ],
    startDate: "2025-06-01",
    progress: 45,
    features: [
      "Rutinas guiadas con IA",
      "Recomendador de siguiente ejercicio",
      "Gamificación con personajes",
      "Progreso y streaks",
      "Modo offline básico",
      "Sincronización multi-dispositivo",
    ],
    challenges: [
      "Cold-start del recomendador",
      "Costos de inferencia",
      "UX impecable en web y móvil",
      "Calidad de datos de entrenamiento",
    ],
    github: "https://github.com/ll333ll",
    demo: null,
    images: ["/proyectos/buddy-1.jpg", "/proyectos/buddy-2.jpg"],
    tags: ["fitness", "IA", "entrenador", "pytorch", "expo"],
  },
  {
    id: 7,
    title: "Plug&Ad",
    subtitle: "Plataforma multicanal para crear, optimizar y auditar Ads con IA",
    description:
      "Tu copiloto de Ads con IA: Google, Meta y TikTok desde un solo lugar, con flujos de 1 clic, auditoría y optimización automática.",
    longDescription: `
      <p>Plug&Ad centraliza la operación publicitaria multicanal con un fuerte enfoque en automatización y buenas prácticas. Desde la creación hasta la auditoría, todo en un panel claro y accionable.</p>
      <h3>Módulos</h3>
      <ul>
        <li><strong>Campaign Builder:</strong> creación guiada y compliant</li>
        <li><strong>Optimizer:</strong> pacing/budget y bids automáticos</li>
        <li><strong>Creative Lab:</strong> generación/variación de copys e imágenes con IA</li>
        <li><strong>Audit & Score:</strong> auditorías tipo checklist + scoring</li>
        <li><strong>Alerts:</strong> alertas de performance y salud de cuenta</li>
      </ul>
    `,
    status: "En Desarrollo",
    category: "Herramientas",
    technologies: [
      "Next.js",
      "Django",
      "PostgreSQL",
      "Redis",
      "Celery",
      "TailwindCSS",
      "Framer Motion",
      "LangChain",
      "OpenAI",
      "Google/Meta/TikTok APIs",
    ],
    startDate: "2025-08-01",
    progress: 55,
    features: [
      "Flujos de 1 clic",
      "Optimización automática",
      "Generación de creatividades con IA",
      "Auditoría y scoring",
      "Alertas de performance",
      "Multi-cuenta/multi-canal",
    ],
    challenges: [
      "Integraciones API y cuotas",
      "Cumplimiento de políticas",
      "Costos de LLM en picos",
      "Confiabilidad de automatizaciones",
    ],
    github: "https://github.com/ll333ll/PlugAndAd",
    demo: null,
    images: ["/proyectos/plugandad-1.jpg", "/proyectos/plugandad-2.jpg"],
    tags: ["ads", "marketing", "automation", "ia", "auditoría"],
  },
  {
    id: 8,
    title: "Parleo",
    subtitle: "Red social del ecosistema (convergencia web + móvil)",
    description:
      "Red social minimalista para conversaciones y comunidad, pensada para integrarse con Buddy y otras apps del ecosistema.",
    longDescription: `
      <p>Parleo busca una experiencia social limpia, enfocada en conversaciones de calidad y la integración con otros productos del ecosistema.</p>
      <h3>Características</h3>
      <ul>
        <li>Perfiles, follows y feed por intereses</li>
        <li>Mensajería y notificaciones en tiempo real</li>
        <li>Integración con Buddy (logros, retos, progreso)</li>
        <li>Moderación y herramientas anti-spam</li>
      </ul>
    `,
    status: "En Desarrollo",
    category: "Web Development",
    technologies: [
      "React Native Web",
      "Expo Router",
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "TailwindCSS",
      "Framer Motion",
    ],
    startDate: "2025-05-01",
    progress: 30,
    features: [
      "Perfiles y seguimiento",
      "Mensajería en tiempo real",
      "Feeds y moderación",
      "Integración con el ecosistema",
    ],
    challenges: [
      "Escalabilidad del feed",
      "Moderación efectiva",
      "Tiempo real y costos",
    ],
    github: "https://github.com/TheWomanizer",
    demo: null,
    images: ["/proyectos/parleo-1.jpg", "/proyectos/parleo-2.jpg"],
    tags: ["social", "comunidad", "web", "móvil"],
  },
  {
    id: 9,
    title: "BuddyCore ML",
    subtitle: "Motor Recomendador de Ejercicios (componente de Buddy)",
    description:
      "Servicio/SDK de ML que aprende de tus sesiones y sugiere el siguiente ejercicio optimizando progresión y adherencia.",
    longDescription: `
      <p>Motor de recomendación entrenado con secuencias de ejercicios, objetivos y feedback del usuario. Diseñado para <strong>on-device</strong> con PyTorch Mobile cuando sea posible, y fallback en la nube.</p>
      <h3>Pipeline</h3>
      <ul>
        <li>Definición de dataset (series, repeticiones, grupos musculares, fatiga)</li>
        <li>Entrenamiento y evaluación offline</li>
        <li>Exportación ONNX / optimización móvil</li>
        <li>Inferencia on-device + feedback loop</li>
      </ul>
    `,
    status: "En Desarrollo",
    category: "Inteligencia Artificial",
    technologies: [
      "PyTorch",
      "PyTorch Mobile",
      "Python",
      "FastAPI",
      "ONNX",
      "AWS Lambda",
      "NumPy",
      "Pandas",
    ],
    startDate: "2025-09-11",
    progress: 20,
    features: [
      "Dataset estructurado por ejercicios",
      "Inferencia on-device",
      "Feedback loop",
      "A/B testing",
      "Explainability simple",
    ],
    challenges: [
      "Calidad/etiquetado del dataset",
      "Generalización por usuario",
      "Optimización en dispositivos medios",
    ],
    github: "https://github.com/ll333ll",
    demo: null,
    images: ["/proyectos/buddycore-1.jpg", "/proyectos/buddycore-2.jpg"],
    tags: ["ml", "fitness", "recomendador", "on-device"],
  },
  {
    id: 10,
    title: "KaliPro Lab",
    subtitle: "Entorno de Pentesting Automatizado (VM + CLI)",
    description:
      "Laboratorio Kali listo para trabajo de agencia: toolchain curado, dotfiles, playbooks y flujos con Gemini-CLI para pentesting eficiente.",
    longDescription: `
      <p>Configuración profesional de Kali Linux para red team/grey box, con aprovisionamiento reproducible y automatizaciones para reconocimiento, explotación y reporting.</p>
      <h3>Incluye</h3>
      <ul>
        <li>Playbooks de instalación (nmap, burp, zap, metasploit, gobuster, etc.)</li>
        <li>Dotfiles (tmux, zsh/nvim) y aliases productivos</li>
        <li>Guías y prompts para Gemini-CLI</li>
        <li>Plantillas de reporte y pipelines de evidencia</li>
      </ul>
    `,
    status: "Activo",
    category: "Ciberseguridad",
    technologies: [
      "Kali Linux",
      "Bash",
      "Python",
      "Docker",
      "Nmap",
      "Metasploit",
      "Burp Suite",
      "OWASP ZAP",
      "tmux",
      "Neovim",
      "Gemini-CLI",
    ],
    startDate: "2025-09-08",
    progress: 70,
    features: [
      "Provisioning automatizado",
      "Toolchain curado",
      "Workflows con IA",
      "Plantillas de reporte",
    ],
    challenges: [
      "Licencias y versiones",
      "Compatibilidad entre entornos",
      "Seguridad operacional",
    ],
    github: "https://github.com/TheWomanizer",
    demo: null,
    images: ["/proyectos/kalilab-1.jpg", "/proyectos/kalilab-2.jpg"],
    tags: ["pentesting", "kali", "automation", "ciberseguridad"],
  },
  {
    id: 11,
    title: "Proyecto de Tratamiento de Aguas (sin nombre público)",
    subtitle: "Iniciativa de sostenibilidad hídrica apoyada por software",
    description:
      "Línea de trabajo enfocada en soluciones de tratamiento de aguas, con un panel de monitoreo y analítica para operaciones y costos (fase de diseño).",
    longDescription: `
      <p>Parte de mi misión de impacto ambiental. Se plantea un sistema de registro y monitoreo de procesos de tratamiento, con analítica para eficiencia y costos, y futuros módulos de recomendación.</p>
      <h3>Alcance inicial</h3>
      <ul>
        <li>Registro de parámetros y etapas</li>
        <li>Panel de métricas y alertas básicas</li>
        <li>Modelos de costo/beneficio</li>
      </ul>
    `,
    status: "Concepto",
    category: "Herramientas",
    technologies: [
      "Django",
      "React",
      "PostgreSQL",
      "TailwindCSS",
      "Grafana (estudio)",
    ],
    startDate: "2025-07-01",
    progress: 15,
    features: [
      "Panel de monitoreo básico",
      "Alertas",
      "Modelos de costos",
    ],
    challenges: [
      "Validación en campo",
      "Adquisición de datos",
      "Requisitos regulatorios",
    ],
    github: "https://github.com/TheWomanizer",
    demo: null,
    images: ["/proyectos/aguas-1.jpg", "/proyectos/aguas-2.jpg"],
    tags: ["sostenibilidad", "ambiental", "agua"],
  },
];

// Categorías de proyectos
export const categorias = [
  "Todos",
  "Inteligencia Artificial",
  "Ciberseguridad",
  "Herramientas",
  "Web Development",
  "Espiritualidad + Tech",
];

// Estados de proyectos
export const estados = ["Todos", "Activo", "En Desarrollo", "Beta", "Concepto"];

// Función para obtener todos los proyectos
export const getAllProyectos = () => proyectosData;

// Función para obtener proyectos por categoría
export const getProyectosByCategory = (category) => {
  if (category === "Todos") return proyectosData;
  return proyectosData.filter((proyecto) => proyecto.category === category);
};

// Función para obtener proyectos por estado
export const getProyectosByStatus = (status) => {
  if (status === "Todos") return proyectosData;
  return proyectosData.filter((proyecto) => proyecto.status === status);
};

// Función para buscar proyectos
export const searchProyectos = (query) =>
  proyectosData.filter((proyecto) =>
    proyecto.title.toLowerCase().includes(query.toLowerCase()) ||
    proyecto.description.toLowerCase().includes(query.toLowerCase()) ||
    proyecto.technologies.some((tech) => tech.toLowerCase().includes(query.toLowerCase())) ||
    proyecto.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase()))
  );