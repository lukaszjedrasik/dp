<template>
  <div class="container">
    <Hamburger/>
    <h1>Nails | Blog</h1>
    <Loader v-show="this.$store.state.gallery.loader"/>
    <PostLists/>
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import Loader from "@/components/Loader";
import PostLists from "@/components/PostLists";

export default {
  transition: "slide",
  components: { Hamburger, Loader, PostLists },
  layout: "DesktopMenu",
  middleware: "autologin",
  computed: {
    posts() {
      return this.$store.state.blog.posts;
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #ffcbcf;
  color: #fff;

  h1 {
    margin: 1rem 0 0 3rem;
    font-family: "Over the Rainbow";
    font-size: 3rem;
    font-weight: 300;
    text-align: left;
  }
}
</style>