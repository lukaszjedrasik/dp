<template>
  <div class="container">
    <Hamburger></Hamburger>
    <Loader v-show="this.$store.state.gallery.loader"/>

    <div class="gallery" v-if="canILoad">
      <ul>
        <li v-for="(nail, index) in nails" style="display: inline-block" :key="index">
          <img v-lazy="nail.src" style="height: 150px" @click="openGallery(index)">
        </li>
      </ul>
      <LightBox :images="nails" ref="lightbox" :show-light-box="false" :showCaption="false"></LightBox>
    </div>
  </div>
</template>

<script>
import Hamburger from "@/components//Hamburger";
import Loader from "@/components/Loader";

export default {
  components: {
    Hamburger,
    LightBox: () => import("vue-image-lightbox"),
    Loader
  },
  transition: "slide",
  layout: "DesktopMenu",
  data() {
    return {
      canILoad: false
    };
  },
  mounted() {
    if (process.client) {
      this.canILoad = true;
    }
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    }
  },
  created() {
    this.$store.dispatch("gallery/downloadImages");
  },
  computed: {
    nails() {
      return this.$store.state.gallery.photos;
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcbcf;
  .gallery {
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      li {
        margin: 1rem;
      }
    }
  }
}
</style>