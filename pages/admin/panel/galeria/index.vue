<template>
  <div class="container">
    <BackButton @back="back"/>
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

    <div class="remove" v-if="remove">usun</div>
  </div>
</template>

<script>
import LogoutButton from "@/components/LogoutButton";
import BackButton from "@/components/BackButton";

export default {
  middleware: "AuthGuard",
  components: { LogoutButton, BackButton },
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
    }
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
    margin-top: 5rem;
    button {
      margin-bottom: 2rem;
      border: none;
      font-size: 2rem;
      color: #ff4081;
      background-color: transparent;
    }
  }
}
</style>