<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-4
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Administración
    
      .row.justify-content-center.align-items-centerr.mb-4
        .col-lg-12(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12(data-aos="fade-left")
          p A medida que los grupos sociales crecen y se inicia una dependencia desde el esfuerzo grupal, surge administración como la encargada de organizar y dirigir actividades individuales, que aportan a las acciones colectivas, alcanzando metas en tiempos programados y pactados. A la par, se presenta la necesidad de convivencia, labor de grupo y disciplina que demuestran productividad y eficiencia en el manejo de recursos para alcanzar un buen nivel de competitividad. 
    
      separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1	Conceptos clave en la administración turística
      
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-4.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')
        .col-lg-8.col-md-6.col-sm-8.mb-4(data-aos="fade-left")
          p El termino de administración está relacionado a la sociedad y su búsqueda por organizar eficientemente las empresas, organizaciones e incluso las comunidades, a través del esfuerzo humano sobre los recursos disponibles para alcanzar un objetivo. 
          p Se entiende a la administración como:
          .row.justify-content-center
            .col-lg-6.mb-4.col-md-6.col-sm-8.mb-4(data-aos="fade-left")
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/temas/tema1/img3.svg' alt='AvatarTop')
                .tarjeta.color-primario.tarjeta.color5.w-100
                  .text-black.p-4
                    h4.text-center Arzube & Bustos Goya (2017)
                    p.text-center El proceso de planear, organizar, dirigir y controlar el empleo de los recursos organizacionales para conseguir determinados objetivos con eficiencia y eficacia.
            .col-lg-6.mb-4(data-aos="fade-left")
              .tarjeta-avatar.h-100
                img(src='@/assets/curso/temas/tema1/img4.svg' alt='AvatarTop')
                .tarjeta.color-primario.tarjeta.color5.w-100
                  .text-black.p-4
                    h4.text-center Koontz & Heinz (2004) 
                    p.text-center El proceso de diseñar y mantener un entorno en el que, trabajando en grupos, los individuos cumplan eficientemente objetivos específicos.
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="fade-left")
          p A partir de estos conceptos, se puede expresar que la administración ha evolucionado a la par del ser humano y su necesidad de sobrevivir, requiriendo alcanzar metas con los recursos disponibles en el entorno, desarrollando destrezas y habilidades que le posibiliten definir su importancia, al proporcionar información relevante y oportuna que, al día de hoy, contribuyen en la gestión eficiente y toma de decisiones, para minimizar riesgos y proyectar oportunidades. 
          p De ahí, la relevancia de hacer el siguiente recorrido sobre su desarrollo en el tiempo, el cual se basa en lo expuesto por Broncano et al., (2022):
      .row.mb-4
        .col-lg-11
          LineaTiempoE.color-primario
            .row(titulo="Época primitiva" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Los miembros de las tribus trabajaban en actividades de caza, pesca y recolección. 
                  li
                    i.fas.fa-angle-right
                    | Los jefes de familia ejercían la autoridad para tomar las decisiones.
                  li
                    i.fas.fa-angle-right
                    | División primitiva del trabajo definida por sexos y edades.
                  li
                    i.fas.fa-angle-right
                    | Sociedad de esfuerzos - incipiente administración.

              .col-lg-6(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img5.png', alt='Texto que describa la imagen')
            .row(titulo="Período agrícola" subtitulo="")
              .col-lg-6.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img6.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    |  Aparece la vida agrícola y sedentaria.
                  li
                    i.fas.fa-angle-right
                    | Organización social patriarcal y economía agrícola de subsistencia.
                  li
                    i.fas.fa-angle-right
                    | Crecimiento demográfico obliga a la organización, coordinación y control de esfuerzos como grupo social - colectivo.
                  li
                    i.fas.fa-angle-right
                    | Nace el estado y el tributo.

                  
            .row(titulo="Antigüedad grecolatina" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Aparece el esclavismo.
                  li
                    i.fas.fa-angle-right
                    | Supervisión del trabajo y castigo corporal como forma de disciplina.
                  li
                    i.fas.fa-angle-right
                    | Bajo rendimiento productivo por descontento.

                  

              .col-lg-6(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img7.png', alt='Texto que describa la imagen')
            .row(titulo="Época feudal" subtitulo="")
              .col-lg-6.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img8.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Régimen de servidumbre.
                  li
                    i.fas.fa-angle-right
                    | El señor feudal ejerce el control sobre la producción del siervo.
                  
            .row(titulo="Crisis feudal" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Los siervos se convierten en trabajadores independientes dedicados a la artesanía y oficios.
                  li
                    i.fas.fa-angle-right
                    | Surge nueva estructura de autoridad. Aparece el aprendiz.
                  li
                    i.fas.fa-angle-right
                    | Se origina la economía familiar por el comercio a gran escala.
                  li
                    i.fas.fa-angle-right
                    | Aparecen gremios que regulan las jornadas, salarios y condiciones de trabajo.
                  

              .col-lg-6(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img9.png', alt='Texto que describa la imagen')
            .row(titulo="Revolución industrial" subtitulo="")
              .col-lg-6.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Aparecen diversos inventos y descubrimientos.
                  li
                    i.fas.fa-angle-right
                    | Cambios en la organización social.
                  li
                    i.fas.fa-angle-right
                    | Surge la especialización y la producción en serie.
                  li
                    i.fas.fa-angle-right
                    | Período caracterizado por la explotación inhumana en el trabajo.
                  
            .row(titulo="Administración en el Siglo XX" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0(data-aos="fade-left")
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Desarrollo técnico e industrial. 
                  li
                    i.fas.fa-angle-right
                    | Nace la administración científica y sus derivados.
                  li
                    i.fas.fa-angle-right
                    | La administración es indispensable en cualquier actividad organizada.
                  li
                    i.fas.fa-angle-right
                    | Imprescindible para cualquier organismo social.
                  

              .col-lg-6.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')
            .row(titulo="Administración en el Siglo XXI" subtitulo="")
              .col-lg-6.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')
              .col-lg-6.mb-4.mb-lg-0.col-md-6.col-sm-8.mb-4(data-aos="fade-left")
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | Busca mantener el liderazgo a pesar de las condiciones cambiantes, a través de la creatividad, el liderazgo y la innovación.
                  li
                    i.fas.fa-angle-right
                    | Se gestiona, administra y lideran las actividades de la organización, con el propósito de cumplir la misión, visión y objetivos empresariales.
                  li
                    i.fas.fa-angle-right
                    | Implementa técnicas y herramientas innovadoras que permiten una gestión eficaz de recursos.
      .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
        .col-lg-12
          p La evolución de la administración en el tiempo, por la búsqueda de organización y gestión de recursos, ha permitido que sea estudiada como ciencia por parte de varias personas y organizaciones, presentando planteamientos en pro de un mejor desempeño reflejado en teorías, como se pueden reflejar continuación:
      
      .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
        h5 Tabla 1.
        span  #[i Teorías de la administración]
      .row.mb-4
        .col-lg-12
          .tabla-b.color-acento-contenido.mb-4(data-aos="fade-left")
            table(alt="Tabla que relaciona las teorías de la administración, la cual explica en qué consiste casa una y asocia sus respectivos principios.")
              caption Nota. Ajustado de Gómez (s.f.). Quien cita a Bento (2007); Chiavenato (2000); Gordon (1996)
              thead.bghead
                tr
                  th Teorías de la administración
                  th Descripción
                  th Principios
              tbody
                tr
                  td  #[b Administración Científica de Frederick Taylor]
                  td 
                    p.text-left Se centra en analizar los flujos de trabajo para encontrar la mejor forma de realizar las tareas y maximizar la eficacia. 
                    p.text-left Para encontrar el mejor método el estudio científico se denomina "estudio de tiempo y movimiento".
                  td.text-left
                    p #[b De planeación:] sustituir en el trabajo el criterio individual del operario, la improvisación y la actuación empírico-práctica por los métodos basados en procedimientos científicos. Sustituir la improvisación por la ciencia, mediante la planeación del método. 
                    p #[b De la preparación:] seleccionar científicamente a los trabajadores de acuerdo con sus aptitudes y prepararlos, entrenarlos para producir más y mejor, de acuerdo con el método planeado. 
                    p #[b Del control:] controlar el trabajo para certificar que el mismo está siendo ejecutado de acuerdo con las normas establecidas y según el plan previsto. 
                    p #[b De la ejecución:] distribuir distintamente las atribuciones y las responsabilidades, para que la ejecución del trabajo sea disciplinada. (Bento, 2007) 
                tr
                  td
                    p  #[b Clásica de la Administración de Henry Fayol]
                  td.text-left
                    p Se centra en definir la estructura para garantizar la eficiencia en todas las partes involucradas, sean éstas órganos (secciones, departamentos) o personas (ocupantes de cargos y ejecutantes de tareas).
                    p Creó escenarios propicios para la eficiencia administrativa y, por ende, para la generación de utilidades para la empresa. Estos escenarios estuvieron respaldados por un instrumento de investigación y aplicación de la práctica administrativa llamado proceso administrativo (prever, organizar, dirigir, coordinar y controlar).

                  td.text-left
                    p #[b División del trabajo:] especialización de tareas y personas para aumentar la eficiencia.
                    p #[b Autoridad y responsabilidad:] 
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Autoridad: derecho para dar órdenes y esperar obediencia.
                      li
                        i.fas.fa-angle-right
                        | Responsabilidad: deber de rendir cuentas.
                    p #[b Disciplina:] 
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Jefes: energía y justicia en órdenes, sanciones, normas claras y justas.
                      li
                        i.fas.fa-angle-right
                        | Subordinados: obediencia y respeto por normas.
                    p #[b Unidad de mando:] cada empleado debe recibir órdenes de un solo jefe.
                    p #[b Unidad de dirección:] debe haber un jefe y un plan para cada grupo de actividades que tengan el mismo objetivo.
                    p #[b Subordinación de los intereses individuales a los generales:] los intereses generales deben estar por encima de los intereses particulares.
                    p #[b Remuneración del personal:] debe haber una satisfacción justa y garantizada para los empleados y para la organización.
                    p #[b Centralización:] concentración de la autoridad en la cúpula de la organización.
                    p #[b Cadena escalar:] línea de autoridad que va del escalón más alto al más bajo. Puede saltearse si es imprescindible y existe autorización.
                    p #[b Orden:] un lugar para cada cosa y cada cosa en su lugar. Orden material y humano.
                    p #[b Equidad:] amabilidad y justicia para conseguir lealtad del personal.
                    p #[b Estabilidad del personal:] debe haber una razonable permanencia de una persona en su cargo.
                    p #[b Iniciativa:] capacidad de visualizar un plan y asegurar su éxito.
                    p #[b Espíritu de equipo:] la armonía y la unión de personas es vital para la organización. (Chiavenato, 2000)
                tr
                  td
                    p  #[b Burocracia de Max Weber]
                  td.text-left
                    p Se concibe como una forma de organización social que usa la estructura jerárquica para clasificar a las personas en rangos o niveles. 
                    p Esto es un reflejo de como la sociedad se divide en clases a lo largo de la historia y de sus culturas.

                  td.text-left
                    p #[b Principio de la jerarquía funcional y de la tramitación:] es decir, un sistema firmemente organizado de mando y subordinación mutua de las autoridades mediante una inspección de los inferiores por los superiores, sistema que ofrece al dominado la posibilidad sólidamente regulada de apelar de una autoridad inferior a una instancia superior.
                    p #[b Tipos de dominación:]
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | La dominación tradicional.
                      li
                        i.fas.fa-angle-right
                        | La dominación carismática. 
                      li
                        i.fas.fa-angle-right
                        | La dominación legal.
                    p #[b Principio de la organización:] es la base de la administración moderna sustentada en documentos (expedientes) conservados en borradores o minutas.
                    p #[b Principio de la actividad burocrática:] en donde prima la especialización por parte de los trabajadores, además de una clara división del trabajo especificando por cada tarea a desarrollar.

                tr
                  td
                    p  #[b Relaciones Humanas de Elton Mayo]
                  td.text-left
                    p Se considera que las motivaciones de los trabajadores sólo son de índole económica y psicosocial, omitiendo las necesidades de aprendizaje y actualización de conocimientos y las relacionadas con la realización del trabajo mismo.
                  td.text-left
                    p Las relaciones humanas positivas se logran cuando dos o más personas tienen un contacto, comparten ideas, sentimientos, valores, trabajo, estudio; logrando altos niveles de solidaridad, empatía, aceptación, comprensión, y compromiso con ellos y la sociedad.
                    p Incluye la honestidad, el respeto, el aprecio, el servicio, dar ánimo, la constancia y la ayuda espiritual. También enfatiza que la verdadera amistad se demuestra en los momentos difíciles al apoyarse y acompañarse mutuamente.

                tr
                  td
                    p  #[b De los sistemas de Trist, Bamforth y Emery]
                  td.text-left
                    p La administración tiene que basarse en los sistemas. 
                    p El sistema es un conjunto de elementos interrelacionados entre sí que constituyen un “todo organizado”, donde el resultado es mayor que la suma de sus partes». (Collado, 1997)

                  td.text-left
                    p #[b Características:]
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Todo sistema está compuesto de varios subsistemas interrelacionados, interdependientes e interactuantes.
                      li
                        i.fas.fa-angle-right
                        | Todo sistema es abierto y dinámico.
                      li
                        i.fas.fa-angle-right
                        | Todo sistema transforma los insumos en productos.
                      li
                        i.fas.fa-angle-right
                        | Todo sistema pretende conservar el equilibrio.
                      li
                        i.fas.fa-angle-right
                        | Todo sistema tiene muchos propósitos, objetivos y funciones y algunos de ellos se contraponen.
                      li
                        i.fas.fa-angle-right
                        | Todo sistema pretende los mismos fines.
                      li
                        i.fas.fa-angle-right
                        | Si un sistema no se adapta a las circunstancias cambiantes, se atrofiará. 
                      p (Gordon, 1996)

                tr
                  td
                    p #[b Calidad Total de Edwards Deming]
                  td.text-left
                    p Es un enfoque de gestión organizativa que se centra en la producción de productos y servicios de calidad para satisfacer las necesidades de los clientes.
                  td.text-left
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Orientación hacia los resultados. 
                      li
                        i.fas.fa-angle-right
                        | Orientación al cliente. 
                      li
                        i.fas.fa-angle-right
                        | Liderazgo y coherencia en los objetivos. 
                      li
                        i.fas.fa-angle-right
                        | Gestión por procesos y hechos.
                tr
                  td
                    p  #[b Teoría X y Teoría Y de McGregor]
                  td.text-left
                    p La Teoría X plantea que las personas ven el trabajo como una necesidad, pero que sienten aversión hacia él, evitándolo siempre que sea posible.
                    p La Teoría Y plantea que las personas tienen potencial de desarrollarse, de asumir responsabilidades y de perseguir las metas de la organización si se les brindan la oportunidad y el ambiente social para hacerlo.

                  td.text-left
                    p Plantea que la administración participativa es la mejor manera de aprovechar el potencial humano proporcionando perspectiva de superación personal.
                tr
                  td
                    p #[b Teoría Z de William Ouchi y Richard Pascale]
                  td.text-left
                    p Considera que hay tres tipos de empresa, la del tipo A que asimiló a las empresas estadounidenses, las del tipo J que asimiló a las firmas japonesas y las de tipo Z que tiene una nueva cultura, la Z.
                  td.text-left
                    p A través de la participación y las relaciones humanas, se pretende entender al trabajador como un ser integral que no puede separar su vida laboral de su vida personal, por ello invoca ciertas condiciones especiales como la confianza, el trabajo en equipo, el empleo de por vida, las relaciones personales estrechas y la toma de decisiones colectiva, todas ellas aplicadas en orden de obtener un mayor rendimiento del recurso humano y así conseguir mayor productividad empresarial, se trata de crear una nueva filosofía empresarial humanista en la cual la compañía se encuentre comprometida con su gente.
                tr
                  td
                    p  #[b Teoría de las Necesidades Humanas de Abraham Maslow]
                  td.text-left
                    p Señala que las necesidades humanas se estructuran en una jerarquía, donde la parte superior de esta incluye necesidades de ego y autorrealización y las necesidades inferiores tienen que ver con la supervivencia, por lo cual tienen que ser satisfechas antes de que se examinen las de nivel superior.
                  td.text-left
                    p Aporta beneficios en:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | #[b Mejora del ambiente laboral:] satisfacer las necesidades básicas y psicológicas de los empleados crea un entorno de trabajo más saludable y agradable, reduciendo el estrés y aumentando la satisfacción laboral. 
                      li
                        i.fas.fa-angle-right
                        | #[b Incremento de la productividad:] los empleados motivados tienden a ser más productivos. Satisfacer tus necesidades básicas de seguridad asegura que puedan centrarse en sus tareas sin preocupaciones externas, mejorando su rendimiento. 
                      li
                        i.fas.fa-angle-right
                        | #[b Retención del talento:] la satisfacción de las necesidades sociales y de reconocimiento es clave para la retención del talento. Los empleados que se sienten valorados y apreciados son menos propensos a buscar nuevas oportunidades laborales. 
                      li
                        i.fas.fa-angle-right
                        | #[b Desarrollo personal y profesional:] fomentar la autorrealización permite a los empleados desarrollar todo su potencial. Esto no solo beneficia a los individuos, sino que también aporta un valor añadido a la empresa mediante la innovación y la mejora continua. 
                      li
                        i.fas.fa-angle-right
                        | #[b Toma de decisiones estratégicas:] comprender las necesidades de los empleados facilita la toma de decisiones informadas y estratégicas en la gestión de recursos humanos, contribuyendo a una cultura organizacional positiva y eficiente.  

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          p Cabe resaltar que, la administración posee estas características que le definen su naturaleza: 
      .tarjeta.tarjeta--BG01.p-4.mb-4
        SlyderA(tipo="b" data-aos="zoom-in")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              h4  Universalidad
              p.mb-0 Se presenta la administración como fenómeno administrativo que existe en un organismo social, por lo tanto, los componentes esenciales están presentes en todas las clases de administración bien sean empresas públicas, privadas, mixtas o individuales; es decir, serán los mismos.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema1/img13.png' alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              h4  Especificidad
              p.mb-0 Se define la administración como el fenómeno administrativo especifico y distinto de otros manejos o funciones que lo acompañan. Por lo cual, su calificación no es inherente a las deficiencias de otros.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema1/img14.png' alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              h4  Unidad temporal
              p.mb-0 La administración posee elementos y fases, pero como fenómeno administrativo es único en el ciclo de vida de una entidad, empresa o individuo y depende de cómo se aplique en el ejercicio.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema1/img15.png' alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-4.order-lg-1.order-2
              h4  Unidad jerárquica
              p.mb-0 Las empresas se organizan por niveles que representan la autoridad, comunicación y toma de decisiones por lo cual se interactúa como organismo social.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              img(src='@/assets/curso/temas/tema1/img16.png' alt="Imagen decorativa")          
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          p Para dar cumplimiento de logros, se hace necesario la claridad de las acciones universales que permiten coordinar el conjunto de actividades que se presentan en los grupos, colectivos o empresas que impactan en las diferentes posiciones de los miembros, denominados puestos o cargo o en su defecto, involucrado directo de la acción. Es aquí, en donde se habla de las funciones de la administración para la puesta en marcha de estrategias de acción: 
      SlyderF.mb-4(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG02.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/img17.svg' alt='AvatarTop')
          h5.text-center Función de planificar
          p.text-center Se necesita de un plan de acción en donde participe toda la estructura, permitiendo administrar área de producción, personal y recursos.
        .tarjeta.tarjeta--BG02.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/img18.svg' alt='AvatarTop')
          h5.text-center Función de organizar
          p.text-center Ordenar tareas según áreas y estructura de trabajo permite optimizar recursos y aprovechar el tiempo, mejora el flujo de trabajo y la toma de decisiones.
        .tarjeta.tarjeta--BG02.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/img19.svg' alt='AvatarTop')
          h5.text-center Función de dirigir
          p.text-center Dar las instrucciones claras y concretas a la fuerza de trabajo por medio de un canal asertivo de comunicación posibilita un buen desempeño laboral.
        .tarjeta.tarjeta--BG02.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/img20.svg' alt='AvatarTop')
          h5.text-center Función de coordinar
          p.text-center Consiste en armonizar todas las actividades y los esfuerzos de cada miembro del colectivo. Se emplea la comunicación y el liderazgo.
        .tarjeta.tarjeta--BG02.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/tema1/img21.svg' alt='AvatarTop')
          h5.text-center Función de controlar
          p.text-center Es asegurar que las tareas se llevan a cabo y conforme a lo planificado.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="fade-left")
          p Con base en las funciones, se determinan los roles de la administración en general, considerado como aspectos clave, un conjunto de habilidades y capacidades, junto con un ámbito de control; tal como se puede apreciar a continuación:

      .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
        h5 Figura 1.
        span  #[i Roles de la administración  ]
    
      .row.justify-content-center.mb-4
        .col-md-10.desktop(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img22.svg', alt='Figura 1 que relaciona la división de los roles que están presentes en la administración, los cuales son de tipo interpersonales, de toma de decisión e informativos y cada uno tiene el rol presente en estos tipos.')
            figcaption Nota. Adaptado de Pedroza (s.f.).
        .col-md-6.movil(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img22_1.svg', alt='Figura 1 que relaciona la división de los roles que están presentes en la administración, los cuales son de tipo interpersonales, de toma de decisión e informativos y cada uno tiene el rol presente en estos tipos.')
            figcaption Nota. Adaptado de Pedroza (s.f.).

      separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.2	Fases y etapas de la administración en concertación de acciones turísticas
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-3.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img23.svg', alt='Imagen decorativa')

        .col-lg-9(data-aos="fade-left")
          p La administración para dar cumplimiento con los objetivos planteados, requiere aplicar de forma secuencial, una serie de pasos hasta llegar al logro de metas de manera eficiente y que a su vez conforman un entendimiento integral entre ellas. Estos pasos se reconocen como proceso administrativo y se trata de una relación entre las fases que fluyen de forma continua y dinámica. Es de tener en cuenta, la fase mecánica describe el funcionamiento del proceso y la fase dinámica describe el hecho mismo de manejar u operar. También, el proceso administrativo posee unas etapas que reflejan la secuencia de la acción, estas son planificación, organización, implementación o dirección y control.
          p A continuación, se detalla información sobre las fases y las etapas:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10.movil(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img24_1.svg', alt='Texto que describa la imagen')
            figcaption Ajustado de telcel.com (s.f.)
        .col-lg-10.desktop(data-aos="zoom-in")
          ImagenInfografica.color-acento-botones.mb-4
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img24.svg', alt='Texto que describa la imagen')
                figcaption Ajustado de telcel.com (s.f.)
            .tarjeta.color-primario.tarjeta--BG03.p-3(x="20%" y="29%" numero="+")
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Los planes presentan los objetivos y los procedimientos para alcanzarlos.
                li
                  i.fas.fa-angle-right
                  | Son la guía para obtener y comprometer recursos para alcanzar los objetivos.

            .tarjeta.color-primario.tarjeta--BG03.p-3(x="75%" y="29%" numero="+")
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Proceso para comprometer a dos o más personas para trabajar juntas de manera estructurada con el propósito de alcanzar una meta o una serie de metas específicas.
            .tarjeta.color-primario.tarjeta--BG03.p-3(x="20%" y="50%" numero="+")
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Medición de los resultados obtenidos para detectar desviaciones y establecer procesos de mejora.
            .tarjeta.color-primario.tarjeta--BG03.p-3(x="75%" y="50%" numero="+")
              ul.lista-ul
                li
                  i.fas.fa-angle-right
                  | Proceso donde se dirige las actividades asignadas a los miembros del colectivo.
                li
                  i.fas.fa-angle-right
                  | Dirigir implica mandar, influir y motivar a los empleados para que realicen tareas esenciales.
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="fade-left")
          p El sector del turismo requiere para el manejo de las actividades turísticas en un territorio, la aplicación de la administración para el logro de los objetivos proyectados dentro del desarrollo turístico. El éxito depende de la capacidad de coordinar eficientemente el funcionamiento de los involucrados en la cadena de valor, con los cuales se fluye estratégicamente, hasta fortalecer una oferta turística de calidad para los turistas. La gestión de esas actividades requiere por parte de la administración una coherencia secuencial de organización, dada desde el proceso administrativo, con el objetivo de planificar los destinos turísticos hasta alcanzar ser parte de la oferta turística deseada.
          p Por lo anterior y lo relacionado con las etapas administrativas, es preciso relacionar lo siguiente:
      
      .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
        h5 Tabla 2.
        span  #[i Etapas del proceso administrativo]
      .row.mb-4
        .col-lg-12
          .tabla-b.color-acento-contenido.mb-4
            table(alt="Tabla que contiene la descripción de la concertación de acciones turísticas de cada una de las 4 etapas que hacen parte del proceso administrativo.")
              caption Nota. Ajustado de Arumir (2016). 
              thead.bghead
                tr
                  th Etapas del proceso administrativo
                  th Concertación de acciones turísticas
              tbody
                tr
                  td
                    p  #[b Planificación]
                  td.text-left
                    p Se establecen los siguientes elementos de preparación:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | #[b Misión:] describe la actividad o función básica a desarrollar y cuál es la razón de su existencia.
                      li
                        i.fas.fa-angle-right
                        | #[b Visión:] describe el estado futuro posible y deseable acorde a la misión.
                      li
                        i.fas.fa-angle-right
                        | #[b Propósitos:] orienta el comportamiento ético que deben seguir los actores turísticos involucrados.
                      li
                        i.fas.fa-angle-right
                        | #[b Objetivos:] resultados que se desea obtener, fines por alcanzar establecidos cuantitativamente.
                      li
                        i.fas.fa-angle-right
                        | #[b Estrategias:] acción general o alternativas que señalan la dirección por seguir, así como el empleo general de los recursos.
                      li
                        i.fas.fa-angle-right
                        | #[b Políticas:] disposiciones que guían, orientan y regulan el comportamiento de los actores turísticos en la toma de decisiones de las actividades que se repiten una y otra vez.
                      li
                        i.fas.fa-angle-right
                        | #[b Reglas:] disposiciones que deben ser cumplidas y determinan lineamientos a cumplir por parte de los actores turísticos.
                      li
                        i.fas.fa-angle-right
                        | #[b Esquemas (gráficas de Gantt):] se establece la secuencia de actividades específicas que habrán de realizarse para alcanzar los objetivos, y el tiempo requerido para efectuar cada una.
                      li
                        i.fas.fa-angle-right
                        | #[b Presupuesto:] presenta los recursos a emplear en términos monetarios.

                tr
                  td
                    p  #[b Organización]
                  td.text-left
                    p Se establecen los siguientes elementos que contribuyen a la asignación de roles de los actores turísticos:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | #[b Organigramas:] representaciones gráficas de la estructura formal de participación y organización de los actores turísticos.
                      li
                        i.fas.fa-angle-right
                        | #[b Manuales:] documentos detallados que contienen en forma ordenada y sistemática información sobre las acciones a realizar.
                      li
                        i.fas.fa-angle-right
                        | #[b Procedimientos:] establecen el orden cronológico y la secuencia ordenada de actividades a realizar.
                      li
                        i.fas.fa-angle-right
                        | #[b Diagramas de flujo:] representación gráfica de un procedimiento.
                      li
                        i.fas.fa-angle-right
                        | #[b Formas:] documentos que contienen información formal de lo que acontece en la organización de los actores.
                      li
                        i.fas.fa-angle-right
                        | #[b Análisis de involucrados:] plantilla que sirve para obtener información sobre los involucrados, sus intereses y forma de contribución.
                      li
                        i.fas.fa-angle-right
                        | #[b Descripción del rol:] técnica en la que se reclasifican las labores que se desempeñan en una actividad.
                tr
                  td
                    p  #[b Dirección]
                  td.text-left
                    p Se establecen las directrices de operación de las acciones concertadas, mediante la conducción y supervisión de los esfuerzos de los involucrados:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | #[b Toma de decisiones:] seleccionar alternativas.
                      li
                        i.fas.fa-angle-right
                        | #[b Integración:] se elige y allega los recursos necesarios para poner en marcha las decisiones.
                      li
                        i.fas.fa-angle-right
                        | #[b Motivación:] es la labor más importante en la etapa de dirección, pues a través de ella se logra la ejecución del trabajo. 
                      li
                        i.fas.fa-angle-right
                        | #[b Comunicación:] se trasmite y recibe información del grupo social.
                      li
                        i.fas.fa-angle-right
                        | #[b Liderazgo-supervisión:] consiste en vigilar y guiar a los otros involucrados de tal forma que las actividades se realicen adecuadamente.
                tr
                  td
                    p  #[b Control]
                  td.text-left
                    p Se establece medición de resultados:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | #[b Identificación del estándar:] identificar y comprender el estándar que fue establecido y que servirá de modelo de comparación para evaluar los resultados.
                      li
                        i.fas.fa-angle-right
                        | #[b Medición de resultados:] aplicación de unidades de medida o indicadores apropiados.
                      li
                        i.fas.fa-angle-right
                        | #[b Comparación:] una vez efectuada la medición, se compara los resultados medidos en relación con los estándares preestablecidos.
                      li
                        i.fas.fa-angle-right
                        | #[b Detección de desviaciones:] el resultado de la comparación da la determinación de las desviaciones entre el desempeño real y el estándar.
                      li
                        i.fas.fa-angle-right
                        | #[b Corrección:] la acción correctiva sirve para integrar las desviaciones en relación con los estándares.
                      li
                        i.fas.fa-angle-right
                        | #[b Retroalimentación:] la información obtenida debe ajustarse de forma grupal con los actores turísticos para establecer la línea de mejoramiento. 

      separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.3	Tipos de administración aplicada a destinos turísticos

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="fade-left")
          p La administración se clasifica para ordenar sus elementos con base en criterios comunes que se poseen entre ellos. Este ejercicio establece semejanzas y diferencias que facilitan la ubicación por rasgos específicos, definiéndolos por grupos.
          p Dentro de los elementos de la administración se encuentran similitudes entre el sector público y privado, pero varían los estilos administrativos al interior de su funcionamiento. A continuación, una relación al respecto:

      .titulo-sexto.color-acento-contenido.offset-0(data-aos="zoom-in")
        h5 Tabla 3.
        span  #[i Aspectos de la tipología de administración relacionada con destinos turísticos]
      .row.mb-4
        .col-lg-12
          .tabla-b.color-acento-contenido.mb-4
            table(alt="Tabla que relaciona la tipología de administración, la cual está basada en los aspectos que hacen parte de la administración pública, privada y mixta.")
              caption Nota. 
                | Ajustado de Universidad Nacional Autónoma de México-UNAM (2016); Prieto (2023); Ludeña & López (2021). 
              thead.bghead
                tr
                  th
                  th  Administración pública
                  th  Administración privada
                  th  Administración mixta
              tbody
                tr
                  td
                    p #[b Concepto]
                  td.text-left
                    p Es parte del poder ejecutivo y se ve regulada por el derecho administrativo, tanto en su organización, su estructura y en la actividad que desarrolla.
                    p Es el reflejo de la institucionalidad del estado en donde se aplican y vigilan políticas y programas formulados por el gobierno.	
                  td.text-left
                    p Es la gestión que llevada a cabo una empresa que no está relacionada con el gobierno.
                    p Su principal objetivo es dirigir eficientemente los recursos disponibles para cumplir con los objetivos establecidos por la organización.	
                  td.text-left
                    p Es aquella que se encarga de la gestión de capital tanto público como privado.
                    p Se presenta cuando las organizaciones privadas reciben apoyo y hacen parte del funcionamiento las instituciones del Estado.
                tr
                  td
                    p #[b Características]
                  td.text-left
                    p Se desempeñan funciones gubernamentales que ayudan a los ciudadanos, mantienen la infraestructura y promueven los intereses generales del público.
                    p Tiene un fin social porque pertenece al Estado.
                    p Gestiona y administra los organismos del Estado para brindar servicios que satisfagan las necesidades de la población y de la nación.
                    p Su función es garantizar el bienestar común de las personas y hacer respetar la ley del país.

                  td.text-left
                    p Se desempeñan funciones del sector privado con el objetivo de producir beneficios y valor para los accionistas o propietarios.
                    p Tiene un fin económico o social. porque pertenece a los particulares. 
                    p Implica la toma de decisiones estratégicas relacionadas con la productividad, comercialización, gestión financiera y desarrollo de recursos humanos, siempre con el objetivo de aumentar la eficiencia, competitividad y rentabilidad de la organización.

                  td.text-left
                    p Al ser una administración de carácter híbrido puede distribuir la responsabilidad entre entidades del Estado y particulares. Cumple con funciones o actividades de competencia económica.
                tr
                  td
                    p #[b Organización territorial]
                  td.text-left
                    p Se caracteriza por operar y extender sus competencias a un territorio concreto. 
                    p Las principales administraciones territoriales están mencionadas en la constitución y son la administración del Estado, la de cada una de las comunidades autónomas, las provinciales y municipales.
                  td.text-left
                    p Se caracteriza por operar en el ámbito del comercio, abarcando una variedad de negocios, desde pequeñas, medianas hasta grandes empresas en diversos territorios.
                  td.text-left
                    p Se caracteriza por operar en territorios específicos que trascienden fronteras por la intervención del estado según el tamaño y ámbito en el cual se proyecta.
                    p Dependiendo del proyecto se puede extender de territorios locales hasta internacionales.
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="fade-left")
          p Complementando la información anterior, a continuación, se relaciona la ejemplificación de cada una de las administraciones ya explicadas: 
      
      .tarjeta.tarjeta--gris.tarjeta--BG04.p-4.mb-4(data-aos="zoom-in")
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-md-12.mb-4.mb-md-0
              h5  Administración pública
              figure
                img(src='@/assets/curso/temas/tema1/img25.svg', alt='Figura que contiene un esquema que relaciona a través de un ejemplo jerárquico la administración pública.')
                figcaption Tomado de Funcionpublica.gov.co (s.f.).
          .row(titulo="")
            .col-md-12.mb-4.mb-md-0
              h5  Administración privada
              figure
                img(src='@/assets/curso/temas/tema1/img26.svg', alt='Figura que ejemplifica por medio de un esquema jerárquico la administración privada.')
                figcaption Tomado de Martín (2025).
          .row(titulo="")
            .col-md-12.mb-4.mb-md-0
              h5  Administración mixta
              figure
                img(src='@/assets/curso/temas/tema1/img27.svg', alt='Figura que ejemplifica por medio de un esquema jerárquico de una empresa de servicios públicos, lo que representa a la administración mixta.')
                figcaption Tomado de Comparasoftware.com (2023).
      separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.4	Planificación estratégica en la administración
    
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img28.png', alt='Texto que describa la imagen')
        .col-lg-7(data-aos="fade-left")
          p El desarrollo de los destinos turísticos, requiere como se había mencionado previamente, de la administración y de su conjunto de herramientas y mecanismos que hacen posible que fluyan de forma dinámica y sostenible. Como parte de la aplicación del proceso administrativo y teniendo en cuenta la tipología de la administración, se hace necesario emplear la planeación, para establecer estrategias que forjen el camino hacia el logro de objetivos preestablecidos.
          .cajon.color-secundario.p-4.mb-4
            p Entendiendo que la planeación es trazar el curso de una acción a seguir y que este, requiere de la claridad en los pasos operacionales secuenciales, definidos con tiempos determinados, bajo parámetros y lineamientos establecidos, y con unos recursos específicos para ello. Es decir, preparar un conjunto de decisiones enfocadas al logro de objetivos que se plasman en un plan con características ajustables entre el medio y el fin. 
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="fade-left")
          p Ante esto, se deben considerar los siguientes tipos de planeación que contribuyen a establecer de donde surgen las estrategias y la ejecución de acciones para alcanzarlas: 
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7(data-aos="fade-left")
          LineaTiempoD.color-acento-botones
            p.text-normal(numero="1" titulo="Estratégica") Es realizada por los directivos de una organización y se lleva a largo plazo. Nace del análisis de factores externos e internos y como estos afectan los objetivos proyectados.
            p.text-normal(numero="2" titulo="Táctica o funcional") Se diseñan para ejecutar el plan estratégico desde las áreas funcionales de la organización. Se lleva al corto plazo para medir con prontitud los resultados.
            p.text-normal(numero="3" titulo="Operativa") Se organizan los recursos a emplear para dar cumplimiento a los lineamientos tácticos. Se ejecuta a través de proyectos por áreas con plazos y tiempos.
            p.text-normal(numero="4" titulo="Interactiva") Consisten en diseñar soluciones a contingencias que pueden surgir, se proyectan recursos necesarios para cumplir las futuras acciones.
            p.text-normal(numero="5" titulo="Normativa") Conjunto de reglas que regulan el funcionamiento de las acciones de un proyecto u organización y que son importantes porque facilitan el desempeño, compromisos y responsabilidades.
        .col-lg-3.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img29.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .cajon.color-primario.p-4
            .row.justify-content-center.align-items-center
              .col-lg-2.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img30.svg', alt='Texto que describa la imagen')
              .col-lg-10(data-aos="fade-left")
                p Para el diseño de los planes sólidos y equilibrados se requiere aprovechar los principios de la planeación administrativa como guía que lleve al logro de objetivos trazados.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p Es importante tener presente dentro de la planeación, los elementos, los principios y las características, los cuales se representan a continuación, en su estructuración:
      .tarjeta.tarjeta--gris.tarjeta--BG04.p-4.mb-4(data-aos="zoom-in")
        PasosB.color-acento-contenido
          .row(titulo="")
            .col-md-12.mb-4.mb-md-0
              h5  Elementos de la planeación
              figure
                img(src='@/assets/curso/temas/tema1/img31.svg', alt='Esquema que contiene los elementos que hacen parte de la planeación.')
                figcaption Nota. Ajustado de Santos (2020).
          .row(titulo="")
            .col-md-12.mb-4.mb-md-0
              h5  Principios de la planeación
              figure
                img(src='@/assets/curso/temas/tema1/img32.svg', alt='Esquema que contiene los principios que hacen parte de la planeación.')
                figcaption Nota. Ajustado de López (s.f.). 
          .row(titulo="")
            .col-md-12.mb-4.mb-md-0
              h5  Características de la planeación
              figure
                img(src='@/assets/curso/temas/tema1/img33.svg', alt='Esquema que contiene las características que hacen parte de la planeación.')
                figcaption Nota. Ajustado de López C. (s.f.).
    
      .tarjeta.tarjeta--BG05.p-4.mb-4
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-11(data-aos="fade-left")
            p Empleando los elementos, características y principios de la administración de manera articulada, se define la planeación estratégica, como el proceso manejado por las personas u organización en la toma de decisiones, después de evaluar una situación a la cual está expuesto el grupo de personas, empresa, entidad o para este caso, un destino turístico. Con ella, se anticipa el direccionamiento de las acciones de forma estratégica. 
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-6(data-aos="fade-left")
            p Es aquí en donde se presenta la relación entre lo planeado y lo ejecutado, surgiendo dentro del proceso, el diseño de un plan para el logro de los objetivos estratégicos propuestos y que son alcanzados a lo largo de la ejecución de las acciones proyectadas, a través de unos pasos:
            .cajon.color-primario.p-3.mb-4
              .row.justify-content-center.align-items-center
                .col-lg-1
                .col-lg-10
                  ul.lista-ul
                    li
                      i.fas.fa-angle-right
                      | Recopilar información.
                    li
                      i.fas.fa-angle-right
                      | Desarrollar la estrategia.
                    li
                      i.fas.fa-angle-right
                      | Gestionar el desempeño una vez que el plan está en marcha.
            p El instrumento de planeación, es denominado plan de trabajo y requiere de la concertación de los actores turísticos involucrados para que obtenga un carácter dinámico y se adecue al contexto social, espacial y temporal. Con base en ello, se plantean estrategias que propenden por la solución a problemáticas territoriales y sobre la cual, se ejercen actividades de mejora o transformación. 
            p Al respecto, estos son los tipos de planes de trabajo:
          .col-lg-3(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/temas/tema1/img34.png', alt='Texto que describa la imagen')

      .row.justify-content-center.mb-4
        .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img35.png", alt="alt")
            .crd_hover_txt--body
              .tit-tarj.p-3
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                .ubicar
                  h4.mb-3.text-white De empresa
              p.mt-3 Se expresa en el esquema los involucrados por roles, áreas o departamentos con responsabilidades, objetivos, estrategias y tiempos.

        .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img36.png", alt="alt")
            .crd_hover_txt--body
              .tit-tarj.p-3
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                .ubicar
                  h4.mb-3.text-white De ventas
              p.mt-3 Se direcciona a los actores con funciones relacionadas a las ventas en donde se detalla la estrategia del crecimiento y los recursos para alcanzarlas.

        .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img37.png", alt="alt")
            .crd_hover_txt--body
              .tit-tarj.p-3
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                .ubicar
                  h4.mb-3.text-white De proyecto
              p.mt-3 Determina los objetivos y acciones a realizar de forma secuencial en la ejecución de un proyecto. Facilita la ejecución y control por fases.

        .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left")
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/temas/tema1/img38.png", alt="alt")
            .crd_hover_txt--body
              .tit-tarj.p-3
                .acordion__accion.acordion__accion__btn--b.h3.mb-0
                  i.fas.fa-angle-up
                .ubicar
                  h4.mb-3.text-white De personal
              p.mt-3 Establece parámetros de trabajo por rol frente a los objetivos fijados para el logro de las metas en tiempo. Se emplea para el seguimiento evaluaciones de desempeño que sigue la métrica de cumplimiento y rendimiento productivo.

      .tarjeta.tarjeta--BG05.p-4.mb-3
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-9
            p Componentes de un plan de trabajo:
            ol.lista-ol--cuadro.lista-ol--separador
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 1
                | Objetivos: Es la intención de lograr o alcanzar.
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 2
                | Meta: Resultado general a largo plazo que se desea lograr.
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 3
                | Estrategias: Organización secuencial de una acción.
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 4
                | Actividades: Acciones programadas para llevarse a cabo en tiempo y sirven para alcanzar los objetivos.
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 5
                | Recursos: Son los canales y herramientas para ejecutar las actividades.
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 6
                | Tiempo: Periodos para desarrollar las actividades.
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 7
                | Responsables: Personas o entidades que asumen con responsabilidad las actividades asignadas.
              li 
                .lista-ol--cuadro__vineta
                  span.text-black 8
                | Métricas: indicadores que miden el progreso, productividad y eficiencia de las acciones en tiempo y ejecución de recursos.
    
      .tarjeta.color-secundario.tarjeta.color2.p-3.mb-4(data-aos="fade-right") 
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema1/img39.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-sm-0.mb-4
                h3.mb-1 Anexo - Ejemplo plan de trabajo
                p.text-small.mb-0 Partiendo de lo anterior, se invita a que acceda al siguiente ejemplo de un plan de trabajo, con parte de los componentes y las instrucciones de diligenciamiento:
              .col-sm-auto
                a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('/downloads/Anexo_Ejemplo_Plan_trabajo.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          p De igual manera, se relacionan los pasos para construir un plan de trabajo:

      .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
        h5 Figura 2.
        span  #[i Pasos para elaborar un plan de trabajo ]
    
      .row.justify-content-center.mb-4
        .col-md-10.desktop(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img40.svg', alt='Figura 2 que relaciona cuáles son los pasos que se deben seguir, si se desea llevar a cabo un plan de trabajo.')
            figcaption Nota. Personio.es (s.f.).
        .col-md-6.movil(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img40_1.svg', alt='Figura 2 que relaciona cuáles son los pasos que se deben seguir, si se desea llevar a cabo un plan de trabajo.')
            figcaption Nota. Personio.es (s.f.).
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12(data-aos="fade-left")
          p Uno de los componentes del plan de trabajo, que es transversal a la ejecución del mismo, es el tiempo. Este requiere del apoyo gráfico en donde se reflejan las actividades de forma secuencial, con la finalidad de identificar y comprobar las acciones a realizar. El esquema es denominado cronograma de actividades y es una herramienta que apoya el plan de trabajo como ruta de acciones o tareas a realizar. 
          p Al respecto, a continuación, se describen los tipos de cronograma de actividades que pueden utilizarse:


      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row(titulo="")
              .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
                h4 Diagrama de Gantt
                p Se representa como gráfico de barras horizontal, en donde cada una es una actividad o tarea y su duración depende de la longitud de la barra.
              .col-md-6(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img41.png', alt='Figura decorativa')
            .row(titulo="")
              .col-md-6.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img42.png', alt='Figura decorativa')
              .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
                h4 Diagrama de Pert
                p Contribuye en la visualización de las tareas de forma independiente y sirve para determinar la ruta crítica, estimar recursos y tiempo.
            .row(titulo="")
              .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
                h4 Cronograma de Hitos
                p Se representa como gráfico horizontal en donde muestra las etapas del proyecto y en donde cada hito es un control al momento de finalizar cada etapa.
              .col-md-6(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img43.png', alt='Figura decorativa')
            .row(titulo="")
              .col-md-6.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/tema1/img44.png', alt='Figura decorativa')
              .col-md-6.mb-4.mb-md-0(data-aos="fade-left")
                h4 Cronograma de actividades de trabajo
                p Es el tipo de programa que emplea herramienta digital para organizar el tiempo, es decir que contribuye a identificar la disponibilidad de tiempo de cada actor o involucrado en el proyecto.



  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
