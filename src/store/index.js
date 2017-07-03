import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let state = {
  login: false
}

const mutations = {}
export default new Vuex.Store({
  state,
  mutations
})
