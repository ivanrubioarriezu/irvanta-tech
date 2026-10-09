export const company = {
  name: 'Irvanta TECH',
  shortName: 'IRVANTA',
  email: 'info@irvantech.com',
  year: 2026,
};

export const navigation = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/services' },
  { label: 'Sobre Irvanta TECH', href: '/about' },
  { label: 'Contacto', href: '/contact' },
];

export const legalNavigation = [
  { label: 'Aviso legal', href: '/legal/aviso-legal' },
  { label: 'Privacidad', href: '/legal/privacidad' },
  { label: 'Cookies', href: '/legal/cookies' },
  { label: 'Términos y condiciones', href: '/legal/terminos' },
];

export const services = [
  {
    number: '01',
    title: 'Estrategia tecnológica',
    description: 'Aterrizamos objetivos de negocio en decisiones técnicas claras y una hoja de ruta ejecutable.',
    detail: 'Diagnóstico · arquitectura · planificación',
  },
  {
    number: '02',
    title: 'Software a medida',
    description: 'Diseñamos y construimos herramientas digitales alrededor de procesos reales, no de soluciones genéricas.',
    detail: 'Producto digital · aplicaciones · integraciones',
  },
  {
    number: '03',
    title: 'Automatización e inteligencia',
    description: 'Reducimos tareas repetitivas y conectamos sistemas para que los equipos se centren en el trabajo de valor.',
    detail: 'Flujos · datos · inteligencia aplicada',
  },
];

export const serviceCatalog = {
  es: [
    {
      id: 'software',
      title: 'Desarrollo de software',
      intro: 'Aplicaciones, herramientas y sistemas diseñados para resolver problemas reales del negocio.',
      items: ['Aplicaciones web', 'Aplicaciones internas', 'APIs', 'Sistemas personalizados', 'Integraciones', 'Herramientas empresariales'],
    },
    {
      id: 'data',
      title: 'Datos y Business Intelligence',
      intro: 'Transformamos datos dispersos en información útil para tomar decisiones más rápidas y con contexto.',
      items: ['Data Analytics', 'Dashboards', 'Power BI', 'SQL', 'ETL / ELT', 'Data pipelines', 'Data quality', 'Reporting', 'Automatización de informes'],
    },
    {
      id: 'automation',
      title: 'Automatización',
      intro: 'Automatizamos tareas repetitivas para que tu equipo pueda centrarse en lo que realmente importa.',
      items: ['Automatización de procesos', 'Integración entre herramientas', 'Flujos automáticos', 'Generación de informes', 'Automatización administrativa'],
    },
    {
      id: 'ai',
      title: 'Inteligencia Artificial',
      intro: 'Aplicamos IA para mejorar procesos, reducir fricción y sacar más valor de la información disponible.',
      items: ['Integración de modelos de IA', 'Automatización mediante IA', 'Chatbots', 'Procesamiento de documentos', 'Análisis de información', 'Asistentes internos', 'IA aplicada a procesos empresariales'],
    },
    {
      id: 'web',
      title: 'Desarrollo Web',
      intro: 'Presencia digital sólida, útil y alineada con objetivos de negocio, ventas y reputación.',
      items: ['Web corporativa', 'Landing pages', 'Webs profesionales', 'E-commerce', 'Aplicaciones web', 'Optimización y mantenimiento'],
    },
    {
      id: 'consulting',
      title: 'Consultoría tecnológica',
      intro: 'Diagnóstico, estrategia y diseño de soluciones para transformar procesos y elegir la mejor tecnología.',
      items: ['Análisis tecnológico', 'Digitalización', 'Arquitectura de soluciones', 'Optimización de procesos', 'Estrategia de datos', 'Selección de herramientas'],
    },
  ],
  en: [
    {
      id: 'software',
      title: 'Software development',
      intro: 'Applications, tools and systems built to solve real business challenges.',
      items: ['Web applications', 'Internal applications', 'APIs', 'Custom systems', 'Integrations', 'Business tools'],
    },
    {
      id: 'data',
      title: 'Data and Business Intelligence',
      intro: 'We turn scattered data into useful information for faster, better-informed decisions.',
      items: ['Data Analytics', 'Dashboards', 'Power BI', 'SQL', 'ETL / ELT', 'Data pipelines', 'Data quality', 'Reporting', 'Report automation'],
    },
    {
      id: 'automation',
      title: 'Automation',
      intro: 'We automate repetitive tasks so your team can focus on what matters most.',
      items: ['Process automation', 'Tool integration', 'Automatic workflows', 'Report generation', 'Administrative automation'],
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      intro: 'We apply AI to improve processes, reduce friction and extract more value from information.',
      items: ['AI model integration', 'AI-driven automation', 'Chatbots', 'Document processing', 'Information analysis', 'Internal assistants', 'AI for business processes'],
    },
    {
      id: 'web',
      title: 'Web development',
      intro: 'A digital presence that is effective, scalable and aligned with business goals.',
      items: ['Corporate websites', 'Landing pages', 'Professional websites', 'E-commerce', 'Web applications', 'Optimization and maintenance'],
    },
    {
      id: 'consulting',
      title: 'Technology consulting',
      intro: 'Assessment, strategy and solution design to improve processes and choose the right technology.',
      items: ['Technology analysis', 'Digitalization', 'Solution architecture', 'Process optimization', 'Data strategy', 'Tool selection'],
    },
  ],
};

export const solutionCatalog = {
  es: [
    {
      id: 'automation',
      title: 'Quiero automatizar tareas',
      intro: 'Eliminamos trabajo manual repetitivo para que el equipo dedique más tiempo a decisiones, atención al cliente y crecimiento.',
      items: ['Automatización de procesos', 'Integración entre herramientas', 'Flujos automáticos', 'Informes y alertas', 'Optimización operativa'],
    },
    {
      id: 'data',
      title: 'Necesito visualizar mis datos',
      intro: 'Convertimos datos dispersos en dashboards claros, fáciles de entender y útiles para tomar decisiones con rapidez.',
      items: ['Dashboards', 'BI y reporting', 'Power BI', 'SQL y consultas', 'ETL / ELT', 'Pipeline de datos'],
    },
    {
      id: 'software',
      title: 'Necesito una herramienta propia',
      intro: 'Diseñamos software a medida para cubrir procesos específicos y adaptar la tecnología a tu forma de trabajar.',
      items: ['Aplicaciones internas', 'Sistemas personalizados', 'APIs', 'Integraciones', 'Herramientas empresariales'],
    },
    {
      id: 'ai',
      title: 'Quiero incorporar IA',
      intro: 'Integramos IA donde aporta valor real: ahorro de tiempo, mejor análisis, asistentes internos y automatización inteligente.',
      items: ['Asistentes IA', 'Procesamiento documental', 'Automatización con IA', 'Chatbots', 'Análisis de información'],
    },
    {
      id: 'digitalization',
      title: 'Mi empresa necesita digitalizarse',
      intro: 'Analizamos tu operación para identificar fricciones, definir una hoja de ruta y poner en marcha la transformación tecnológica adecuada.',
      items: ['Diagnóstico tecnológico', 'Digitalización de procesos', 'Arquitectura de soluciones', 'Selección de herramientas', 'Optimización de negocio'],
    },
    {
      id: 'web',
      title: 'Necesito una web profesional',
      intro: 'Creamos una presencia digital clara, útil y alineada con tu negocio para vender mejor, comunicar mejor y captar oportunidades.',
      items: ['Web corporativa', 'Landing pages', 'Web profesional', 'E-commerce', 'Mantenimiento y mejora continua'],
    },
  ],
  en: [
    {
      id: 'automation',
      title: 'I want to automate tasks',
      intro: 'We remove repetitive manual work so your team can focus on decisions, customer attention and growth.',
      items: ['Process automation', 'Tool integration', 'Automatic workflows', 'Reports and alerts', 'Operational optimization'],
    },
    {
      id: 'data',
      title: 'I need to visualize my data',
      intro: 'We turn scattered data into clear dashboards that make decisions faster and easier to trust.',
      items: ['Dashboards', 'BI and reporting', 'Power BI', 'SQL and queries', 'ETL / ELT', 'Data pipeline'],
    },
    {
      id: 'software',
      title: 'I need my own tool',
      intro: 'We design custom software to cover specific processes and adapt technology to the way your business actually works.',
      items: ['Internal applications', 'Custom systems', 'APIs', 'Integrations', 'Business tools'],
    },
    {
      id: 'ai',
      title: 'I want to adopt AI',
      intro: 'We integrate AI where it creates real value: time savings, deeper analysis, internal assistants and smart automation.',
      items: ['AI assistants', 'Document processing', 'AI automation', 'Chatbots', 'Information analysis'],
    },
    {
      id: 'digitalization',
      title: 'My business needs digital transformation',
      intro: 'We analyze your operations to identify friction, define a roadmap and implement the right technological transformation.',
      items: ['Technology diagnosis', 'Process digitalization', 'Solution architecture', 'Tool selection', 'Business optimization'],
    },
    {
      id: 'web',
      title: 'I need a professional website',
      intro: 'We create a digital presence that is clear, useful and aligned with your business goals and growth strategy.',
      items: ['Corporate website', 'Landing pages', 'Professional website', 'E-commerce', 'Maintenance and continuous improvement'],
    },
  ],
};

export const projectCatalog = {
  es: [
    {
      name: 'Panel de operaciones',
      category: 'Web Development',
      summary: 'Dashboard operativa para monitorizar KPI, tareas y rendimiento del negocio en un único punto de vista.',
      challenge: 'La empresa gestionaba información en varias herramientas y no tenía una visión clara del rendimiento operativo diario.',
      solution: 'Diseñamos un panel centralizado con indicadores clave, consolidación de datos y automatización de reportes para toda la operación.',
      technologies: ['Astro', 'SQL', 'Power BI', 'Python'],
      result: '60% menos tiempo dedicado a consolidar información cada semana.',
    },
    {
      name: 'Flujos internos automatizados',
      category: 'Automation',
      summary: 'Automatización de procesos rutinarios para eliminar tareas manuales y acelerar la coordinación interna.',
      challenge: 'El equipo repetía tareas de gestión, validación y seguimiento en diferentes sistemas, creando pérdidas de tiempo y riesgo de error.',
      solution: 'Conectamos herramientas y definimos flujos automáticos para la gestión de solicitudes, validaciones y notificaciones internas.',
      technologies: ['Python', 'APIs', 'SQL', 'Power Automate'],
      result: '3 horas → 20 minutos en la gestión de cada flujo de trabajo.',
    },
    {
      name: 'Plataforma digital B2B',
      category: 'Data',
      summary: 'Plataforma para centralizar clientes, reportes y oportunidades con una experiencia más clara para equipos comerciales y operativos.',
      challenge: 'La empresa contaba con varias fuentes de información y mucha fricción en el proceso de seguimiento comercial y operativo.',
      solution: 'Diseñamos una web con estructura clara, integraciones y dashboard que centralizan la información para cada área.',
      technologies: ['React', 'SQL', 'AWS', 'Power BI'],
      result: '5 herramientas integradas en una única plataforma de trabajo.',
    },
    {
      name: 'Asistente de negocio con IA',
      category: 'AI',
      summary: 'Asistente para extraer información, resumir tareas y apoyar decisiones a partir de datos y documentos internos.',
      challenge: 'El equipo tenía que revisar demasiada información manualmente para responder con rapidez y mantener la trazabilidad.',
      solution: 'Implementamos un asistente con IA para clasificar información, resumir documentos y apoyar procesos analíticos repetitivos.',
      technologies: ['Python', 'OpenAI', 'SQL', 'React'],
      result: 'Más rapidez en la revisión documental y mejor trazabilidad en cada proceso.',
    },
  ],
  en: [
    {
      name: 'Operations dashboard',
      category: 'Web Development',
      summary: 'Operational dashboard to track KPIs, tasks and business performance from a single view.',
      challenge: 'The company managed data across multiple tools and had no clear overview of daily operational performance.',
      solution: 'We designed a centralized panel with key indicators, data consolidation and automated reporting for the whole operation.',
      technologies: ['Astro', 'SQL', 'Power BI', 'Python'],
      result: '60% less time spent consolidating information each week.',
    },
    {
      name: 'Internal workflow automation',
      category: 'Automation',
      summary: 'Automation of routine tasks to remove manual work and speed up internal coordination.',
      challenge: 'The team repeated management, validation and follow-up tasks across several systems, creating time loss and human error.',
      solution: 'We connected tools and defined automatic flows for request handling, validations and internal notifications.',
      technologies: ['Python', 'APIs', 'SQL', 'Power Automate'],
      result: '3 hours → 20 minutes in the management of each workflow.',
    },
    {
      name: 'B2B digital platform',
      category: 'Data',
      summary: 'Platform to centralize clients, reports and opportunities with a clearer experience for sales and operations.',
      challenge: 'The company had multiple information sources and a lot of friction in the commercial and operational follow-up process.',
      solution: 'We designed a web platform with clear structure, integrations and dashboards that centralize information across teams.',
      technologies: ['React', 'SQL', 'AWS', 'Power BI'],
      result: '5 tools integrated into a single work platform.',
    },
    {
      name: 'AI business assistant',
      category: 'AI',
      summary: 'Assistant to extract information, summarize tasks and support decisions from internal documents and data.',
      challenge: 'The team had to review too much information manually to respond quickly and maintain traceability.',
      solution: 'We implemented an AI assistant to classify information, summarize documents and support repetitive analytical processes.',
      technologies: ['Python', 'OpenAI', 'SQL', 'React'],
      result: 'Faster document review and better traceability in each process.',
    },
  ],
};
