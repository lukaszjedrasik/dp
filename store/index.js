export const actions = {
  async nuxtServerInit(vuexContext, context) {
    if (!process.client) {
      console.log(context.req);
    }
    try {
      let res = await this.$axios.$get(process.env.baseUrl + "/posts.json");
      vuexContext.commit("blog/SET_POSTS", res);
    } catch (error) {
      console.log(error);
    }
  }
};
