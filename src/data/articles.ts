export type ArticleContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "divider" }
  | { type: "quote"; text: string; footer?: string };

export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  content?: string;
  contentBlocks: ArticleContentBlock[];
  publishedAt: string;
}

export const articles: Article[] = [
  {
    slug: "como-evitar-sobrecalentamiento-gpus",
    title: "Cómo evitar sobrecalentamiento en GPUs",
    category: "Optimización Térmica",
    readTime: "8 min lectura",
    image: "/assets/blog/gpu-overheating.jpg",
    excerpt: "Las temperaturas elevadas son el enemigo silencioso del rendimiento. Conoce las causas más comunes y cómo prevenirlas.",
    publishedAt: "10 de mayo, 2025",
    content: "El sobrecalentamiento de la GPU es uno de los problemas más frecuentes en equipos de alto rendimiento...",
    contentBlocks: [
      { type: "heading", level: 2, text: "¿Por qué se sobrecalienta la GPU?" },
      {
        type: "paragraph",
        text: "El sobrecalentamiento de la GPU es uno de los problemas más frecuentes en equipos de alto rendimiento, afectando tanto a gamers como a profesionales del renderizado. Las causas son variadas: desde la acumulación progresiva de polvo en los disipadores hasta la degradación natural de la pasta térmica y los thermal pads originales del fabricante."
      },
      {
        type: "image",
        src: "/assets/blog/gpu-overheating.jpg",
        alt: "GPU con ventilación en un gabinete",
        caption: "Una buena gestión del flujo de aire es clave para mantener temperaturas estables." 
      },
      {
        type: "paragraph",
        text: "Una ventilación deficiente en el chasis puede crear bolsas de aire caliente alrededor de la tarjeta, impidiendo que el sistema de enfriamiento funcione correctamente. Además, problemas en la entrega de energía o configuraciones de overclock inestables pueden generar picos de temperatura que el sistema no está diseñado para manejar."
      },
      { type: "divider" },
      { type: "heading", level: 3, text: "Síntomas comunes" },
      {
        type: "paragraph",
        text: "Los síntomas más comunes incluyen thermal throttling, ventiladores girando al 100% constantemente, artifacts visuales en pantalla, cierres inesperados de aplicaciones pesadas o reinicios repentinos del sistema. Ignorar estas señales puede reducir drásticamente la vida útil del componente."
      },
      {
        type: "quote",
        text: "El monitoreo constante mediante software especializado es clave para detectar anomalías antes de que causen daños permanentes.",
        footer: "— Zenter Colombia"
      },
      {
        type: "paragraph",
        text: "Para prevenir el sobrecalentamiento, recomendamos establecer un flujo de aire positivo en el gabinete, realizar limpiezas preventivas cada 6 meses y considerar el mantenimiento de la interfaz térmica si la tarjeta tiene más de dos años de uso intensivo."
      }
    ]
  },
  {
    slug: "thermal-pads-vs-thermal-putty",
    title: "Thermal pads vs thermal putty: ¿cuál usar?",
    category: "Hardware",
    readTime: "6 min lectura",
    image: "/assets/blog/thermal-putty-vs-pads.jpg",
    excerpt: "Una comparativa técnica de los materiales de interfaz térmica más usados en equipos de alto rendimiento.",
    publishedAt: "3 de mayo, 2025",
    content: "La elección entre thermal pads tradicionales y thermal putty (masilla térmica) se ha vuelto un tema de debate crucial en el mantenimiento de tarjetas gráficas modernas y portátiles de alto rendimiento. Ambos materiales cumplen la misma función: transferir el calor desde componentes irregulares como chips de memoria (VRAM) y reguladores de voltaje (VRMs) hacia el disipador principal.",
    contentBlocks: [
      { type: "paragraph", text: "La elección entre thermal pads tradicionales y thermal putty se ha vuelto un tema de debate crucial en el mantenimiento de tarjetas gráficas modernas y portátiles de alto rendimiento." },
      { type: "image", src: "/assets/blog/thermal-putty-vs-pads.jpg", alt: "Comparativa de thermal pads y thermal putty", caption: "Elige el material correcto según el diseño y la presión de montaje." },
      { type: "heading", level: 2, text: "¿Qué hace cada material?" },
      { type: "paragraph", text: "Los thermal pads ofrecen una instalación más limpia y controlada, siendo ideales cuando se conoce el grosor exacto requerido por el fabricante." },
      { type: "paragraph", text: "El thermal putty es altamente maleable y se adapta perfectamente a cualquier espacio, eliminando por completo el problema del grosor incorrecto." },
      { type: "quote", text: "La masilla térmica puede ser más difícil de limpiar, pero su capacidad de adaptarse hace la diferencia en espacios con tolerancias ajustadas.", footer: "— Recomendación técnica" },
      { type: "paragraph", text: "La recomendación general es utilizar pads de alta conductividad para diseños estándar, y masilla térmica en escenarios donde la presión de montaje sea crítica o los grosores requeridos sean desconocidos." }
    ]
  },
  {
    slug: "por-que-pc-se-reinicia-sola",
    title: "Por qué una PC se reinicia sola",
    category: "Diagnóstico",
    readTime: "5 min lectura",
    image: "/assets/blog/pc-restart-issues.jpg",
    excerpt: "Desde fallos de PSU hasta inestabilidades de RAM: guía completa para diagnosticar reinicios inesperados.",
    publishedAt: "28 de abril, 2025",
    content: "Los reinicios inesperados en una computadora de escritorio pueden ser extremadamente frustrantes, ya que el sistema a menudo no deja un mensaje de error claro antes de apagarse.",
    contentBlocks: [
      { type: "paragraph", text: "Los reinicios inesperados en una computadora de escritorio pueden ser extremadamente frustrantes, ya que el sistema a menudo no deja un mensaje de error claro antes de apagarse." },
      { type: "image", src: "/assets/blog/pc-restart-issues.jpg", alt: "PC con reinicio inesperado", caption: "Varios factores pueden provocar reinicios repentinos en un equipo." },
      { type: "heading", level: 2, text: "¿Por qué falla la fuente de poder?" },
      { type: "paragraph", text: "Una PSU degradada o de mala calidad no logra mantener los voltajes estables durante tareas intensivas, activando protecciones y cortando la energía abruptamente." },
      { type: "heading", level: 2, text: "Memoria RAM y estabilidad" },
      { type: "paragraph", text: "Los errores de memoria suelen estar relacionados con perfiles XMP/EXPO agresivos o módulos defectuosos. Herramientas como MemTest86 ayudan a aislar este tipo de fallos." },
      { type: "quote", text: "El visor de eventos de Windows es una herramienta clave para encontrar la raíz del reinicio antes de hacer cambios innecesarias." }
    ]
  },
  {
    slug: "mejorar-estabilidad-streaming",
    title: "Cómo mejorar estabilidad en setups de streaming",
    category: "Streaming",
    readTime: "7 min lectura",
    image: "/assets/blog/streaming-stability.jpg",
    excerpt: "Optimiza tu setup para emisiones sin interrupciones: red, codificación, hardware y configuración.",
    publishedAt: "20 de abril, 2025",
    content: "La estabilidad en una transmisión en vivo depende de una delicada sincronización entre hardware, software y red.",
    contentBlocks: [
      { type: "paragraph", text: "La estabilidad en una transmisión en vivo depende de una delicada sincronización entre hardware, software y red." },
      { type: "image", src: "/assets/blog/streaming-stability.jpg", alt: "Estabilidad en un setup de streaming", caption: "El mejor streaming comienza con la red y el codificador adecuados." },
      { type: "heading", level: 2, text: "Conexión estable" },
      { type: "paragraph", text: "Transmitir por WiFi introduce fluctuaciones de latencia y pérdida de paquetes. Una conexión cableada directa por Ethernet es innegociable para garantizar un flujo constante de datos." },
      { type: "heading", level: 2, text: "Codificación eficiente" },
      { type: "paragraph", text: "Para setups de un solo PC, es preferible usar el codificador de hardware de la GPU para liberar CPU y mantener la transmisión consistente." },
      { type: "quote", text: "Es mejor transmitir a 720p o 900p con un bitrate constante que empujar una calidad superior con una conexión inestable.", footer: "— Consejo de streaming" }
    ]
  },
  {
    slug: "ups-estudio-webcam",
    title: "Qué UPS necesita un estudio webcam",
    category: "Infraestructura",
    readTime: "4 min lectura",
    image: "/assets/blog/ups-webcam-studio.jpg",
    excerpt: "Protege tu equipo y tus transmisiones en vivo con la solución de respaldo energético correcta.",
    publishedAt: "14 de abril, 2025",
    content: "En la infraestructura de un estudio webcam o sala de streaming profesional, la continuidad energética es tan importante como la calidad del internet.",
    contentBlocks: [
      { type: "paragraph", text: "En la infraestructura de un estudio webcam o sala de streaming profesional, la continuidad energética es tan importante como la calidad del internet." },
      { type: "image", src: "/assets/blog/ups-webcam-studio.jpg", alt: "UPS en un estudio webcam", caption: "Un UPS correcto protege transmisiones y equipos sensibles ante cortes de energía." },
      { type: "heading", level: 2, text: "Tipos de UPS" },
      { type: "paragraph", text: "Para equipos de alto rendimiento, los Line-Interactive son el mínimo recomendado. Para estudios con múltiples equipos sensibles, un UPS Online de onda senoidal pura es la mejor opción." },
      { type: "heading", level: 2, text: "Dimensionamiento" },
      { type: "paragraph", text: "Suma el consumo máximo estimado de todos los equipos conectados y elige un UPS con al menos un 20-30% adicional de margen." },
      { type: "quote", text: "El mantenimiento preventivo es clave: un UPS en un lugar fresco y ventilado responde mejor cuando realmente lo necesitas.", footer: "— Recomendación Zenter" }
    ]
  },
  {
    slug: "optimizacion-termica-avanzada",
    title: "Optimización térmica avanzada",
    category: "Optimización Térmica",
    readTime: "10 min lectura",
    image: "/assets/blog/advanced-thermal.jpg",
    excerpt: "Técnicas profesionales de gestión térmica para workstations de alto rendimiento.",
    publishedAt: "7 de abril, 2025",
    content: "En el ensamblaje y mantenimiento de workstations diseñadas para renderizado 3D, simulaciones científicas o gaming extremo, la gestión térmica básica no es suficiente.",
    contentBlocks: [
      { type: "paragraph", text: "En el ensamblaje y mantenimiento de workstations diseñadas para renderizado 3D, simulaciones científicas o gaming extremo, la gestión térmica básica no es suficiente." },
      { type: "image", src: "/assets/blog/advanced-thermal.jpg", alt: "Workstation de alto rendimiento", caption: "La gestión térmica avanzada aborda temperatura, flujo de aire y componentes críticos." },
      { type: "heading", level: 2, text: "Rutas de flujo de aire" },
      { type: "paragraph", text: "Una presión interna ligeramente positiva ayuda a prevenir polvo, pero requiere ventiladores adecuados para entradas y salidas." },
      { type: "heading", level: 3, text: "Compuestos térmicos de alto rendimiento" },
      { type: "paragraph", text: "La aplicación correcta de compuestos térmicos puede marcar diferencias importantes en CPUs y GPUs calientes." },
      { type: "quote", text: "Los ajustes finos, como ductos impresos en 3D, son el sello distintivo de un ensamblaje profesional verdaderamente optimizado.", footer: "— Mejora térmica" }
    ]
  }
];
