<template>
  <div>
    <div>
      <section class="posts" v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="/blog/ + index" tag="div" class="post">
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
  </div>
</template>

<script>
export default {
  name: "PostLists",
  computed: {
    posts() {
      return this.$store.state.blog.posts;
    }
  }
};
</script>

<style lang="scss" scoped>
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
      border-bottom: 1px solid hsl(340, 100%, 63%);
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
</style>