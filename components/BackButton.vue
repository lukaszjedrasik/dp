<template>
  <button @click="$emit('back')">
    <i class="fas fa-chevron-left">
      <span>Wstecz</span>
    </i>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  top: 3.3rem;
  left: 5rem;
  border: none;
  font-size: 2rem;
  i {
    padding: 1rem;
    color: #ff4081;
    background-color: #ffcbcf;
    span {
      margin-left: 1rem;
    }
  }
}
</style>