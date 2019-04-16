import Vue from "vue";
import VueLazyLoad from "vue-lazyload";
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

if (process.client) {
  Vue.use(VueLazyLoad);
}
