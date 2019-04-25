<template>
  <div class="container">
    <Hamburger></Hamburger>
    <h1>Nails | Galeria</h1>
    <Loader v-show="this.$store.state.gallery.loader"/>

    <div class="gallery" v-if="canILoad">
      <ul>
        <li v-for="(nail, index) in nails" :key="index">
          <img
            v-lazy="nail.src"
            @click="openGallery(index)"
            :alt="nail.description"
            :title="nail.description"
          >
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
import Hamburger from "@/components/UI/Hamburger";
import Loader from "@/components/UI/Loader";

export default {
  components: {
    Hamburger,
    LightBox: () => import("vue-image-lightbox"),
    Loader
  },
  transition: "slide",
  layout: "DesktopMenu",
  middleware: "autologin",
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
        img {
          width: 100px;
          height: 100px;
          border-radius: 5px;
        }
      }
    }
  }
}
@media (min-width: 1024px) {
  .container {
    h1 {
      display: none;
    }
    .gallery {
      margin: 12rem auto 4rem auto;
    }
  }
}
</style>