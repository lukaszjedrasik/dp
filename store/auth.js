export const state = () => ({
  isLoggin: false,
  email: null,
  token: null
});

export const mutations = {
  SET_AUTH(state, payload) {
    state.isLoggin = !payload.isLoggin;
    state.email = payload.email;
    state.token = payload.token;
  },
  CLEAR_LOGIN_DATA(state) {
    state.isLoggin = false;
    state.email = null;
    state.token = null;
  }
};

export const actions = {
  async login({ commit }, payload) {
    try {
      let response = await this.$axios.$post(
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBeprvPGfR5_ZNQol5bG814We3KPIivjQg",
        payload
      );
      this.$router.push("/admin/panel");
      commit("SET_AUTH", {
        email: response.email,
        token: response.idToken
      });

      localStorage.setItem("token", response.idToken);
      localStorage.setItem("email", response.email);
    } catch (error) {
      console.log(error);
    }
  },

  logout({ commit }) {
    localStorage.removeItem("token"),
      localStorage.removeItem("email"),
      commit("CLEAR_LOGIN_DATA");
    this.$router.replace("/");
  }
};
