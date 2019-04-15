<template>
  <div class="container">
    <BackButton @back="back"/>
    <LogoutButton @logout="logout"/>

    <div class="add" v-if="add">
      <button>Dodaj zdjęcie</button>
    </div>

    <div class="remove" v-if="remove">
      <button>Usuń zdjęcie</button>
    </div>
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
      add: true,
      remove: true
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
    back() {
      this.$router.push("/admin/panel");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-width: 100vw;
  min-height: 100vh;
  background-color: #ffcbcf;
  .add,
  .remove {
    button {
      border: none;
      font-size: 2rem;
      color: #ff4081;
      background-color: transparent;
    }
  }
}
</style>