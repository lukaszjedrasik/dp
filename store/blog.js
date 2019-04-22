import Vue from "vue";

export const state = () => ({
  posts: {}
});

export const mutations = {
  SET_POSTS(state, payload) {
    state.posts = payload;
  },
  ADD_POST(state, payload) {
    Vue.set(state.posts, payload.key, payload);
  },
  UPDATE_POST(state, payload) {
    Vue.set(state.posts, payload.key, payload);
  },
  DELETE_POST(state, index) {
    Vue.delete(state.posts, index);
  }
};

export const actions = {
  async removePost({ commit }, index) {
    try {
      this.$axios.$delete(process.env.baseUrl + "/posts/" + index + ".json");
    } catch (error) {
      console.log(error);
    }
  },
  async getNewPost({ commit }, payload) {
    try {
      let res = await this.$axios.$post(process.env.baseUrl + "/posts.json", {
        ...payload
      });
      commit("ADD_POST", {
        ...res,
        key: res.name,
        ...payload
      });

      this.$router.push("/admin/panel/blog");
    } catch (error) {
      console.log(error);
    }
  },
  async editPost({ commit }, payload) {
    try {
      let res = await this.$axios.$put(
        process.env.baseUrl + "/posts/" + payload.key + ".json",
        payload
      );
      commit("UPDATE_POST", {
        ...res,
        key: payload.key,
        ...payload
      });

      this.$router.push("/admin/panel/blog");
    } catch (error) {
      console.log(error);
    }
  }
};
