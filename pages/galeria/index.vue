<template>
  <div class="container">
    <Hamburger></Hamburger>

    <div class="gallery">
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
import LightBox from "vue-image-lightbox";

export default {
  components: { Hamburger, LightBox },
  transition: "slide",
  layout: "DesktopMenu",
  data() {
    return {
      nails: [
        {
          thumb:
            "https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg",
          src:
            "https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg"
        },
        {
          thumb:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1520546583/four-seasons-resort-oahu-hawaii-POOLVIEW0318.jpg?itok=9KF4MOHV",
          src:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1520546583/four-seasons-resort-oahu-hawaii-POOLVIEW0318.jpg?itok=9KF4MOHV"
        },
        {
          thumb:
            "https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg",
          src:
            "https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg"
        },
        {
          thumb:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1520546583/four-seasons-resort-oahu-hawaii-POOLVIEW0318.jpg?itok=9KF4MOHV",
          src:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1520546583/four-seasons-resort-oahu-hawaii-POOLVIEW0318.jpg?itok=9KF4MOHV"
        },
        {
          thumb:
            "https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg",
          src:
            "https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg"
        },
        {
          thumb:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1520546583/four-seasons-resort-oahu-hawaii-POOLVIEW0318.jpg?itok=9KF4MOHV",
          src:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1520546583/four-seasons-resort-oahu-hawaii-POOLVIEW0318.jpg?itok=9KF4MOHV"
        },
        {
          thumb:
            "https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg",
          src:
            "https://www.virginexperiencedays.co.uk/content/img/product/large/the-view-from-the-12102928.jpg"
        },
        {
          thumb:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1520546583/four-seasons-resort-oahu-hawaii-POOLVIEW0318.jpg?itok=9KF4MOHV",
          src:
            "https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1520546583/four-seasons-resort-oahu-hawaii-POOLVIEW0318.jpg?itok=9KF4MOHV"
        }
      ]
    };
  },
  methods: {
    openGallery(index) {
      console.log(index);
      this.$refs.lightbox.showImage(index);
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