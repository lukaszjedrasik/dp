export default function({ store, req }) {
  store.dispatch("auth/autologin", req);
}
