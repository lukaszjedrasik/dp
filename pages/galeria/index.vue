<template>
  <div class="container">
    <Hamburger></Hamburger>
    <h1>Nails | Galeria</h1>

    <div class="gallery" v-if="canILoad">
      <Loader v-show="this.$store.state.gallery.loader"/>
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
  width: 100vw;
  background-color: #ffcbcf;
  color: #fff;
  h1 {
    margin: 1rem 0 0 3rem;
    font-family: "Over the Rainbow";
    font-size: 3rem;
    font-weight: 300;
    text-align: left;
  }
  .gallery {
    margin: 2rem auto 2rem auto;
    width: 95%;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      list-style-type: none;
      li {
        display: flex;
        justify-content: center;
        margin: 1rem;
        img {
          height: 70px;
        }
      }
    }
  }
}
</style>