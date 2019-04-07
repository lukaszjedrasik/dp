<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF");
    }
  }
};
</script>

<style>
html {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ffcbcf;
  color: #fff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
