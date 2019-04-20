export const state = () => ({
  photos: [],
  loader: null
});

export const mutations = {
  SET_IMAGES(state, payload) {
    state.photos = payload;
  },
  SET_LOADER(state, payload) {
    state.loader = payload;
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
  delete({ state }, index) {
    try {
      this.$axios.$delete(process.env.baseUrl + `/images/${index}.json`);
    } catch (error) {
      console.log(error);
    }
  }
};
