export const state = () => ({
  posts: [],
  loader: null
});

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload;
  },
  SET_LOADER(state, payload) {
    state.loader = payload;
  }
};

export const actions = {
  async GET_POSTS({ commit }) {
    try {
      let res = await this.$axios.$get(process.env.baseUrl + "/posts.json");
      commit("SET_POSTS", res);
    } catch (error) {
      console.log(error);
    }
  }
};
