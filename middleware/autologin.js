export default function(context) {
  context.store.dispatch("auth/autologin", context.req);
}
