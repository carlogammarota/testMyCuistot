import Vue from 'vue'
import App from './App.vue'
import '@/assets/tailwind.css'
import VModal from 'vue-js-modal'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
Vue.use(VModal)
Vue.config.productionTip = false


const store = new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    UPDATE(state, payload) {
      state.items = payload;
    }
  },
  actions: {
    updateStore({ commit }, payload) {
      commit('UPDATE', payload);
    }
  },
  getters: {
    getItems: state => state.items
  },
  plugins: [createPersistedState()],
}
);


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
