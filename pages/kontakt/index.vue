<template>
  <div class="container">
    <h1>Nails | Kontakt</h1>
    <Hamburger></Hamburger>
  </div>
</template>

<script>
import Hamburger from "@/components/UI/Hamburger";

export default {
  components: { Hamburger },
  transition: "slide",
  layout: "DesktopMenu",
  middleware: "autologin"
};
</script>

<style scoped lang='scss'>
.container {
  background-color: #ffcbcf;
  color: #fff;
  min-height: 100vh;
  h1 {
    margin: 1rem 0 0 3rem;
    font-family: "Over the Rainbow";
    font-size: 3rem;
    font-weight: 300;
    text-align: left;
  }
}
</style>