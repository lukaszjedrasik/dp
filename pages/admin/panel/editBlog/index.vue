<template>
  <div class="container">
    Edit Blog
    <BackButton @back="back"/>
    <LogoutButton @logout="logout"/>
  </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton";
import BackButton from "@/components/BackButton";

export default {
  middleware: "AuthGuard",
  components: { LogoutButton, BackButton },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
    back() {
      this.$router.push("/admin/panel");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ffcbcf;
}
</style>