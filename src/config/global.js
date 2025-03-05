export default {
  global: {
    Name: 'Administración de acciones y participación comunitaria',
    Description:
      'La participación comunitaria es un mecanismo a través del cual los actores turísticos pueden expresar sus propuestas y participar en la toma de decisiones en todos los niveles de gobierno. Este derecho es fundamental para influir en la gestión de recursos y acciones que afectan el desarrollo comunitario. Por medio de programas, el turismo busca informar a los grupos de interés sobre estos espacios de participación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos clave en la administración turística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Fases y etapas de la administración en concertación de acciones turísticas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de administración aplicada a destinos turísticos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'DesPlanificación estratégica en la administracióntinos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión en los destinos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características de la gobernanza turística',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Procedimiento de diseño de estrategias en la gestión de destinos turísticos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Participación y roles de los actores en la gestión de destinos',
            hash: 't_2_3',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Coordinación turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Componentes de la coordinación interinstitucional',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Mecanismos de relacionamiento',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistemas de trabajo en equipo y colaboración',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Características de la toma de decisiones en comités de trabajo',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Resolución de conflictos y gestión de crisis en la coordinación turística',
            hash: 't_3_5',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Liderazgo y responsabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estrategias de liderazgo en el sector turístico',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Delegación de funciones y responsabilidades',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Coordinación de alianzas público-privadas',
            hash: 't_4_3',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategias concertadas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Metodologías para la concertación de acciones en turismo',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Monitoreo y seguimiento a las acciones concertadas',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Participación y roles de los actores en la gestión de destinos',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Buenas prácticas turísticas y sostenibles [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XGe0YIH7a8I',
    },
    {
      tema:
        'Resolución de conflictos y gestión de crisis en la coordinación turística',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2022). Conflictos en la comunicación y sus soluciones [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A_qgEONAKhc',
    },
    {
      tema: 'Estrategias de liderazgo en el sector turístico',
      referencia:
        'Ecosistema de Recursos Educativos SENA. (2023). Competitividad y gestión turística [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Zm-oD02ki6g',
    },
  ],
  glosario: [
    {
      termino: 'Comité',
      significado:
        'Conjunto poco numeroso de personas elegidas o designadas para actuar en un asunto. Actúa en representación de una colectividad.',
    },
    {
      termino: 'Convenio',
      significado:
        'Acuerdos de voluntades suscritos entre dos o más partes, siendo estas personas jurídicas o naturales, a través de los cuales se obligan recíproca o conjuntamente sobre materias o cosas determinadas, a cuyo cumplimiento pueden ser compelidas.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Procedimiento a través del cual se toman las decisiones en un escenario determinado con el objetivo de conseguir una o varias metas.',
    },
    {
      termino: 'Gestión de crisis',
      significado:
        'Proceso por el cual una comunidad u organización hace frente a un evento inesperado que amenaza con dañar su estructura, sus partes interesadas o al público en general.',
    },
    {
      termino: 'Gobernabilidad',
      significado:
        'Capacidad del Estado para cumplir sus funciones mediante la acción de gestión del Gobierno de turno y de esta forma, también contempla la capacidad de la sociedad para responder a estas acciones, siendo gobernada.',
    },
    {
      termino: 'Gobernanza',
      significado:
        'Realización de relaciones entre diversos actores involucrados en el proceso de decidir, ejecutar y evaluar asuntos de interés público, proceso que puede ser caracterizado por la competencia y cooperación donde coexisten como reglas posibles.',
    },
  ],
  referencias: [
    {
      referencia:
        'ATCAL. (s.f.). Aprende a resolver conflictos laborales en 15 minutos sin que te cueste la paciencia.',
      link: 'https://www.implementandosgi.com/deio/conflictos-laborales/',
    },
    {
      referencia:
        'Comparasoftware.com. (2023). Que es un organigrama mixto y como ayuda a simplificar los puestos.',
      link: 'https://blog.comparasoftware.com/organigrama-mixto-que-es/',
    },
    {
      referencia:
        'De Rham, M. & Mancero, L. (2009). Monitoreo y evaluación de acciones de desarrollo orientadas al impacto. ASOCAM.',
      link:
        'https://www.shareweb.ch/site/EI/Documents/PSD/Topics/Results%20Measurement/Monitoreo%20y%20evaluaci%C3%B3n%20de%20acciones%20de%20desarrollo%20orientadas%20al%20impacto.pdf',
    },
    {
      referencia:
        'Equipo Editorial de Indeed. (2023). Qué es el trabajo en equipo y colaborativo.',
      link:
        'https://www.indeed.com/orientacion-profesional/desarrollo-profesional/trabajo-equipo-colaboracion',
    },
    {
      referencia:
        'Funcionpublica.gov.co. (s.f.). Manual de estructura del Estado colombiano.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/manual-estado/index.php',
    },
    {
      referencia:
        'Gomà R. (s.f.). La acción comunitaria: transformación social y construcción de ciudadanía.',
      link:
        'https://eduso.net/res/revista/7/marco-teorico/la-accion-comunitaria-transformacion-social-y-construccion-de-ciudadania',
    },
    {
      referencia:
        'Gómez P. (s.f.). Teorías de la administración y sus enfoques. Gestiopolis.com.',
      link: 'https://www.gestiopolis.com/teorias-de-la-administracion/',
    },
    {
      referencia:
        'Laoyan S. (2024). Toma de decisiones: definición, pasos, tipos y características.',
      link: 'https://asana.com/es/resources/decision-making-process',
    },
    {
      referencia:
        'López, C. (s.f.). Planeación administrativa – Qué es, principios, características, importancia, elementos, tipos y fallas. Gestiopolis.com.',
      link: 'https://www.gestiopolis.com/planeacion-administrativa/',
    },
    {
      referencia:
        'Ludeña, J. & López, J. (2021). Administración Mixta. Economipedia.',
      link:
        'https://economipedia.com/definiciones/administracion-mixta.html#:~:text=La%20administraci%C3%B3n%20mixta%20es%20aquella,sector%20p%C3%BAblico%20y%20sector%20privado',
    },
    {
      referencia:
        'Marchioni, M. & Morín Ramírez, L. (s.f.). La intervención comunitaria. SemFIC.',
      link: 'https://comunidad.semfyc.es/article/la-intervencion-comunitaria',
    },
    {
      referencia:
        'Martín, D. (2024). Organigrama de empresa: todo lo que necesitas saber. Openhr.cloud.',
      link: 'https://www.openhr.cloud/blog/organigrama-de-empresa',
    },
    {
      referencia: 'Pedroza, C. (s.f.). Roles de la administración.',
      link:
        'https://teoriasadmvas.fandom.com/es/wiki/ROLES_DE_LA_ADMINISTRACI%C3%92N_(CLAUDIA_PEDROZA_1_C)_',
    },
    {
      referencia:
        'Personio.es. (s.f.). Plan de trabajo: ¿qué es y cómo usarlo en favor de la empresa?',
      link:
        'https://www.personio.es/glosario/plan-de-trabajo/#qu-tipos-de-planes-de-trabajo-existen-en-la-empresa',
    },
    {
      referencia:
        'Prieto, E. (2023). Administración pública y privada: definición, diferencias, ventajas y desventajas.',
      link:
        'https://es.snhu.edu/blog/diferencias-entre-administracion-publica-y-privada#:~:text=%C2%BFQu%C3%A9%20es%20la%20administraci%C3%B3n%20privada,la%20gesti%C3%B3n%20del%20inter%C3%A9s%20privado',
    },
    {
      referencia:
        'Rodríguez-Toubes Muñiz, D. & Fraiz Brea, J. (2010). Gestión de crisis en el turismo: la cara emergente de la sostenibilidad. (pp. 51).',
      link: 'https://www.redalyc.org/pdf/3887/388777676005.pdf',
    },
    {
      referencia:
        'Santos, D. (2020). Planeación estratégica: transforma metas en resultados.',
      link:
        'https://blog.hubspot.es/marketing/guia-planificacion-estrategica#elementos',
    },
    {
      referencia:
        'Telcel.com. (s.f.). ¿Cuáles son las etapas de un proceso administrativo dentro de la empresa?',
      link:
        'https://www.telcel.com/empresas/tendencias/notas/etapas-del-proceso-administrativo#:~:text=Las%20etapas%2C%20que%20son%3A%20la,para%20llegar%20a%20la%20meta.&text=Todo%20proceso%20administrativo%20trata%20de,de%20forma%20continua%20y%20din%C3%A1mica',
    },
    {
      referencia: 'Unacademy. (s.f.). Coordinación.',
      link:
        'https://unacademy.com/content/cbse-class-11/study-material/business-studies/coordination/',
    },
    {
      referencia:
        'Universidad Nacional Autónoma de México-UNAM. (2016). Capítulo 2. Administración Pública. Biblioteca Jurídico virtual del instituto de investigaciones jurídicas de la UMAN.',
      link: '',
    },
    {
      referencia:
        'Zuloaga E. PAED/DESCO y el libro Hagamos un plan local de acción por la infancia, UNICEF. (s.f.). Plan de trabajo. Tomado de Plataforma del Estado Peruano.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dora Inés Sánchez Escobar',
          cargo: 'Experta temática',
          centro: 'Centro Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
