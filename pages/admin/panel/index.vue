<template>
  <div>
    <h1 v-if="this.$store.state.auth.email">{{ name() }}</h1>
    <button @click="logout">Wyloguj</button>
  </div>
</template>

<script>
export default {
  middleware: "AuthGuard",
  methods: {
    name() {
      if (this.$store.state.auth.email === "lukaszj93@onet.eu") {
        return "Hej Łukasz!";
      } else if (this.$store.state.auth.email === "dusia@interia.pl") {
        return "Hej Dusia!";
      }
    },
    logout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>