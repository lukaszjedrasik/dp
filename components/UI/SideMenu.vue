<template>
  <div class="slide-menu-off" :class="{sideMenuOn : this.$store.state.hamburgerValue.hamburger}">
    <ul @click="hideMenu">
      <nuxt-link tag="li" to="/">Strona Główna</nuxt-link>
      <nuxt-link tag="li" to="/blog">Blog</nuxt-link>
      <nuxt-link tag="li" to="/galeria">Galeria</nuxt-link>
      <nuxt-link tag="li" to="/kontakt">Kontakt</nuxt-link>
      <nuxt-link tag="li" to="/admin" v-if="this.$store.state.auth.isLoggin">Admin</nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  methods: {
    hideMenu() {
      this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF");
    }
  }
};
</script>

<style scoped lang='scss'>
.slide-menu-off {
  position: fixed;
  top: 0;
  right: -50vw;
  width: 0;
  color: #fff;
  font-family: "Over the Rainbow";
  background-color: #ffcbcf;
  transition: 0.5s;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  z-index: 99;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    list-style-type: none;
    li {
      margin: 1rem 0;
      font-size: 3.5rem;
      font-weight: 300;
    }
  }
}
.slide-menu-off.sideMenuOn {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: #ffcbcf;
  color: #fff;
  z-index: 999;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    list-style-type: none;
    li {
      margin: 1rem 0;
      font-size: 3.5rem;
      font-weight: 300;
    }
  }
}
@media (orientation: landscape) {
  .slide-menu-off {
    ul {
      li {
        margin: 0;
      }
    }
  }
  .slide-menu-off.sideMenuOn {
    ul {
      li {
        margin: 0;
      }
    }
  }
}
</style>