export const state = () => ({
  isLoggin: false,
  email: null,
  token: null
});

export const mutations = {
  SET_AUTH(state, payload) {
    state.isLoggin = !state.isLoggin;
    state.email = payload.email;
    state.token = payload.token;
  }
};

export const actions = {
  async login({ commit }, payload) {
    try {
      let response = await this.$axios.$post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBeprvPGfR5_ZNQol5bG814We3KPIivjQg",
        payload
      );
      console.log(response);
      commit("SET_AUTH", {
        email: response.email,
        token: response.idToken
      });
    } catch (error) {
      console.log(error);
    }
  }
};
