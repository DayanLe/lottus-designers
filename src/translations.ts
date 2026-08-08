/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, GalleryItem, PortfolioHighlight, TestimonialItem, ProcessStep } from "./types";

export type Language = "en" | "es";

export interface ReasonItem {
  id: string;
  title: string;
  description: string;
}

// UI Label Dictionary
export const TRANSLATIONS: Record<string, Record<Language, string>> = {
  preloaderTitle: { en: "Lottus Designers", es: "Lottus Designers" },
  preloaderSubtitle: { en: "Designing extraordinary moments...", es: "Diseñando momentos extraordinarios..." },
  navAbout: { en: "About", es: "Sobre Nosotros" },
  navServices: { en: "Services", es: "Servicios" },
  servicesSubtitle: { en: "Bespoke Offerings", es: "Servicios Exclusivos" },
  servicesHeadline: { en: "The Architecture of Celebration", es: "La Arquitectura de la Celebración" },
  servicesDescription: { en: "We design and coordinate full-scale luxury events with absolute artistic devotion, blending exquisite floral installations with flawless logistics.", es: "Diseñamos y coordinamos eventos de lujo a gran escala con absoluta devoción artística, fusionando exquisitas instalaciones florales con una logística impecable." },
  servicesEnquire: { en: "Enquire Now", es: "Consultar Ahora" },
  navPortfolio: { en: "Portfolio", es: "Portafolio" },
  navProcess: { en: "Process", es: "Proceso" },
  navTestimonials: { en: "Testimonials", es: "Testimonios" },
  navContact: { en: "Contact", es: "Contacto" },
  navConsultation: { en: "Consultation", es: "Consulta" },
  heroTag: { en: "Event Planning & Design Studio", es: "Estudio de Diseño y Planificación de Eventos" },
  heroTitle: { en: "Creating Extraordinary Moments Through Elegant Event Design", es: "Creando Momentos Extraordinarios a través de un Diseño Elegante" },
  heroTitle1: { en: "Creating Extraordinary Moments Through ", es: "Creando Momentos Extraordinarios a través de un " },
  heroTitle2: { en: "Elegant Event Design", es: "Diseño Elegante" },
  heroSubtitle: { en: "Luxury weddings, unforgettable celebrations and beautifully crafted experiences throughout Medellín and Colombia.", es: "Bodas de lujo, celebraciones inolvidables y experiencias bellamente diseñadas en Medellín y toda Colombia." },
  heroCtaBook: { en: "Book a Consultation", es: "Agendar Consulta" },
  heroCtaPortfolio: { en: "View Our Portfolio", es: "Ver Portafolio" },
  heroScrollIndicator: { en: "Explore Studio", es: "Explorar Estudio" },
  cinematicTitle: { en: "Every Celebration Tells A Story", es: "Cada Celebración Cuenta Una Historia" },
  cinematicDescription: { en: "We design spaces that encapsulate raw emotion, leaving an indelible imprint of your life’s milestones. Let us compose yours with absolute, effortless grace.", es: "Diseñamos espacios que encapsulan emociones puras, dejando una huella imborrable en los hitos de su vida. Permítanos componer la suya con gracia absoluta y sin esfuerzo." },
  cinematicBtn: { en: "See More Events", es: "Ver Más Eventos" },
  whyChooseUsTag: { en: "The Lottus Promise", es: "La Promesa Lottus" },
  whyChooseUsTitle: { en: "The Signatures of Our Craftsmanship", es: "Los Sellos de Nuestra Artesanía" },
  whyChooseUsSubtitle: { en: "True luxury lies in the unseen details. Our holistic philosophy blends innovative concepts with flawless delivery, giving you a smooth, white-glove journey.", es: "El verdadero lujo reside en los detalles invisibles. Nuestra filosofía integral combina conceptos innovadores con una entrega impecable, brindándole un viaje fluido y de guante blanco." },
  journeyTag: { en: "The Journey", es: "El Viaje" },
  processTitle: { en: "The Orchestration Process", es: "El Proceso de Orquestación" },
  processSubtitle: { en: "A seamless, meticulous timeline designed to lead you from inspiration to your grand celebration, completely stress-free.", es: "Un cronograma fluido y meticuloso diseñado para llevarlo desde la inspiración hasta su gran celebración, completamente libre de estrés." },
  processStepLabel: { en: "Step", es: "Paso" },
  ctaBannerTitle: { en: "Let's Create Something Beautiful Together", es: "Creemos Algo Hermoso Juntos" },
  ctaBannerSubtitle: { en: "Schedule an intimate design session over Champagne and outline your vision. Let Lottus Designers direct your celebration into a grand work of art.", es: "Programe una sesión de diseño íntima con Champagne y trace su visión. Deje que Lottus Designers dirija su celebración para convertirla en una gran obra de arte." },
  ctaBannerBtnSchedule: { en: "Schedule Consultation", es: "Programar Consulta" },
  ctaBannerBtnContact: { en: "Contact Us", es: "Contáctenos" },
  contactTitle: { en: "Begin Your Story", es: "Comience Su Historia" },
  contactSubtitle: { en: "Schedule a private consultation. We look forward to crafting an extraordinary journey for you.", es: "Programe una consulta privada. Esperamos diseñar un viaje extraordinario para usted." },
  formName: { en: "Full Name", es: "Nombre Completo" },
  formEmail: { en: "Email Address", es: "Correo Electrónico" },
  formPhone: { en: "Phone Number", es: "Número de Teléfono" },
  formDate: { en: "Desired Date", es: "Fecha Deseada" },
  formType: { en: "Select Event Type", es: "Seleccionar Tipo de Evento" },
  formGuests: { en: "Estimated Guest Count", es: "Cantidad Estimada de Invitados" },
  formMessage: { en: "Tell us about your vision...", es: "Cuéntenos sobre su visión..." },
  formBtn: { en: "Send Consultation Request", es: "Enviar Solicitud de Consulta" },
  formSuccessTitle: { en: "Thank you!", es: "¡Gracias!" },
  formSuccessMsg: { en: "Your inquiry has been received with elegance. Our principal designer will reach out shortly.", es: "Su consulta ha sido recibida con elegancia. Nuestro diseñador principal se pondrá en contacto en breve." },
  footerParagraph: { en: "Crafting extraordinary sensory designs and seamless high-end coordinates across Medellin and Colombia since 2016.", es: "Diseñando experiencias sensoriales extraordinarias y coordinaciones exclusivas en Medellín y toda Colombia desde 2016." },
  footerDesignStudio: { en: "Design Studio", es: "Estudio de Diseño" } ,
  footerOffice: { en: "Office", es: "Oficina" },
  footerHours: { en: "Hours", es: "Horario" },
  footerByAppt: { en: "By appointment only", es: "Solo con cita previa" },
  footerLegal: { en: "© 2026 Lottus Designers. All rights reserved.", es: "© 2026 Lottus Designers. Todos los derechos reservados." },
  footerAdminLink: { en: "Admin Access", es: "Acceso Admin" },
  aboutSubtitle: { en: "The Art of Celebrations", es: "El Arte de Celebrar" },
  aboutPillarsTitle: { en: "Our Artistic Pillars", es: "Nuestros Pilares Artísticos" },
  aboutBadgeTitle: { en: "Top Event Designer", es: "Diseñador de Eventos Líder" },
  founderRole: { en: "Creative Director & Founder, Lottus Designers", es: "Director Creativo y Fundador, Lottus Designers" },
  adminTitle: { en: "Lead Administration Portal", es: "Portal de Administración de Prospectos" },
  adminSubtitle: { en: "Review and manage luxury consultation inquiries.", es: "Revise y gestione las solicitudes de consultas de lujo." },
  adminExport: { en: "Export CSV", es: "Exportar CSV" },
  adminStatusAll: { en: "All Submissions", es: "Todas las Solicitudes" },
  adminStatusNoLeads: { en: "No consultation requests found.", es: "No se encontraron solicitudes de consulta." },
  galleryTitle: { en: "Visual Inspiration", es: "Inspiración Visual" },
  gallerySub: { en: "A curation of sculptural florals, ethereal details, and grand venues designed by our studio.", es: "Una curaduría de flores escultóricas, detalles etéreos y grandes escenarios diseñados por nuestro estudio." },
  galleryAll: { en: "All Work", es: "Todo el Trabajo" },
  portfolioTitle: { en: "Featured Orchestrations", es: "Orquestaciones Destacadas" },
  portfolioSub: { en: "Explore a selection of our most complex spatial transformations and luxurious landmark occasions.", es: "Explore una selección de nuestras transformaciones espaciales más complejas y lujosas ocasiones." },
  testimonialsTitle: { en: "Love Notes & Appreciations", es: "Notas de Amor y Agradecimientos" },
  testimonialsSub: { en: "Words from the discerning couples and premium clients who trusted our aesthetic vision.", es: "Palabras de las parejas y clientes exigentes que confiaron en nuestra visión estética." }
};

// Localized Categories Translation Helper
export const CATEGORY_TRANSLATIONS: Record<string, Record<Language, string>> = {
  All: { en: "All Work", es: "Todo el Trabajo" },
  Weddings: { en: "Weddings", es: "Bodas" },
  Florals: { en: "Florals", es: "Flores" },
  Corporate: { en: "Corporate", es: "Corporativo" },
  Details: { en: "Details", es: "Detalles" }
};

// Localized Event Type Form Options
export const EVENT_TYPE_OPTIONS: { value: string; label: Record<Language, string> }[] = [
  { value: "wedding", label: { en: "Luxury Wedding", es: "Boda de Lujo" } },
  { value: "corporate", label: { en: "Corporate Event", es: "Evento Corporativo" } },
  { value: "private", label: { en: "Private Celebration", es: "Celebración Privada" } },
  { value: "styling", label: { en: "Event Styling", es: "Estilismo de Eventos" } },
  { value: "other", label: { en: "Other Exclusive Request", es: "Otra Solicitud Exclusiva" } }
];

// Spanish Data Overrides
export const SERVICES_ES: ServiceItem[] = [
  {
    id: "wedding",
    title: "Bodas de Lujo",
    description: "Desde votos íntimos al atardecer en Llanogrande hasta impresionantes ceremonias en catedrales de Medellín, diseñamos celebraciones a medida que reflejan a la perfección su historia de amor.",
    iconName: "Sparkles"
  },
  {
    id: "corporate",
    title: "Eventos Corporativos",
    description: "Lanzamientos de productos de alta gama, galas anuales y eventos de marca inmersivos diseñados para cautivar a sus socios y elevar su identidad corporativa.",
    iconName: "Briefcase"
  },
  {
    id: "private",
    title: "Celebraciones Privadas",
    description: "Milestone de cumpleaños memorables, aniversarios exclusivos y lujosas veladas de cóctel curadas con temáticas personalizadas y una presentación culinaria impecable.",
    iconName: "GlassWater"
  },
  {
    id: "styling",
    title: "Estilismo de Eventos",
    description: "Curaduría estética integral que incluye selección de mantelería fina, vajilla de lujo, coordinación espacial e iluminación atmosférica a medida.",
    iconName: "Palette"
  },
  {
    id: "floral",
    title: "Diseño Floral",
    description: "Instalaciones florales escultóricas, centros de mesa imponentes y techos botánicos en cascada elaborados por maestros artesanos con las mejores flores colombianas.",
    iconName: "Flower"
  },
  {
    id: "decor",
    title: "Decoración Personalizada",
    description: "Curaduría de mobiliario exclusivo, drapeado de telas finas, detalles de papelería caligrafiados a mano e instalaciones de arte a medida únicas para su evento.",
    iconName: "Layers"
  },
  {
    id: "transformation",
    title: "Transformación de Espacios",
    description: "Conversión de espacios en blanco, bodegas o jardines al aire libre en entornos impresionantes e inmersivos mediante el diseño estructural.",
    iconName: "Maximize"
  },
  {
    id: "planning",
    title: "Planificación Integral",
    description: "Coordinación de punta a punta, gestión de proveedores de élite, ejecución precisa del cronograma y dirección in situ para una experiencia impecable y sin estrés.",
    iconName: "CalendarDays"
  }
];

export const GALLERY_ITEMS_ES: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    category: "Weddings",
    title: "Ceremonia de Jardín a la Luz de las Velas",
    spanClass: "md:col-span-2 md:row-span-2"
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    category: "Details",
    title: "Mesa Etérea y Elegante",
    spanClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    category: "Florals",
    title: "Centro de Mesa Escultórico de Rosas Blancas",
    spanClass: "md:col-span-1 md:row-span-2"
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    category: "Corporate",
    title: "Gran Gala en el Pabellón",
    spanClass: "md:col-span-2 md:row-span-1"
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200",
    category: "Weddings",
    title: "Recepción bajo el Dosel Botánico",
    spanClass: "md:col-span-1 md:row-span-2"
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200",
    category: "Details",
    title: "Vajilla de Cristal Opulenta",
    spanClass: "md:col-span-1 md:row-span-1"
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200",
    category: "Corporate",
    title: "Lounge Sinfonía de Luces",
    spanClass: "md:col-span-2 md:row-span-1"
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1507504038482-76210db8834a?auto=format&fit=crop&q=80&w=1200",
    category: "Details",
    title: "Candelabros de Finca de Lujo",
    spanClass: "md:col-span-1 md:row-span-1"
  }
];

export const PORTFOLIO_HIGHLIGHTS_ES: PortfolioHighlight[] = [
  {
    id: "p1",
    title: "Unión Botánica Etérea",
    eventType: "Boda de Destino de Lujo",
    location: "Hacienda Llanogrande, Antioquia",
    description: "Una ceremonia en pabellón de cristal rodeada por 15,000 orquídeas blancas colgantes, complementada con candelabros de cristal y un pasillo reflectante sobre el agua que creaba la ilusión de caminar sobre ella.",
    imageUrl: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p2",
    title: "Sinfonía de Luces Gala",
    eventType: "Velada Anual Corporativa",
    location: "Pabellón del Jardín Botánico, Medellín",
    description: "Una experiencia culinaria inmersiva para 300 invitados internacionales, con techos de luces interactivas, mapeo de proyección sensible al sonido y paredes verdes verticales personalizadas.",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p3",
    title: "Medianoche en Versalles",
    eventType: "Celebración de Hito Especial",
    location: "Finca en las Colinas de Santa Elena",
    description: "Una dramática recepción nocturna que capturó la opulencia de la realeza francesa. Se incluyeron columnas doradas antiguas, cortinas de encaje personalizadas, 800 velas de cera de abejas y una barra de hielo tallada a mano.",
    imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "p4",
    title: "Atardecer Dorado en Cascada",
    eventType: "Boda en Mansión Privada",
    location: "Colinas de El Poblado, Medellín",
    description: "Una recepción al atardecer con vista a las luces de la ciudad. Decorada con cálidas cortinas doradas brillantes, modernos detalles en negro mate y una nube floral suspendida a medida sobre la mesa principal.",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200"
  }
];

export const TESTIMONIALS_ES: TestimonialItem[] = [
  {
    id: "t1",
    name: "Victoria & Mateo",
    role: "Novia y Novio",
    quote: "Lottus Designers convirtió nuestra boda en Llanogrande en una obra maestra absoluta. Cada invitado sintió que había entrado en un país de maravillas etéreo. Su atención a cada orquídea, vela y mantel fue asombrosa.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t2",
    name: "Alejandro Estrada",
    role: "VP de Experiencias, Grupo Sura",
    quote: "La narrativa visual y la organización espacial proporcionada por Lottus Designers fue de clase mundial. Nuestra gala anual de la cumbre no solo fue visualmente impactante, sino que se ejecutó con una precisión impecable.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: "t3",
    name: "Mariana & Carlos",
    role: "Celebrantes de 10° Aniversario",
    quote: "Queríamos una celebración que se sintiera íntima, lujosa y con la esencia única de Medellín. El follaje en cascada a medida, las luces ámbar cálidas y el cronograma perfecto crearon una noche inolvidable. Trabajar con ellos fue un verdadero lujo desde el primer día.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export const PROCESS_STEPS_ES: ProcessStep[] = [
  {
    number: "01",
    title: "Consulta de Descubrimiento",
    description: "Una sesión íntima y profunda con Champagne donde escuchamos sus sueños, definimos su voz estética y comprendemos el alcance de su celebración."
  },
  {
    number: "02",
    title: "Concepto Creativo",
    description: "Elaboramos una propuesta de diseño inmersiva completa con tableros de inspiración detallados, teorías del color, representaciones espaciales e ideas de floristería bosquejadas a mano."
  },
  {
    number: "03",
    title: "Diseño y Planificación",
    description: "Reunimos a su equipo personalizado de proveedores de élite, adquirimos cortinas exclusivas, diseñamos prototipos y construimos un flujo de ejecución meticuloso minuto a minuto."
  },
  {
    number: "04",
    title: "Ejecución del Evento",
    description: "Nuestros diseñadores dedicados y el equipo de producción gestionan el montaje in situ. Orquestamos la iluminación, decoramos mesas, colocamos flores y ejecutamos cada elemento a la perfección."
  },
  {
    number: "05",
    title: "La Celebración",
    description: "Usted ingresa a una obra de arte viviente. Mientras nuestro equipo maneja cada detalle de coordinación tras bambalinas, usted se enfoca por completo en vivir un momento extraordinario."
  }
];

export const REASONS_ES: ReasonItem[] = [
  {
    id: "r1",
    title: "Planificación Personalizada",
    description: "Adaptamos cada elemento a su sello personal, asegurando que su evento sea un reflejo directo de sus sueños."
  },
  {
    id: "r2",
    title: "Conceptos Creativos de Eventos",
    description: "Rechazamos lo genérico. Nuestro estudio diseña conceptos a medida, combinando iluminación arquitectónica, arte floral y distribución espacial."
  },
  {
    id: "r3",
    title: "Atención a Cada Detalle",
    description: "Desde tarjetas personalizadas con caligrafía manual hasta el centímetro exacto de los manteles, nuestra naturaleza perfeccionista garantiza la excelencia."
  },
  {
    id: "r4",
    title: "Proveedores de Élite",
    description: "Lo conectamos con los floristas más destacados de Medellín, maestros chefs, curadores de vinos finos y artistas en vivo para lograr un nivel de clase mundial."
  },
  {
    id: "r5",
    title: "Equipo Experimentado",
    description: "Un colectivo experimentado de diseñadores, artistas florales, constructores estructurales y directores de montaje con una década de experiencia."
  },
  {
    id: "r6",
    title: "Coordinación Libre de Estrés",
    description: "Brindamos total tranquilidad, gestionando cronogramas, logística de proveedores y planes de respaldo con una gracia impecable."
  },
  {
    id: "r7",
    title: "Acabados de Lujo",
    description: "Utilizando cortinas de terciopelo, cristal auténtico, cubiertos dorados personalizados y espectaculares luminarias para garantizar una profundidad visual de primera calidad."
  },
  {
    id: "r8",
    title: "Experiencias Memorables",
    description: "Diseñamos momentos emotivos pensados para perdurar. Sus invitados recordarán la elegancia, la alegría y la narrativa por años."
  }
];

export const STATS_ES = [
  { value: "500+", label: "Eventos Diseñados" },
  { value: "250+", label: "Parejas Felices" },
  { value: "10+", label: "Años de Experiencia" },
  { value: "100%", label: "Satisfacción del Cliente" }
];

export const BRAND_STORY_ES = {
  headline: "Diseñando Momentos Que Duran Para Siempre",
  paragraph1: "Con sede en el exuberante y vibrante valle de Medellín, Colombia, Lottus Designers es un estudio de planificación de eventos de lujo y diseño espacial de primer nivel. Fundado sobre la creencia de que una gran celebración no solo se planifica, sino que se compone artísticamente, curamos entornos inmersivos que cautivan los sentidos y cuentan una historia visual profundamente personal.",
  paragraph2: "Entrelazamos majestuosos diseños florales, un sofisticado estilismo estructural, iluminación dramática personalizada y una producción de eventos de primer nivel para orquestar experiencias perfectas. Desde dramáticas recepciones en fincas a la luz de las velas en las montañas de Santa Elena hasta amplios pabellones de cristal botánicos en Llanogrande, ofrecemos un viaje libre de estrés que resulta en momentos atemporales y magníficos.",
  specialties: ["Bodas de Destino de Lujo", "Galas Corporativas Inmersivas", "Celebraciones Privadas de Alta Gama", "Escultura Floral Personalizada", "Producción Atmosférica de Eventos"]
};
