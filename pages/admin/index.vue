<template>
  <div class="container">
    <Hamburger/>
    <form>
      <input type="email" placeholder="E-mail" required v-model.trim="email">
      <input type="password" placeholder="Hasło" required v-model.trim="password">
      <button @click.prevent="submit">ZALOGUJ</button>
    </form>
  </div>
</template>

<script>
import Hamburger from "@/components/UI/Hamburger";

export default {
  components: { Hamburger },
  layout: "DesktopMenu",
  middleware: ["autologin", "authenticated"],
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },
  methods: {
    async submit() {
      if (this.email !== "") {
        await this.$store.dispatch("auth/login", {
          email: this.email,
          password: this.password,
          returnSecureToken: true
        });
        this.email = "";
        this.password = "";
      } else {
      }
    },
    setPassword(value) {
      this.password = value;
      this.$v.password.$touch();
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
    }
    button {
      width: 15rem;
      padding: 1rem 1rem;
      border: none;
      border-radius: 5px;
      color: #ffcbcf;
      background-color: #fff;
      font-size: 2rem;
      font-weight: 400;
      outline: none;
    }
  }
}
</style>