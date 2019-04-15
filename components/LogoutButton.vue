<template>
  <button @click="$emit('logout')">
    <i class="fas fa-sign-out-alt"></i>
  </button>
</template>

<script>
export default {
  name: "LogoutButton"
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  top: 2rem;
  right: 5rem;
  border: none;
  i {
    padding: 1rem;
    font-size: 4rem;
    color: #ff4081;
    background-color: #ffcbcf;
  }
}
</style>