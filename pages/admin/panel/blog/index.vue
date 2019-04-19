<template>
  <div class="container">
    <div class="buttonContainer">
      <button @click="show('add')">Dodaj post</button>
      <button @click="show('remove')">Usuń post</button>
    </div>

    <div class="add" v-if="add">
      <form>
        <input type="url" placeholder="Zdjęcie główne" v-model.trim="headImg">
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea name id cols="40" rows="1" placeholder="Tytuł" v-model.trim="title"></textarea>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea
          name
          id
          cols="40"
          rows="4"
          placeholder="Krótki opis"
          v-model.trim="shortDescription"
        ></textarea>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea
          name
          id
          cols="40"
          rows="4"
          placeholder="Długi opis"
          v-model.trim="longDescription"
        ></textarea>
        <p class="error" v-if="error">Pole nie może być puste.</p>

        <textarea
          name
          id
          cols="40"
          rows="4"
          placeholder="Poboczny opis"
          v-model.trim="otherDescriptionFirst"
        ></textarea>
        <textarea
          name
          id
          cols="40"
          rows="4"
          placeholder="Poboczny opis"
          v-model.trim="otherDescriptionSecond"
        ></textarea>
        <input type="url" placeholder="Zdjęcie poboczne" v-model.trim="otherImgFirst">
        <input type="url" placeholder="Zdjęcie poboczne" v-model.trim="otherImgSecond">
        <input type="url" placeholder="Zdjęcie poboczne" v-model.trim="otherImgThird">
        <button type="submit" @click.prevent="addPost">Dodaj</button>
      </form>
    </div>

    <div class="remove" v-if="remove"></div>

    <BackButton @back="back"/>
    <HomeButton @home="home"/>
    <LogoutButton @logout="logout"/>
  </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton";
import BackButton from "@/components/BackButton";
import HomeButton from "@/components/HomeButton";

export default {
  middleware: ["autologin", "notAuthenticated"],
  components: { LogoutButton, BackButton, HomeButton },
  asyncData({}) {
    return {
      add: null,
      remove: null,
      error: false,
      headImg: "",
      title: "",
      shortDescription: "",
      longDescription: "",
      otherDescriptionFirst: "",
      otherDescriptionSecond: "",
      otherImgFirst: "",
      otherImgSecond: "",
      otherImgThird: ""
    };
  },
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
    show(option) {
      if (option === "add") {
        this.add = true;
        this.remove = false;
      } else if (option === "remove") {
        this.add = false;
        this.remove = true;
      }
    },
    addPost() {
      if (
        this.headImg !== "" &&
        this.title !== "" &&
        this.longDescription !== "" &&
        this.shortDescription !== ""
      ) {
        this.error = false;
        console.log("dodano");
      } else {
        this.error = true;
      }
      this.headImg = "";
      this.title = "";
      this.shortDescription = "";
      this.longDescription = "";
      this.otherDescriptionFirst = "";
      this.otherDescriptionSecond = "";
      this.otherImgFirst = "";
      this.otherImgSecond = "";
      this.otherImgThird = "";
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
  .buttonContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7rem 0 2rem 0;
    button {
      margin-bottom: 1rem;
      border: none;
      font-size: 2rem;
      color: #ff4081;
      background-color: transparent;
      outline: none;
    }
  }
  .add {
    width: 90%;
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