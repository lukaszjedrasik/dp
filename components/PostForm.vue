<template>
  <div class="container">
    <AdminNavigation @back="back" @home="home" @logout="logout"/>

    <div class="add">
      <form>
        <label for="headImg">
          Zdjęcie główne:
          <input
            type="file"
            name="headImg"
            id="headImg"
            class="input-file"
            @change="onHeadImg"
          >
        </label>
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

        <label for="otherImgFirst">
          Zdjęcie poboczne:
          <input
            type="file"
            name="otherImgFirst"
            id="otherImgFirst"
            class="input-file"
            @change="onOtherImgFirst"
          >
        </label>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <label for="otherImgSecond">
          Zdjęcie poboczne:
          <input
            type="file"
            name="otherImgSecond"
            id="otherImgSecond"
            class="input-file"
            @change="onOtherImgSecond"
          >
        </label>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <label for="otherImgThird">
          Zdjęcie poboczne:
          <input
            type="file"
            name="otherImgThird"
            id="otherImgThird"
            class="input-file"
            @change="onOtherImgThird"
          >
        </label>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <button type="submit" @click.prevent="addPost">Dodaj</button>
      </form>
    </div>
  </div>
</template>

<script>
import AdminNavigation from "@/components/UI/AdminNavigation";
import { imagesFiles, setDate } from "@/mixins/mixins.js";

export default {
  name: "PostForm",
  components: { AdminNavigation },
  mixins: [imagesFiles, setDate],
  data() {
    return {
      error: false,
      headImg: "",
      title: "",
      shortDescription: "",
      longDescription: "",
      otherDescriptionFirst: "",
      otherDescriptionSecond: "",
      otherImgFirst: "",
      otherImgSecond: "",
      otherImgThird: "",
      date: null
    };
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
    async addPost() {
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
        this.$store.dispatch("blog/getNewPost", {
          headImg: this.headImg,
          title: this.title,
          shortDescription: this.shortDescription,
          longDescription: this.longDescription,
          otherDescriptionFirst: this.otherDescriptionFirst,
          otherDescriptionSecond: this.otherDescriptionSecond,
          otherImgFirst: this.otherImgFirst,
          otherImgSecond: this.otherImgSecond,
          otherImgThird: this.otherImgThird,
          date: this.date
        });

        this.headImg = "";
        this.title = "";
        this.shortDescription = "";
        this.longDescription = "";
        this.otherDescriptionFirst = "";
        this.otherDescriptionSecond = "";
        this.otherImgFirst = "";
        this.otherImgSecond = "";
        this.otherImgThird = "";
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
      align-items: center;
      input,
      textarea {
        width: 100%;
        margin: 0.5rem 0;
        padding: 1rem 0;
        border: none;
        border-radius: 0.5rem;
        text-align: center;
        outline: none;
      }
      label {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
      }
      .input-file {
        margin-left: 5rem;
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