<template>
  <div class="container">
    <h1 v-if="this.$store.state.auth.email">Witaj {{ name() }}</h1>

    <LogoutButton @logout="logout"/>

    <section class="select">
      <div class="blog">
        <nuxt-link to="/admin/panel/editBlog">Edytuj Bloga</nuxt-link>
      </div>
      <div class="gallery">
        <nuxt-link to="/admin/panel/editGallery">Edytuj Galerie</nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton";

export default {
  middleware: "AuthGuard",
  components: { LogoutButton },
  methods: {
    name() {
      if (this.$store.state.auth.email === "lukaszj93@onet.eu") {
        return "Łukasz!";
      } else if (this.$store.state.auth.email === "dusia@interia.pl") {
        return "Dusia!";
      }
    },
    logout() {
      this.$store.dispatch("auth/logout");
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