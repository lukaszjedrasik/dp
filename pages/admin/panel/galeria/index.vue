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
        <label for="image">Link do zdjęcia:</label>
        <input type="text" name id="image" v-model.trim="img">
        <button type="submit" @click.prevent="addImg">Dodaj</button>
      </form>
    </div>

    <div class="remove" v-if="remove">
      <ul>
        <li v-for="(nail, index) in nails" :key="index" @click="deleteImg(index)">
          <img v-lazy="nail.src">
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
      img: ""
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
    async addImg() {
      if (this.img !== "") {
        try {
          let response = await this.$axios.$post(
            "https://dusiowe-pazurki.firebaseio.com/images.json",
            {
              thumb: this.img,
              src: this.img
            }
          );
        } catch (error) {
          console.log(error);
        }
        this.img = "";
      }
    },
    async deleteImg(index) {
      await this.$store.dispatch("gallery/delete", index);
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
  },
  beforeUpdate() {
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
    margin-top: 2rem;
    button {
      margin-bottom: 2rem;
      border: none;
      font-size: 2rem;
      color: #ff4081;
      background-color: transparent;
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
        display: flex;
        justify-content: center;
        margin: 0.5rem;
        img {
          height: 80px;
        }
      }
    }
  }
}
</style>