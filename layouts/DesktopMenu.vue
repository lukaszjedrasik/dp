<template>
  <div>
    <ul @scroll="changeNavColor">
      <nuxt-link tag="li" to="/" :class="{menuRose : this.isSlide}">Strona Główna</nuxt-link>
      <nuxt-link tag="li" to="/blog" :class="{menuRose : this.isSlide}">Blog</nuxt-link>
      <nuxt-link tag="li" to="/galeria" :class="{menuRose : this.isSlide}">Galeria</nuxt-link>
      <nuxt-link tag="li" to="/kontakt" :class="{menuRose : this.isSlide}">Kontakt</nuxt-link>
    </ul>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSlide: false
    };
  },
  methods: {
    hamburger() {
      this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF");
    },
    changeNavColor() {
      if (window.scrollY >= 500) {
        this.isSlide = true;
      } else {
        this.isSlide = false;
      }
    }
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.changeNavColor);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.changeNavColor);
    }
  }
};
</script>

<style scoped lang='scss'>
ul {
  position: fixed;
  top: 0;
  display: flex;
  list-style-type: none;
  z-index: 9999;

  @media (max-width: 767px) {
    display: none;
  }
  li {
    margin: 2rem 4rem;
    font-family: "Over the Rainbow";
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
}
.menuRose {
  color: #ff4081;
}
</style>