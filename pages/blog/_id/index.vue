<template>
  <div class="container">
    <Hamburger/>

    <h1>Nails | Blog</h1>

    <section class="post">
      <img src="~assets/img/blog_photo.png" alt="blog photo nails">
      <h2 class="title">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
      <div class="date">{{ `${date()} |` }}</div>
      <h3
        class="description"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores temporibus obcaecati quam animi est expedita, accusantium sed nesciunt harum.</h3>
      <p
        class="description-second"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deserunt numquam labore velit itaque inventore quod at quaerat quas aperiam pariatur quae vero facere, voluptatem quidem alias incidunt reprehenderit ullam et explicabo vel saepe odio necessitatibus. Assumenda explicabo fuga enim libero sapiente autem reprehenderit temporibus vel voluptates quae exercitationem quaerat excepturi earum nisi debitis quibusdam, maiores quam rem numquam beatae quas adipisci.</p>
      <h3 class="description">Lorem ipsum dolor sit amet.</h3>
      <p
        class="description-second"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo incidunt quas ipsum sunt recusandae vero ut, cum exercitationem consequuntur repudiandae aliquam soluta vel quidem.</p>
      <img src="~assets/img/blog_photo.png" alt="blog photo nails">
      <h3 class="description">Lorem ipsum dolor sit amet.</h3>
      <p
        class="description-second"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptatibus perspiciatis rem quae modi dolorem ullam, reiciendis praesentium, commodi inventore, eaque eligendi quidem perferendis ipsam.</p>
      <img src="~assets/img/blog_photo.png" alt="blog photo nails">
      <img src="~assets/img/blog_photo.png" alt="blog photo nails">
    </section>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";

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
</style>