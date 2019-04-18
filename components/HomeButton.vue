<template>
  <button @click="$emit('home')">
    <i class="fas fa-home">
      <span>Strona Główna</span>
    </i>
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
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
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