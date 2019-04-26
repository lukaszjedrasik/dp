<template>
  <div class="container">
    <AdminNavigation @back="back" @home="home" @logout="logout"/>

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
import AdminNavigation from "@/components/UI/AdminNavigation";

export default {
  middleware: ["autologin", "notAuthenticated"],
  components: { AdminNavigation },
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
  max-width: 1680px;
  margin: 0 auto;
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
      padding: 0.5rem 2rem;
      border: 1px solid #ff4081;
      border-radius: 5px;
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
    margin-bottom: 3rem;
    .posts {
      margin: 1rem 0;
      width: 80%;
      text-align: center;
      .post {
        position: relative;
        width: 100%;
        border-radius: 1rem;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
          0 15px 12px rgba(0, 0, 0, 0.22);
        article {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 100%;
            height: 180px;
            border-radius: 10px 10px 0 0;
          }
          .title {
            margin: 1rem;
            font-size: 2rem;
          }
          .edit {
            margin: 1.5rem 0;
            padding: 0.5rem 2rem;
            font-size: 1.5rem;
            color: #757575;
            border: 1px solid #ff4081;
            border-radius: 5px;
          }
          .remove {
            position: absolute;
            top: -1.8rem;
            right: -1.3rem;
            color: #d50000;
            font-size: 4rem;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
@media (min-width: 768px) {
  .container {
    .posts-container {
      .posts {
        width: 55%;
        margin: 2rem 0;
      }
    }
  }
}
@media (min-width: 1024px) {
  .container {
    .posts-container {
      .posts {
        width: 35%;
        margin: 2rem;
      }
    }
  }
}
@media (orientation: landscape) {
  .container {
    .posts-container {
      .posts {
        flex-direction: row;
        flex-wrap: wrap;
        width: 60%;
        margin: 2rem 0;
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
}
@media (orientation: landscape) and (min-width: 568px) {
  .container {
    .posts-container {
      .posts {
        width: 50%;
        margin: 2rem;
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 736px) {
  .container {
    .posts-container {
      .posts {
        flex-direction: row;
        flex-wrap: wrap;
        width: 40%;
        .post {
          article {
            height: 35rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
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
}
@media (orientation: landscape) and (min-width: 1024px) {
  .container {
    .posts-container {
      .posts {
        width: 25%;
      }
    }
  }
}
@media (orientation: landscape) and (min-width: 1366px) {
  .container {
    .posts-container {
      .posts {
        width: 20%;
      }
    }
  }
}
</style>