import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters,
  modules: {
    home: home
  }
})