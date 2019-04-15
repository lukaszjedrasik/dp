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
  bottom: 1rem;
  left: 2rem;
  border: none;
  font-size: 1.5rem;
  background-color: transparent;
  i {
    padding: 1rem;
    color: #ff4081;
    span {
      margin-left: 1rem;
    }
  }
}
</style>