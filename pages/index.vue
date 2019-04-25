<template>
  <div class="container">
    <div class="home-page">
      <img class="home-page-animoji" src="@/assets/img/Animoji.png" alt="animoji face">
      <h1 class="home-page-tittle">
        Dusiowe
        <span>Pazurki</span>
      </h1>
      <Hamburger/>
    </div>

    <div class="aboutContainer">
      <section class="about">
        <div class="information" data-aos="fade-right" data-aos-once="true">
          <img src="~assets/img/svg.svg" alt="nail nails">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!</p>
        </div>
        <img
          class="nailImage"
          src="~assets/img/2.jpg"
          alt="nail nails"
          data-aos="zoom-in-up"
          data-aos-once="true"
        >
      </section>
      <section class="about">
        <div class="information informationRight" data-aos="fade-left" data-aos-once="true">
          <img src="~assets/img/svg.svg" alt="nail nails">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!</p>
        </div>
        <img
          class="nailImage"
          src="~assets/img/3.jpg"
          alt="nail nails"
          data-aos="zoom-in-up"
          data-aos-once="true"
        >
      </section>
      <section class="about">
        <div class="information" data-aos="fade-right" data-aos-once="true">
          <img src="~assets/img/svg.svg" alt="nail nails">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!</p>
        </div>
        <img
          class="nailImage"
          src="~assets/img/4.jpg"
          alt="nail nails"
          data-aos="zoom-in-up"
          data-aos-once="true"
        >
      </section>
    </div>

    <footer>
      <div class="social">
        <a href="https://github.com/lukaszjedrasik" target="_blank">
          <img class="github" src="~assets/img/github.svg" alt="github">
        </a>
        <a href="https://www.linkedin.com/in/łukasz-jędrasik-42280914b" target="_blank">
          <img class="linkedin" src="~assets/img/linkedin.svg" alt="linkedin">
        </a>
      </div>
      <p class="signature">&copy; Łukasz Jędrasik 2019</p>
    </footer>
  </div>
</template>

<script>
import Hamburger from "@/components/UI/Hamburger";

export default {
  components: { Hamburger },
  layout: "DesktopMenu",
  transition: "slide",
  middleware: "autologin",
  head: {
    title: "Strona Główna. Nails. Dusiowe Pazurki"
  }
};
</script>

<style lang="scss" scoped>
</style>
