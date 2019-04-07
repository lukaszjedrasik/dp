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
  components: { Hamburger }
};
</script>

<style scoped lang='scss'>
.container {
  width: 100vw;
  height: 100%;
}
</style>