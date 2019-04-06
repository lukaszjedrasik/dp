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
  </div>
</template>

<script>
import Hamburger from "@/layouts/Hamburger";

export default {
  components: { Hamburger }
};
</script>

<style scoped lang='scss'>
@import "@/assets/main.min.css";
</style>
