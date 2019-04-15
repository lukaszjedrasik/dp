<template>
  <button @click="$emit('logout')">
    <i class="fas fa-sign-out-alt">
      <span>Wyloguj</span>
    </i>
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
  bottom: 1rem;
  right: 2rem;
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