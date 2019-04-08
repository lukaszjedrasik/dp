<template>
  <div>
    <ul>
      <nuxt-link tag="li" to="/">Strona Główna</nuxt-link>
      <nuxt-link tag="li" to="/blog">Blog</nuxt-link>
      <nuxt-link tag="li" to="/galeria">Galeria</nuxt-link>
      <nuxt-link tag="li" to="/kontakt">Kontakt</nuxt-link>
    </ul>
    <nuxt/>
  </div>
</template>

<script>
export default {};
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
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
}
</style>