import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    userJWT: "",
    userName: "",
  },
  mutations: {
    login(state) {
      state.isLogged = true;
    },
    logoff(state) {
      state.isLogged = false;
    },
    setJWT(state, jwt) {
      state.userJWT = jwt;
    },
    setUserName(state, name) {
      state.userName = name;
    },
  },
  actions: {},
  modules: {},
});
