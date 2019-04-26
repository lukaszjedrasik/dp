<template>
  <div class="container">
    <AdminNavigation @back="back" @home="home" @logout="logout"/>

    <div class="buttonContainer">
      <button @click="show('add')">Dodaj zdjęcie</button>
      <button @click="show('remove')">Usuń zdjęcie</button>
    </div>

    <div class="add" v-if="add">
      <form>
        <input type="file" id="file" @change="imgFile">
        <label for="file" class="btn-3">
          <span>Wgraj zdjęcie</span>
        </label>
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
import AdminNavigation from "@/components/UI/AdminNavigation";

export default {
  middleware: ["autologin", "notAuthenticated"],
  components: { AdminNavigation },
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
    imgFile(e) {
      let image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.img = e.target.result;
      };
    },
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
      margin: 1rem 0;
      width: 100%;
      padding: 0.5rem 2rem;
      border: 1px solid #ff4081;
      border-radius: 5px;
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
      align-items: center;
      [type="file"] {
        height: 0;
        overflow: hidden;
        width: 0;
        display: none;
      }
      [type="file"] + label {
        width: 15rem;
        text-align: center;
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
      input {
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
        margin: 2rem auto;
        padding: 1rem 5rem;
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