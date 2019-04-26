<template>
  <div class="container">
    <AdminNavigation @home="home" @logout="logout"/>
    <h1 class="name" v-if="this.$store.state.auth.email">Witaj {{ name() }}</h1>

    <section class="select">
      <div class="item">
        <nuxt-link to="/admin/panel/blog">
          <img src="~assets/img/blog.jpg" alt="blog">
          <p>Blog</p>
        </nuxt-link>
      </div>
      <div class="item">
        <nuxt-link to="/admin/panel/galeria">
          <img src="~assets/img/gallery.jpg" alt="gallery">
          <p>Galeria</p>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script>
import AdminNavigation from "@/components/UI/AdminNavigation";

export default {
  middleware: ["autologin", "notAuthenticated"],
  components: { AdminNavigation },
  methods: {
    name() {
      if (this.$store.state.auth.email === "lukaszj93@onet.eu") {
        return "Łukasz!";
      } else if (this.$store.state.auth.email === "dusia@interia.pl") {
        return "Dusia!";
      } else {
        return "Test";
      }
    },
    logout() {
      this.$store.dispatch("auth/logout");
    },
    home() {
      this.$router.push("/");
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
    margin-top: 5rem;
    text-align: center;
    color: #ff4081;
    font-size: 3rem;
    font-weight: 300;
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
@media (min-width: 768px) {
  .container {
    .name {
      font-size: 5rem;
    }

    .select {
      width: 70vw;
      .item {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        p {
          font-size: 3.5rem;
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .container {
    .name {
      margin-top: 7rem;
    }
  }
}
@media (orientation: landscape) {
  .container {
    .select {
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      height: auto;
      .item {
        width: 45%;
        justify-content: center;
        margin: 3rem 1rem 0 1rem;
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 568px) {
  .container {
    .select {
      .item {
        width: 40%;
        p {
          font-size: 1.8rem;
        }
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 736px) {
  .container {
    .name {
      font-size: 4rem;
    }
    .select {
      .item {
        width: 40%;
        a {
        }
        p {
          font-size: 1.8rem;
        }
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 1200px) {
  .container {
    .select {
      .item {
        margin: 8rem 2rem;
        p {
          font-size: 3.5rem;
        }
      }
    }
  }
}
</style>