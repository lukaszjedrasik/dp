<template>
  <div class="container">
    <h1 class="name" v-if="this.$store.state.auth.email">Witaj {{ name() }}</h1>

    <LogoutButton @logout="logout"/>

    <section class="select">
      <div class="item">
        <nuxt-link to="/admin/panel/blog">
          <img src="~assets/img/blog.jpg" alt="blog">
        </nuxt-link>
        <p>Blog</p>
      </div>
      <div class="item">
        <nuxt-link to="/admin/panel/galeria">
          <img src="~assets/img/gallery.jpg" alt="gallery">
        </nuxt-link>
        <p>Galeria</p>
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
  width: 100vw;
  height: 100vh;
  background-color: #ffcbcf;
  .name {
    margin-top: 2rem;
    text-align: center;
    color: #ff4081;
    font-size: 3rem;
    font-weight: 700;
  }

  .select {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;
    height: 80vh;
    margin: 0 auto;
    .item {
      position: relative;
      display: flex;
      justify-content: center;
      margin: 1rem 0;
      a {
        width: 100%;

        img {
          position: relative;
          z-index: 1;
          height: 35vh;
          width: 100%;
          opacity: 0.7;
        }
      }
      p {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        padding: 1rem 0;
        color: #ff4081;
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
        z-index: 2;
      }
    }
  }
}
</style>