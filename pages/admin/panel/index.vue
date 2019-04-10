<template>
  <div>{{ name() }} - Panel</div>
</template>

<script>
export default {
  middleware: "AuthGuard",
  methods: {
    name() {
      if (this.$store.state.auth.email === "lukaszj93@onet.eu") {
        return "Hej Łukasz!";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>