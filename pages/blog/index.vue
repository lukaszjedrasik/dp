<template>
  <div class="container">
    <Hamburger></Hamburger>
    <h1>Nails | Blog</h1>

    <section class="posts">
      <article class="post">
        <img src="~assets/img/blog_photo.png" alt="blog photo nails">
        <h2 class="title">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
        <h3
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores temporibus obcaecati quam animi est expedita, accusantium sed nesciunt harum.</h3>
        <div class="date">{{ date() }}</div>
        <div class="break-line"></div>
      </article>
      <article class="post">
        <img src="~assets/img/blog_photo.png" alt="blog photo nails">
        <h2 class="title">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
        <h3
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores temporibus obcaecati quam animi est expedita, accusantium sed nesciunt harum.</h3>
        <div class="date">{{ date() }}</div>
        <div class="break-line"></div>
      </article>
      <article class="post">
        <img src="~assets/img/blog_photo.png" alt="blog photo nails">
        <h2 class="title">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
        <h3
          class="description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores temporibus obcaecati quam animi est expedita, accusantium sed nesciunt harum.</h3>
        <div class="date">{{ date() }}</div>
        <div class="break-line"></div>
      </article>
    </section>
  </div>
</template>

<script>
import Hamburger from "@/components//Hamburger";

export default {
  transition: "slide",
  components: { Hamburger },
  layout: "DesktopMenu",
  methods: {
    date() {
      const months = [
        "styczeń",
        "luty",
        "marzec",
        "kwiecień",
        "maj",
        "czerwiec",
        "lipiec",
        "sierpień",
        "wrzesień",
        "październik",
        "listopad",
        "grudzień"
      ];
      const day = new Date().getDate();
      const month = new Date().getMonth();
      const year = new Date().getFullYear();
      return `${day} ${months[month]} ${year}`;
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
        font-weight: 400;
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
}
</style>