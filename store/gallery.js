export const state = () => ({
  photos: [],
  loader: null
});

export const mutations = {
  SET_IMAGES(state, res) {
    state.photos = res;
  },
  SET_LOADER(state, payload) {
    state.loader = payload;
  }
};

export const actions = {
  async downloadImages({ commit }) {
    try {
      commit("SET_LOADER", true);
      let res = await this.$axios.$get(
        "https://dusiowe-pazurki.firebaseio.com/images.json"
      );
      const obj = res;
      const result = Object.keys(obj).map(key => {
        return obj[key];
      });
      commit("SET_IMAGES", result);
      commit("SET_LOADER", false);
    } catch (error) {
      console.log(error);
    }
  }
};
