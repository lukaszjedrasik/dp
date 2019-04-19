<template>
  <button @click="$emit('home')">
    <i class="fas fa-home"></i>
  </button>
</template>

<script>
export default {
  name: "HomeButton"
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
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