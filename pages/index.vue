<template>
  <div class="container">
    <div class="home-page">
      <img class="home-page-img" src="@/assets/img/main-page-bg.jpg" alt="nails blog">
      <img class="home-page-animoji" src="@/assets/img/Animoji.png" alt="animoji face">
      <h1 class="home-page-tittle">
        Dusiowe
        <span>Pazurki</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
@import "@/assets/main.min.css";

.home-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  .home-page-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .home-page-animoji {
    position: absolute;
    top: 80px;
    right: -15%;
    width: 40%;
  }
  .home-page-tittle {
    position: absolute;
    bottom: 30px;
    left: 0;
    font-family: "Dancing Script";
    font-size: 6em;
    transform: rotate(15deg);
    font-weight: 100;
    color: #fff;
    line-height: 0.7;
  }
}
</style>
