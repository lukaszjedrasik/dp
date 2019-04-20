<template>
  <div class="container">
    <Hamburger/>
    <h1>Nails | Blog</h1>
    <Loader v-show="this.$store.state.gallery.loader"/>

    <section class="posts" v-for="(post, index) in posts" :key="index">
      <nuxt-link :to="/blog/ + index" tag="div" class="post" :post="post">
        <article>
          <img :src="post.headImg" alt="blog photo nails">
          <h2 class="title">{{ post.title }}</h2>
          <h3 class="description">{{ post.shortDescription }}</h3>
          <div class="date">{{ post.date }}</div>
          <div class="break-line"></div>
        </article>
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import Loader from "@/components/Loader";
import axios from "axios";

export default {
  transition: "slide",
  components: { Hamburger, Loader },
  layout: "DesktopMenu",
  middleware: "autologin",
  async asyncData() {
    try {
      let { data } = await axios.get(process.env.baseUrl + "/posts.json");
      return { posts: data };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #ffcbcf;
  color: #fff;

  h1 {
    margin: 1rem 0 0 3rem;
    font-family: "Over the Rainbow";
    font-size: 3rem;
    font-weight: 300;
    text-align: left;
  }
  .posts {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    .post {
      margin: 0 auto;
      width: 90%;
      img {
        width: 100%;
        border-radius: 1rem;
      }
      .title {
        margin: 2rem 2rem 1rem 1rem;
        font-size: 2rem;
        font-weight: 300;
      }
      .description {
        margin: 0 2rem 0 1rem;
        font-size: 1.3rem;
        font-weight: 400;
        line-height: 1.5;
      }
      .date {
        margin: 0.5rem 2rem 0 1rem;
        font-size: 1rem;
        font-weight: 500;
        color: #757575;
      }
      .break-line {
        margin: 3rem auto;
        width: 90%;
        border-bottom: 1px solid #ff4081;
      }
    }
  }

  @media (orientation: landscape) {
    .posts {
      flex-direction: row;
      flex-wrap: wrap;
      .post {
        flex-basis: 45%;

        .title {
          margin: 1rem;
          font-size: 1.5rem;
        }
        .description {
          font-size: 1rem;
        }
        .date {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>