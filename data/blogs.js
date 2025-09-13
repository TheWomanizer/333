// data/blogs.js - Datos de los blogs
export const blogsData = [
  {
    id: 1,
    title: "El Arte de la Programación Consciente",
    date: "2024-12-01",
    category: "Tecnología",
    preview: "Reflexión sobre cómo la meditación y la práctica espiritual han transformado mi manera de programar, convirtiendo cada línea de código en una forma de arte consciente.",
    content: `
      <p>En mis años como desarrollador autodidacta, he descubierto que la programación trasciende la mera escritura de código. Es un acto de creación consciente, donde cada función, cada variable, cada algoritmo refleja nuestro estado mental y nuestra conexión con el universo digital.</p>
      
      <p>Cuando me siento frente al editor de código, practico una forma de meditación activa. Cada respiración consciente me conecta con el flujo de la lógica, cada línea escrita es un mantra que da vida a una idea abstracta.</p>
      
      <p>La programación consciente implica:</p>
      <ul>
        <li><strong>Intención clara:</strong> Cada proyecto nace de un propósito definido</li>
        <li><strong>Presencia total:</strong> Estar completamente presente en el momento de crear</li>
        <li><strong>Belleza funcional:</strong> El código debe ser elegante, no solo funcional</li>
        <li><strong>Impacto positivo:</strong> Crear herramientas que eleven la experiencia humana</li>
      </ul>
      
      <p>Mi práctica diaria de yoga y meditación ha transformado mi enfoque. Ya no programo por programar; creo experiencias digitales que reflejan la armonía entre tecnología y espiritualidad.</p>
    `,
    readTime: "5 min",
    tags: ["programación", "espiritualidad", "desarrollo", "meditación"]
  },
  {
    id: 2,
    title: "Anonymous y Mi Despertar Digital",
    date: "2024-11-15",
    category: "Reflexión",
    preview: "Cómo mi temprano contacto con la cultura hacker de Anonymous me formó como desarrollador, enseñándome la importancia de la libertad digital y la ética tecnológica.",
    content: `
      <p>A los 14 años, cuando otros adolescentes exploraban redes sociales superficialmente, yo me adentraba en los rincones más profundos de internet. Los foros de 4chan /g/, los canales IRC, las comunidades de Anonymous... fueron mi universidad no oficial.</p>
      
      <p>En ese ambiente aprendí más que ética hacker; descubrí una filosofía de vida. Anonymous no era solo un colectivo, era un estado mental: la búsqueda de conocimiento sin restricciones, la defensa de la libertad digital, la idea de que la información quiere ser libre.</p>
      
      <blockquote>
        "We are Anonymous. We are Legion. We do not forgive. We do not forget."
      </blockquote>
      
      <p>Pero mi camino tomó una dirección consciente. Me alejé de actividades ilegales, pero conservé los valores fundamentales:</p>
      <ul>
        <li>Curiosidad sin límites por la tecnología</li>
        <li>Respeto por la privacidad y seguridad</li>
        <li>Ética hacker orientada al bien común</li>
        <li>Pensamiento crítico ante sistemas establecidos</li>
      </ul>
      
      <p>Hoy uso esos conocimientos para crear, proteger y mejorar. Cada sistema que diseño lleva implícita esa filosofía de libertad responsable y conocimiento compartido.</p>
    `,
    readTime: "4 min",
    tags: ["hacking", "ética", "anonymous", "seguridad", "filosofía"]
  },
  {
    id: 3,
    title: "IA y Consciencia: El Futuro que Construimos",
    date: "2024-10-28",
    category: "Inteligencia Artificial",
    preview: "Reflexiones sobre cómo estamos integrando IA en nuestras vidas y la responsabilidad que tenemos como desarrolladores en crear tecnología consciente y ética.",
    content: `
      <p>Trabajar con modelos de IA como GPT, DeepSeek y Claude no es solo programar; es participar en la evolución de la consciencia artificial. Cada implementación que hago con LangChain, cada vector store que configuro, es un paso hacia un futuro donde humanos y máquinas coexisten armoniosamente.</p>
      
      <p>Mi experiencia integrando IA en proyectos reales me ha enseñado que la verdadera magia no está en la tecnología, sino en cómo la aplicamos con sabiduría y propósito.</p>
      
      <h3>Los Pilares de la IA Consciente</h3>
      <ul>
        <li><strong>Transparencia:</strong> Los usuarios deben saber cuándo interactúan con IA</li>
        <li><strong>Privacidad:</strong> Los datos personales son sagrados</li>
        <li><strong>Beneficio mutuo:</strong> La IA debe elevar a la humanidad, no reemplazarla</li>
        <li><strong>Evolución continua:</strong> Aprender y mejorar constantemente</li>
      </ul>
      
      <p>Cuando entreno modelos personalizados o implemento sistemas de recomendación, siempre me pregunto: "¿Esto hace que la vida humana sea más bella, más significativa, más consciente?"</p>
      
      <p>El futuro que estamos construyendo depende de estas decisiones diarias. Cada línea de código es un voto por el tipo de mundo que queremos habitar.</p>
    `,
    readTime: "6 min",
    tags: ["inteligencia artificial", "ética", "futuro", "consciencia", "responsabilidad"]
  }
];

// Función para obtener todos los blogs
export const getAllBlogs = () => blogsData;

// Función para obtener un blog por ID
export const getBlogById = (id) => blogsData.find(blog => blog.id === parseInt(id));

// Función para obtener blogs por categoría
export const getBlogsByCategory = (category) => 
  blogsData.filter(blog => blog.category.toLowerCase() === category.toLowerCase());

// Función para buscar blogs
export const searchBlogs = (query) => 
  blogsData.filter(blog => 
    blog.title.toLowerCase().includes(query.toLowerCase()) ||
    blog.content.toLowerCase().includes(query.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );