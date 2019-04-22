export const state = () => ({
  posts: []
});

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload;
  }
};

export const actions = {
  removePost({ state }, index) {
    try {
      this.$axios.$delete(process.env.baseUrl + "/posts/" + index + ".json");
    } catch (error) {
      console.log(error);
    }
  }
};
