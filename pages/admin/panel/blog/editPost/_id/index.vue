<template>
  <div class="container">
    <AdminNavigation @back="back" @home="home" @logout="logout"/>

    <div class="add">
      <form>
        <input type="url" placeholder="Zdjęcie główne" v-model.trim="headImg">
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea name id cols="40" rows="1" placeholder="Tytuł" v-model.trim="title"></textarea>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea
          name
          id
          cols="40"
          rows="3"
          placeholder="Krótki opis"
          v-model.trim="shortDescription"
        ></textarea>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea
          name
          id
          cols="40"
          rows="3"
          placeholder="Długi opis"
          v-model.trim="longDescription"
        ></textarea>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea
          name
          id
          cols="40"
          rows="3"
          placeholder="Poboczny opis"
          v-model.trim="otherDescriptionFirst"
        ></textarea>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea
          name
          id
          cols="40"
          rows="3"
          placeholder="Poboczny opis"
          v-model.trim="otherDescriptionSecond"
        ></textarea>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <input type="url" placeholder="Zdjęcie poboczne" v-model.trim="otherImgFirst">
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <input type="url" placeholder="Zdjęcie poboczne" v-model.trim="otherImgSecond">
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <input type="url" placeholder="Zdjęcie poboczne" v-model.trim="otherImgThird">
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <button type="submit" @click.prevent="editPost">Edytuj</button>
      </form>
    </div>
  </div>
</template>

<script>
import AdminNavigation from "@/components/UI/AdminNavigation";
import axios from "axios";

export default {
  middleware: ["autologin", "notAuthenticated"],
  components: { AdminNavigation },
  async asyncData({ params }) {
    try {
      let { data } = await axios.get(
        process.env.baseUrl + "/posts/" + params.id + ".json"
      );
      return {
        error: false,
        ...data
      };
    } catch (error) {
      console.log(error);
    }
  },
  created() {
    this.setDate();
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
    back() {
      this.$router.push("/admin/panel/blog");
    },
    home() {
      this.$router.push("/");
    },
    setDate() {
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
      const currentDate = `${day} ${months[month]} ${year}`;
      this.date = currentDate;
    },
    async editPost() {
      if (
        this.headImg !== "" &&
        this.title !== "" &&
        this.longDescription !== "" &&
        this.shortDescription !== "" &&
        this.otherDescriptionFirst !== "" &&
        this.otherDescriptionSecond !== "" &&
        this.otherImgFirst !== "" &&
        this.otherImgSecond !== "" &&
        this.otherImgThird !== ""
      ) {
        this.error = false;
        const params = this.$route.params.id;

        this.$store.dispatch("blog/editPost", {
          headImg: this.headImg,
          title: this.title,
          shortDescription: this.shortDescription,
          longDescription: this.longDescription,
          otherDescriptionFirst: this.otherDescriptionFirst,
          otherDescriptionSecond: this.otherDescriptionSecond,
          otherImgFirst: this.otherImgFirst,
          otherImgSecond: this.otherImgSecond,
          otherImgThird: this.otherImgThird,
          date: this.date,
          key: params
        });
      } else {
        this.error = true;
      }
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

  .add {
    width: 90%;
    margin: 5rem 0 2rem 0;
    text-align: center;
    form {
      display: flex;
      flex-direction: column;
      input,
      textarea {
        margin: 0.5rem 0;
        padding: 1rem 0;
        border: none;
        border-radius: 0.5rem;
        text-align: center;
        outline: none;
      }
      .error {
        margin: 1rem auto;
        font-size: 1.5rem;
        color: red;
      }
      button {
        width: 50%;
        margin: 2rem auto;
        padding: 1rem 0;
        border: 1px solid #ff4081;
        border-radius: 0.5rem;
        background-color: transparent;
        outline: none;
      }
    }
  }
}
</style>