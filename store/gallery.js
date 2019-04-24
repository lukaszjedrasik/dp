import Vue from "vue";

export const state = () => ({
  photos: {},
  loader: null
});

export const mutations = {
  SET_IMAGES(state, payload) {
    state.photos = payload;
  },
  ADD_IMG(state, payload) {
    Vue.set(state.photos, payload.key, payload);
  },
  SET_LOADER(state, payload) {
    state.loader = payload;
  },
  DELETE_IMG(state, payload) {
    Vue.delete(state.photos, payload);
  }
};

export const actions = {
  async downloadImages({ commit }) {
    try {
      commit("SET_LOADER", true);
      let res = await this.$axios.$get(process.env.baseUrl + "/images.json");
      commit("SET_IMAGES", res);
      commit("SET_LOADER", false);
    } catch (error) {
      console.log(error);
    }
  },
  delete(context, index) {
    try {
      this.$axios.$delete(process.env.baseUrl + `/images/${index}.json`);
    } catch (error) {
      console.log(error);
    }
  },
  async newImg({ commit }, payload) {
    try {
      let res = await this.$axios.$post(
        process.env.baseUrl + "/images.json",
        payload
      );
      commit("ADD_IMG", {
        ...res,
        key: res.name,
        ...payload
      });
      this.$router.push("/admin/panel/galeria");
    } catch (error) {
      console.log(error);
    }
  }
};
