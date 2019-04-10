<template>
  <div class="container">
    <Hamburger/>
    <form>
      <input type="email" placeholder="E-mail" required v-model="email">
      <input type="text" placeholder="Hasło" required v-model="password">
      <button @click.prevent="submit">ZALOGUJ</button>
    </form>
  </div>
</template>

<script>
import Hamburger from "@/components//Hamburger";

export default {
  components: { Hamburger },
  layout: "DesktopMenu",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async submit() {
      if (this.email !== "") {
        let response = await this.$axios.$post(
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBeprvPGfR5_ZNQol5bG814We3KPIivjQg",
          {
            email: this.email,
            password: this.password,
            returnSecureToken: true
          }
        );
        console.log(response);
        this.email = "";
        this.password = "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: 100vh;
  background-color: #ffcbcf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    input {
      margin: 1.5rem 0;
      padding: 2rem 1rem;
      width: 35rem;
      height: 5rem;
      border: none;
      border-radius: 5px;
      text-align: center;
      font-size: 2rem;
      outline: none;
      color: #ffcbcf;
      &:focus {
      }
    }
    button {
      width: 15rem;
      padding: 1rem 1rem;
      border: none;
      border-radius: 5px;
      color: #ffcbcf;
      font-size: 2rem;
      font-weight: 400;
      outline: none;
    }
  }
}
</style>