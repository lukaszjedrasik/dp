<template>
  <button @click="$emit('back')">
    <i class="fas fa-chevron-left"></i>
  </button>
</template>

<script>
export default {
  name: "BackButton"
};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  top: 1rem;
  left: 1rem;
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