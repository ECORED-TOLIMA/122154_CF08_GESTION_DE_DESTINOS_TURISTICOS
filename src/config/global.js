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
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
