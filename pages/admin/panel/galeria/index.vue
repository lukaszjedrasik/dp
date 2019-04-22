<template>
  <div class="container">
    <BackButton @back="back"/>
    <HomeButton @home="home"/>
    <LogoutButton @logout="logout"/>

    <div class="buttonContainer">
      <button @click="show('add')">Dodaj zdjęcie</button>
      <button @click="show('remove')">Usuń zdjęcie</button>
    </div>

    <div class="add" v-if="add">
      <form>
        <input type="url" placeholder="Link do zdjęcia" v-model.trim="img">
        <p class="error" v-if="error">Pole nie może być puste.</p>
        <input type="text" placeholder="Opis zdjęcia" v-model.trim="imgDescription">
        <p class="error" v-if="error">Pole nie może być puste.</p>
        <button type="submit" @click.prevent="addImg">Dodaj</button>
      </form>
    </div>

    <div class="remove" v-if="remove">
      <ul>
        <li v-for="(nail, index) in nails" :key="index">
          <img v-lazy="nail.src">
          <div class="removeImg" @click="deleteImg(index)">
            <i class="fas fa-times"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton";
import BackButton from "@/components/BackButton";
import HomeButton from "@/components/HomeButton";

export default {
  middleware: ["autologin", "notAuthenticated"],
  components: { LogoutButton, BackButton, HomeButton },
  data() {
    return {
      add: null,
      remove: null,
      img: "",
      imgDescription: "",
      error: false
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
    back() {
      this.$router.push("/admin/panel");
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
    addImg() {
      if (this.img !== "" && this.imgDescription !== "") {
        this.error = false;
        this.$store.dispatch("gallery/newImg", {
          thumb: this.img,
          src: this.img,
          description: this.imgDescription
        });

        this.remove = true;
        this.add = false;
        this.img = "";
        this.imgDescription = "";
      } else {
        this.error = true;
      }
    },
    async deleteImg(index) {
      await this.$store.dispatch("gallery/delete", index);
      this.$store.commit("gallery/DELETE_IMG", index);
    },
    home() {
      this.$router.push("/");
    }
  },
  computed: {
    nails() {
      return this.$store.state.gallery.photos;
    }
  },
  created() {
    this.$store.dispatch("gallery/downloadImages");
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-width: 100vw;
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
    width: 100%;
    form {
      display: flex;
      flex-direction: column;
      input {
        width: 80%;
        margin: 0.5rem auto;
        padding: 1rem 2rem;
        text-align: center;
        outline: none;
        border: none;
        border-radius: 0.5rem;
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
  .remove {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      list-style-type: none;
      li {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 0.5rem;
        img {
          height: 150px;
          border-radius: 1rem;
        }
        .removeImg {
          position: absolute;
          top: -1.5rem;
          right: -0.9rem;
          color: #d50000;
          font-size: 3.5rem;
        }
      }
    }
  }
}
</style>