<template>
  <div class="container">
    Edit Blog
    <BackButton @back="back"/>
    <HomeButton @home="home"/>
    <LogoutButton @logout="logout"/>
  </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton";
import BackButton from "@/components/BackButton";
import HomeButton from "@/components/HomeButton";

export default {
  middleware: ["autologin", "notAuthenticated"],
  components: { LogoutButton, BackButton, HomeButton },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
    back() {
      this.$router.push("/admin/panel");
    },
    home() {
      this.$router.push("/");
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