<template>
  <div class="container">
    <Hamburger></Hamburger>
    <Loader v-show="this.$store.state.gallery.loader"/>

    <div class="gallery" v-if="canILoad">
      <ul>
        <li v-for="(nail, index) in nails" :key="index">
          <img v-lazy="nail.src" @click="openGallery(index)">
        </li>
      </ul>
      <LightBox
        :images="nails"
        ref="lightbox"
        :show-light-box="false"
        :showCaption="false"
        v-if="this.$store.state.gallery.photos"
      ></LightBox>
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
      if (this.$store.state.gallery.photos) {
        const obj = this.$store.state.gallery.photos;
        const result = Object.values(obj);
        return result;
      }
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
    margin: 8rem auto 2rem auto;
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
          height: 100px;
        }
      }
    }
  }
}
</style>