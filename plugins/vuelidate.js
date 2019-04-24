import Vue from "vue";
import Vuelidate from "vuelidate";

if (process.client) {
  Vue.use(Vuelidate);
}
