import Vuex from "vuex";
import vue from "vue";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    token: "",
    loading: false
  },
  mutations: {
    loading_show(state) {
      state.loading = true
    },
    loading_hide(state) {
      state.loading = false
    },
    update_token(state, a) {
      state.token = a;
      window.localStorage.token = a;
    }

  }
})
