<template>
  <div class="container">
    <AdminNavigation @back="back" @home="home" @logout="logout"/>

    <div class="add">
      <form>
        <input type="file" id="file" @change="onHeadImg">
        <label for="file" class="btn-3">
          <span>Wgraj zdjęcie</span>
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

        <div class="threeButton">
          <div class="button-container">
            <input type="file" id="onOtherImgFirst" @change="onOtherImgFirst">
            <label for="onOtherImgFirst" class="btn-3">
              <span>Wgraj zdjęcie</span>
            </label>

            <input type="file" id="onOtherImgSecond" @change="onOtherImgSecond">
            <label for="onOtherImgSecond" class="btn-3">
              <span>Wgraj zdjęcie</span>
            </label>

            <input type="file" id="onOtherImgThird" @change="onOtherImgThird">
            <label for="onOtherImgThird" class="btn-3">
              <span>Wgraj zdjęcie</span>
            </label>
          </div>
          <p class="error" v-if="error">Pole nie może być puste.</p>
        </div>

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
  max-width: 1680px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffcbcf;

  .add {
    width: 80%;
    margin: 5rem 0 2rem 0;
    text-align: center;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
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
      [type="file"] {
        height: 0;
        overflow: hidden;
        width: 0;
        display: none;
      }
      [type="file"] + label {
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 1.2rem;
        margin: 1rem;
        outline: none;
        padding: 1rem 5rem;
        position: relative;

        &.btn-3 {
          background-color: #ee6d9e;
          border-radius: 5px;
          overflow: hidden;
        }
      }
    }
  }
}
@media (orientation: landscape) {
  .container {
    .add {
      form {
        .threeButton {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
}
</style>