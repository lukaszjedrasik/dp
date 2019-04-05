<template>
  <div class="slide-menu-off" :class="{sideMenuOn :sideMenuOn}">
    <ul>
      <li>Blog</li>
      <li>Galeria</li>
      <li>Kontakt</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  props: ["sideMenuOn"],
  data() {
    return {
      sideMenuOff: true
    };
  }
};
</script>

<style scoped lang='scss'>
.slide-menu-off {
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  transition: 0.3s;
  ul {
    opacity: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    list-style-type: none;
    li {
      margin: 1.5em 0;
      font-size: 2.2em;
      font-weight: 300;
      color: #fff;
    }
  }
}
.slide-menu-off.sideMenuOn {
  width: 70%;
  height: 100%;
  background-color: #ffcbcf;

  ul {
    opacity: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    list-style-type: none;
    li {
      margin: 1.5em 0;
      font-size: 2.2em;
      font-weight: 300;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>