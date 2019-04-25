<template>
  <div class="posts">
    <section v-for="(post, index) in posts" :key="index">
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
  width: 90%;
  margin: 2rem auto;
  .post {
    margin: 2rem 0;
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
@media (min-width: 768px) {
  .posts {
    width: 80%;
    .post {
      .title {
        font-size: 3rem;
      }
      .description {
        font-size: 2rem;
      }
      .date {
        font-size: 1.8rem;
      }
    }
  }
}
@media (min-width: 1024px) {
  .posts {
    width: 70%;
    margin: 12rem auto 4rem auto;
    section {
      .post {
        .title {
          font-size: 5rem;
        }
        .description {
          font-size: 2.5rem;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}

@media (orientation: landscape) {
  .posts {
    width: 80%;
    section {
      .post {
        .title {
          font-size: 2rem;
        }
        .description {
          font-size: 1.3rem;
        }
        img {
          width: 100%;
        }
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 640px) {
  .posts {
    width: 90%;
    flex-direction: row;
    flex-wrap: wrap;
    section {
      width: 45%;
      margin: 0 auto;
      .post {
        .title {
          font-size: 2.5rem;
        }
        .description {
          font-size: 1.3rem;
        }
        .date {
          font-size: 1rem;
        }
        img {
          width: 100%;
          height: 200px;
        }
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 1024px) {
  .posts {
    section {
      width: 40%;
      margin: 0 auto;
      .post {
        img {
          height: 250px;
        }
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 1366px) {
  .posts {
    section {
      width: 30%;
      .post {
        .title {
          font-size: 3.5rem;
        }
        .description {
          font-size: 1.8rem;
        }
        .date {
          font-size: 1.2rem;
        }
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 1600px) {
  .posts {
    section {
      .post {
        .title {
          font-size: 4rem;
        }
        .description {
          font-size: 1.8rem;
        }
        .date {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>