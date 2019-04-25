<template>
  <div class="container">
    <Hamburger/>

    <h1>Nails | Blog</h1>

    <section class="post" v-if="this.$store.state.blog.posts">
      <img :src="loadedPost.headImg" alt="blog photo nails">
      <h2 class="title">{{ loadedPost.title }}</h2>
      <div class="date">{{ loadedPost.date }}</div>
      <h3 class="description">{{ loadedPost.shortDescription }}</h3>
      <p class="description-second">{{ loadedPost.longDescription }}</p>
      <img :src="loadedPost.otherImgFirst" alt="blog photo nails">
      <h3 class="description">{{ loadedPost.otherDescriptionFirst }}</h3>
      <p class="description-second">{{ loadedPost.otherDescriptionSecond }}</p>
      <img :src="loadedPost.otherImgSecond" alt="blog photo nails">
      <img :src="loadedPost.otherImgThird" alt="blog photo nails">
    </section>
  </div>
</template>

<script>
import Hamburger from "@/components/UI/Hamburger";
import axios from "axios";

export default {
  transition: "slide",
  components: { Hamburger },
  layout: "DesktopMenu",
  middleware: "autologin",
  async asyncData({ params }) {
    try {
      let { data } = await axios.get(
        process.env.baseUrl + "/posts/" + params.id + ".json"
      );
      return { loadedPost: data };
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  background-color: #ffcbcf;
  color: #fff;

  h1 {
    margin: 1rem 0 0 3rem;
    font-family: "Over the Rainbow";
    font-size: 3rem;
    font-weight: 300;
    text-align: left;
  }

  .post {
    margin: 2rem auto;
    width: 90%;
    img {
      margin-bottom: 2rem;
      width: 100%;
      border-radius: 1rem;
    }
    .title {
      margin: 1rem;
      font-size: 2rem;
      font-weight: 300;
    }
    .description {
      margin: 0 2rem 0 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.3;
    }
    .description-second {
      margin: 2rem 1rem;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.2;
    }
    .date {
      margin: 0 2rem 3rem 1rem;
      font-size: 1rem;
      font-weight: 500;
      color: #757575;
    }
  }
}
@media (min-width: 768px) {
  .container {
    .post {
      width: 80%;
      .title {
        font-size: 4.5rem;
      }
      .description {
        font-size: 2rem;
      }
      .description-second {
        font-size: 2rem;
      }
      .date {
        font-size: 1.8rem;
      }
    }
  }
}
@media (min-width: 1024px) {
  .container {
    h1 {
      display: none;
    }
    .post {
      width: 75%;
      margin: 12rem auto 4rem auto;
      .title {
        font-size: 5rem;
      }
      .description {
        font-size: 2.5rem;
      }
      .description-second {
        font-size: 2.5rem;
      }
      .date {
        font-size: 2.1rem;
      }
    }
  }
}
@media (min-width: 1200px) {
  .container {
    .post {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 70%;
      margin: 10rem auto 4rem auto;
      img {
        margin: 2rem auto;
        width: 45%;
        height: 250px;
        transition: 0.5s;
        &:hover {
          transform: scale(1.1);
        }
      }
      .title {
        width: 100%;
        font-size: 4rem;
      }
      .description {
        font-size: 2rem;
      }
      .description-second {
        font-size: 2.5rem;
      }
      .date {
        font-size: 2.1rem;
      }
    }
  }
}
</style>