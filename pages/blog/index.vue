<template>
  <div class="container">
    <Hamburger/>
    <h1>Nails | Blog</h1>
    <PostLists/>
  </div>
</template>

<script>
import Hamburger from "@/components/UI/Hamburger";
import Loader from "@/components/UI/Loader";
import PostLists from "@/components/PostLists";

export default {
  transition: "slide",
  components: { Hamburger, Loader, PostLists },
  layout: "DesktopMenu",
  middleware: "autologin"
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