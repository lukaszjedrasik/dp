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

export const actions = {};
