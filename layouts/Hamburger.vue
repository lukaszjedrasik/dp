<template>
  <div>
    <div
      class="hamburger"
      @click="hamburger = !hamburger"
      :class="{transformHamburger : hamburger}"
    >
      <div :class="{transformHamburger : hamburger}"></div>
      <div :class="{transformHamburger : hamburger}"></div>
      <div :class="{transformHamburger : hamburger}"></div>
    </div>
    <SideMenu :sideMenuOn="hamburger"/>
  </div>
</template>

<script>
import SideMenu from "@/layouts/SideMenu";

export default {
  name: "Hamburger",
  components: { SideMenu },
  data() {
    return {
      hamburger: false
    };
  }
};
</script>

<style scoped lang='scss'>
.hamburger {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 35px;
  height: 25px;
  cursor: pointer;
  div {
    position: absolute;
    top: 0;
    right: 0;
    height: 3px;
    width: 20px;
    background-color: #fff;
    transition: 0.3s;

    &:nth-child(2) {
      top: 10px;
      width: 100%;
    }
    &:nth-child(3) {
      top: 20px;
    }
  }
}
.hamburger.transformHamburger {
  left: 20px;
  div {
    width: 100%;
    top: 10px;
    transform: rotate(45deg);
    &:nth-child(2) {
      left: 0;
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
}
</style>