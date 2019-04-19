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
  top: 1rem;
  right: 1rem;
  border: none;
  font-size: 2rem;
  background-color: transparent;
  outline: none;
  i {
    padding: 1rem;
    color: #ff4081;
  }
}
</style>