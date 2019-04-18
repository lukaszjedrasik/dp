<template>
  <div>
    <ul @scroll="changeNavColor" :class="{bgMenuColor : this.bgMenu}">
      <nuxt-link tag="li" to="/">Strona Główna</nuxt-link>
      <nuxt-link tag="li" to="/blog">Blog</nuxt-link>
      <nuxt-link tag="li" to="/galeria">Galeria</nuxt-link>
      <nuxt-link tag="li" to="/kontakt">Kontakt</nuxt-link>
      <nuxt-link tag="li" to="/admin" v-if="this.$store.state.auth.isLoggin">Admin</nuxt-link>
    </ul>
    <nuxt/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgMenu: false
    };
  },
  methods: {
    changeNavColor() {
      if (window.scrollY >= 400) {
        this.bgMenu = true;
      } else {
        this.bgMenu = false;
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
  width: 100%;
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  z-index: 999;

  li {
    margin: 1rem 5rem;
    font-family: "Over the Rainbow";
    font-size: 3.6rem;
    color: #fff;
    cursor: pointer;
    transition: 0.5s;
  }
  @media (max-width: 767px) {
    display: none;
  }
  @media (min-width: 768px) {
    li {
      margin: 2rem;
    }
  }
  @media (orientation: landscape) and (min-width: 1024px) {
    justify-content: center;
    li {
      margin: 1rem 4rem;
      font-size: 3.5rem;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
.bgMenuColor {
  background-color: #ff4081;
  opacity: 0.9;
  transition: 1s;
}
</style>