<template>
  <div class="container">
    <BackButton @back="back"/>
    <HomeButton @home="home"/>
    <LogoutButton @logout="logout"/>

    <div class="post-container">
      <section class="posts" v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="/blog/ + index" tag="div" class="post" :post="post">
          <article>
            <img :src="post.headImg" alt="blog photo nails">
            <h2 class="title">{{ post.title }}</h2>
            <div class="date">{{ post.date }}</div>
          </article>
        </nuxt-link>
      </section>
    </div>
  </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton";
import BackButton from "@/components/BackButton";
import HomeButton from "@/components/HomeButton";

export default {
  components: { LogoutButton, BackButton, HomeButton },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
    back() {
      this.$router.push("/admin/panel/blog");
    },
    home() {
      this.$router.push("/");
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
  background-color: #ffcbcf;
  color: #fff;
  .post-container {
    margin: 5rem 0 2rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    .posts {
      display: flex;
      flex-direction: column;
      width: 80%;
      height: 100%;
      margin: 1rem 0.5rem;
      padding: 1rem;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
      .post {
        margin: 0 auto;
        width: 100%;
        img {
          width: 100%;
          border-radius: 0.5rem;
        }
        .title {
          margin-top: 1rem;
          font-size: 1.5rem;
        }
        .date {
          margin: 1rem 0;
          font-size: 1rem;
          font-weight: 500;
          color: #757575;
        }
      }
    }

    @media (orientation: landscape) {
      .posts {
        flex-direction: row;
        flex-wrap: wrap;
        width: 40%;
        height: 20rem;
        .post {
          .title {
            margin: 1rem;
            font-size: 1.5rem;
          }
          .date {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
}
</style>