<template>
  <div>
    <div
      class="hamburger"
      :class="{transformHamburger : this.$store.state.hamburgerValue.hamburger}"
      @click="hamburger"
    >
      <div :class="{transformHamburger : this.$store.state.hamburgerValue.hamburger}"></div>
      <div :class="{transformHamburger : this.$store.state.hamburgerValue.hamburger}"></div>
      <div :class="{transformHamburger : this.$store.state.hamburgerValue.hamburger}"></div>
    </div>
    <SideMenu/>
    <nuxt/>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";

export default {
  name: "Hamburger",
  components: { SideMenu },
  methods: {
    hamburger() {
      this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF");
    }
  }
};
</script>

<style scoped lang='scss'>
.hamburger {
  position: fixed;
  top: 25px;
  right: 25px;
  width: 35px;
  height: 25px;
  cursor: pointer;
  z-index: 99;
  div {
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
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
  div {
    width: 100%;
    top: 10px;
    right: 0;
    transform: rotate(45deg);
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
}
</style>