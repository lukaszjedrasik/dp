export const state = () => ({
  hamburger: false
});

export const mutations = {
  HAMBURGER_ON_OFF(state) {
    state.hamburger = !state.hamburger;
  }
};
