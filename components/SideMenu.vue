<template>
  <div class="slide-menu-off" :class="{sideMenuOn : this.$store.state.hamburgerValue.hamburger}">
    <ul>
      <nuxt-link tag="li" to="/">Strona Główna</nuxt-link>
      <nuxt-link tag="li" to="/blog">Blog</nuxt-link>
      <nuxt-link tag="li" to="/galeria">Galeria</nuxt-link>
      <nuxt-link tag="li" to="/kontakt">Kontakt</nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu"
};
</script>

<style scoped lang='scss'>
.slide-menu-off {
  position: fixed;
  top: 0;
  right: -100px;
  width: 0;
  transition: 0.3s;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    list-style-type: none;
    li {
      font-size: 1.2em;
      font-weight: 300;
      cursor: pointer;
    }
  }
}
.slide-menu-off.sideMenuOn {
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  background-color: #ffcbcf;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    list-style-type: none;
    li {
      margin: 1rem 0;
      font-size: 2em;
      font-weight: 300;
      cursor: pointer;
    }
  }
}
</style>