import { createStore } from 'vuex';

export default createStore({
  state: {
    activeTab: null,
  },
  mutations: {
    setActiveTab(state, tabName) {
      state.activeTab = tabName;
    },
  },
  actions: {
    setActiveTab({ commit }, tabName) {
      commit('setActiveTab', tabName);
    },
  },
});