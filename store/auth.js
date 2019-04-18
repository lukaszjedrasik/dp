import Cookie from "js-cookie";

export const state = () => ({
  isLoggin: null,
  email: null,
  token: null
});

export const mutations = {
  SET_AUTH(state, payload) {
    state.isLoggin = payload.isLoggin;
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
      commit("SET_AUTH", {
        email: response.email,
        token: response.idToken,
        isLoggin: true
      });

      localStorage.setItem("emailLocalStorage", response.email);
      localStorage.setItem("tokenLocalStorage", response.idToken);

      Cookie.set("jwt", response.idToken);
      Cookie.set("emailCookie", response.email);

      this.$router.push("/admin/panel");
    } catch (error) {
      console.log(error);
    }
  },

  autologin(vuexContext, req) {
    let token;
    let email;

    if (req) {
      if (!req.headers.cookie) {
        return;
      }
      const jwtCookie = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("jwt="));
      if (!jwtCookie) {
        return;
      }
      token = jwtCookie.split("=")[1];

      email = req.headers.cookie
        .split(";")
        .find(c => c.trim().startsWith("emailCookie="))
        .split("=")[1];
      vuexContext.commit("SET_AUTH", {
        email,
        token,
        isLoggin: true
      });
    } else {
      email = localStorage.getItem("emailLocalStorage");
      token = localStorage.getItem("tokenLocalStorage");
      vuexContext.commit("SET_AUTH", {
        email,
        token,
        isLoggin: true
      });
    }
  },

  logout({ commit }) {
    commit("CLEAR_LOGIN_DATA");
    localStorage.removeItem("emailLocalStorage");
    localStorage.removeItem("tokenLocalStorage");
    Cookie.remove("emailCookie");
    Cookie.remove("jwt");
    this.$router.replace("/");
  }
};
