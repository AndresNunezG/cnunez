import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      view: '',
    };
  },
  mutations: {
    changeView(state, payload) {
      state.view = payload;
    },
  },
});

export default store;
