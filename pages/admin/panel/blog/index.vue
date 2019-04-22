<template>
  <div class="container">
    <BackButton @back="back"/>
    <HomeButton @home="home"/>
    <LogoutButton @logout="logout"/>

    <div class="buttonContainer">
      <nuxt-link to="blog/addPost">
        <button>Dodaj post</button>
      </nuxt-link>
    </div>

    <div class="posts-container">
      <section class="posts" v-for="(post, index) in posts" :key="index">
        <div class="post">
          <article>
            <img :src="post.headImg" alt="blog photo nails">
            <h2 class="title">{{ post.title }}</h2>
            <nuxt-link :to="`blog/editPost/${index}`" tag="div" class="edit">Edytuj</nuxt-link>
            <div class="remove" @click="removePost(index)">
              <i class="fas fa-times"></i>
            </div>
          </article>
        </div>
      </section>
    </div>
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
    },
    async removePost(index) {
      await this.$store.dispatch("blog/removePost", index);
      this.$store.commit("blog/DELETE_POST", index);
    }
  },
  computed: {
    posts() {
      return this.$store.state.blog.posts;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffcbcf;
  color: #fff;
  .buttonContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7rem 0 2rem 0;
    button {
      margin-bottom: 1rem;
      border: none;
      font-size: 2rem;
      color: #ff4081;
      background-color: transparent;
      outline: none;
      a {
        text-decoration: none;
        color: #ff4081;
        outline: none;
      }
    }
  }
  .posts-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    .posts {
      display: flex;
      justify-content: center;
      margin: 2rem 0;
      width: 20rem;
      height: 25rem;
      text-align: center;
      .post {
        position: relative;
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
          0 15px 12px rgba(0, 0, 0, 0.22);
        img {
          padding: 1rem 0;
          width: 90%;
        }
        .title {
          margin: 1rem;
          font-size: 2rem;
        }
        .edit {
          margin-bottom: 1rem;
          font-size: 1.5rem;
          color: #757575;
        }
        .remove {
          position: absolute;
          top: -1.8rem;
          right: -1.2rem;
          color: #d50000;
          font-size: 3.5rem;
          opacity: 0.8;
        }
      }
    }
  }

  @media (orientation: landscape) {
    .posts {
      flex-direction: row;
      flex-wrap: wrap;
      .post {
        .title {
          margin: 1rem;
          font-size: 1.5rem;
        }
        .edit {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>