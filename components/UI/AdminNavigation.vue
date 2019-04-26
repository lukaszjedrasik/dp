<template>
  <div
    class="admin-navigation-container"
    :class="{navigationBgColorClass : navigationBgColor}"
    @scroll="handleScroll"
  >
    <button
      class="backButton"
      @click="$emit('back')"
      :class="{ displayNone: backButtonDisplayNone }"
    >
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="homeButton" @click="$emit('home')">
      <i class="fas fa-home"></i>
    </button>
    <button class="logoutButton" @click="$emit('logout')">
      <i class="fas fa-sign-out-alt"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "AdminNavigation",
  data() {
    return {
      backButtonDisplayNone: false,
      navigationBgColor: false
    };
  },
  created() {
    if (this.$route.fullPath === "/admin/panel") {
      this.backButtonDisplayNone = true;
    } else {
      this.backButtonDisplayNone = false;
    }

    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 20) {
        this.navigationBgColor = true;
      } else {
        this.navigationBgColor = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.admin-navigation-container {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
  text-align: center;
  transition: 1s;
  z-index: 999;
  button {
    margin: 0 2rem;
    border: none;
    font-size: 2rem;
    background-color: transparent;
    outline: none;
    i {
      padding: 1rem;
      color: #ff4081;
    }
  }
  .displayNone {
    display: none;
  }
}
.admin-navigation-container.navigationBgColorClass {
  background-color: #ff4081;
  opacity: 0.9;
  button {
    i {
      color: #fff;
    }
  }
}
@media (min-width: 768px) {
  .admin-navigation-container {
    button {
      font-size: 3rem;
    }
  }
}
@media (min-width: 1024px) {
  .admin-navigation-container {
    button {
      font-size: 3.5rem;
    }
  }
}
</style>