<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/img_1.png', alt='Texto que describa la imagen')
      .col-lg-9(data-aos="fade-left")
        p Uno de los retos globales en el mundo en temas de desarrollo turístico, es satisfacer las necesidades de las generaciones presentes, sin comprometer las necesidades de las futuras, requiriendo de la intervención de los ciudadanos en la toma de decisiones, respecto al manejo de recursos y acciones que impacten el diario vivir de las comunidades. De ahí, se comprende la participación como una actividad ciudadana que hace parte decisoria en la administración local en asuntos comunes y en los centros de poder, gestionados desde la acción gubernamental.
        .cajon.color-primario.p-4.mb-4
          p La importancia de esta temática radica, en aplicar mecanismos de coordinación a través de estrategias de participación ciudadana, con base en acciones previamente concertadas entre comunidad-empresa-gobierno, que faciliten la gestión de los destinos turísticos definidas en un espacio que posibilite aportar en la coordinación y toma de decisiones locales, como expresión de liderazgo, responsabilidad y gobernanza.
        p Partiendo de lo anterior, es importante que se acceda al siguiente video, el cual explica la temática a tratar durante este componente formativo:
    .row.justify-content-center.align-items-center           
      .col-lg-12(data-aos="zoom-in")
        figure
          .video
            iframe(width="912" height="513" src="https://www.youtube.com/embed/lIf2BFDWxQY" title="Administración de acciones y participación comunitaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
