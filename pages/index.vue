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
    <section class="about">
      <div class="information" data-aos="fade-right" data-aos-once="true">
        <img src="~assets/img/svg.svg" alt="nail nails">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!</p>
      </div>
      <div class="nailImage" data-aos="zoom-in-up" data-aos-once="true">
        <img src="~assets/img/1.jpeg" alt="nail nails">
      </div>
    </section>
    <section class="about">
      <div class="information informationRight" data-aos="fade-left" data-aos-once="true">
        <img src="~assets/img/svg.svg" alt="nail nails">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!</p>
      </div>
      <div class="nailImage" data-aos="zoom-in-up" data-aos-once="true">
        <img src="~assets/img/1.jpeg" alt="nail nails">
      </div>
    </section>
    <section class="about">
      <div class="information" data-aos="fade-right" data-aos-once="true">
        <img src="~assets/img/svg.svg" alt="nail nails">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam mollitia sint quod similique officia fuga suscipit beatae accusamus! Ducimus!</p>
      </div>
      <div class="nailImage" data-aos="zoom-in-up" data-aos-once="true">
        <img src="~assets/img/1.jpeg" alt="nail nails">
      </div>
    </section>
  </div>
</template>

<script>
import Hamburger from "@/components//Hamburger";

export default {
  components: { Hamburger },
  layout: "DesktopMenu"
};
</script>
<style lang="scss" scoped>
.about {
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .information {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    img {
      width: 10rem;
    }
    p {
      margin: 3rem 1rem 3rem 0;
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 1.5;
      color: #000;
    }
  }
  .information.informationRight {
    flex-direction: row-reverse;
    p {
      margin: 3rem 0 3rem 1rem;
      text-align: right;
    }
  }
  .nailImage {
    img {
      width: 100%;
      margin: 0 auto;
    }
  }
}
</style>
