<template>
  <div>
    <div
      class="hamburger"
      :class="{transformHamburger : this.$store.state.hamburgerValue.hamburger, 
              hamburgerRose : this.isSlide && this.$store.state.hamburgerValue.hamburger === false}"
      @click="hamburger"
      @scroll="changeHamburgerColor"
    >
      <div :class="{transformHamburger : this.$store.state.hamburgerValue.hamburger}"></div>
      <div :class="{transformHamburger : this.$store.state.hamburgerValue.hamburger}"></div>
      <div :class="{transformHamburger : this.$store.state.hamburgerValue.hamburger}"></div>
    </div>
    <SideMenu/>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";

export default {
  name: "Hamburger",
  components: { SideMenu },
  data() {
    return {
      isSlide: false
    };
  },
  methods: {
    hamburger() {
      this.$store.commit("hamburgerValue/HAMBURGER_ON_OFF");
    },
    changeHamburgerColor() {
      if (window.scrollY >= 240) {
        this.isSlide = true;
      } else {
        this.isSlide = false;
      }
    }
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.changeHamburgerColor);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.changeHamburgerColor);
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
  @media (min-width: 768px) {
    display: none;
  }
}

.hamburger.hamburgerRose {
  div {
    background-color: #ff4081;
  }
}

.hamburger.transformHamburger {
  position: fixed;
  z-index: 9999;

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