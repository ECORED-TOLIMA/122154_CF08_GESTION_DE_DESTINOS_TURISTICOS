<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-3(data-aos="fade-right") El reto del turismo a nivel global es lograr un equilibrio entre la conservación del medio ambiente y sus diversos ecosistemas, la equidad social en los diferentes pueblos y comunidades y el desarrollo económico de las regiones a partir del sector. Para ello, requiere de la intervención ciudadana en la toma de decisiones sobre el manejo de recursos y acciones que afectan a las comunidades, entendiendo la participación activa en los procesos de planificación turística como el mecanismo decisorio desde la administración local y las diferentes instancias del poder gubernamental. La relevancia de este tema radica en implementar mecanismos de coordinación turística como elemento de organización dentro del proceso administrativo, a través de estrategias de participación ciudadana, basada en acciones concertadas entre comunidad, empresa y gobierno. Esto facilita la gestión de los destinos turísticos, promueve la coordinación y toma de decisiones locales, reflejando liderazgo, responsabilidad y gobernanza.
    P Por lo anterior, se detalla el siguiente esquema temático de todo lo abordado en este componente formativo:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen decorativa")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
