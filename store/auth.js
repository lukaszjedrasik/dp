import Cookie from "js-cookie";
import cookieparser from "cookieparser";

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
  SET_TOKEN(state, payload) {
    state.email = payload.email;
    state.token = payload.token;
    state.isLoggin = payload.isLoggin;
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

  autologin({ commit }, req) {
    let token;
    let email;
    let isLoggin;

    if (req) {
      if (!req.headers.cookie) {
        return (isLoggin = false);
      }

      token = cookieparser.parse(req.headers.cookie).jwt;
      email = cookieparser.parse(req.headers.cookie).emailCookie;
      isLoggin = true;

      commit("SET_TOKEN", {
        email,
        token,
        isLoggin
      });
    } else {
      email = localStorage.getItem("emailLocalStorage");
      token = localStorage.getItem("tokenLocalStorage");
      if (!token) {
        isLoggin = false;
      } else {
        isLoggin = true;
      }

      commit("SET_TOKEN", {
        email,
        token,
        isLoggin
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
