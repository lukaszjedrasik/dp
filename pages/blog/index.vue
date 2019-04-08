<template>
  <div class="container">
    <Hamburger></Hamburger>
    <h1>Blog</h1>
  </div>
</template>

<script>
import Hamburger from "@/components//Hamburger";

export default {
  transition: "slide",
  components: { Hamburger },
  layout: "DesktopMenu"
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  h1 {
    margin: 10rem;
  }
}
</style>