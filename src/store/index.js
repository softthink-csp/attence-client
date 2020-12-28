import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    routes: [],
    userName: ""
  },
  mutations: {
    initRoutes(state, data) {
      this.state.routes = data;
    },
    saveUserInfo(state, userName) {
      this.state.userName = userName;
    }
  },
  actions: {},
  modules: {},
  strict: process.env.NODE_ENV !== 'production'
});
