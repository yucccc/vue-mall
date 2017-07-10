import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import action from './action'
Vue.use(Vuex)

const state = {
  login: false,   // 是否登录
  userInfo: null, // 用户信息
  cartList: {}    // 加入购物车列表
}

export default new Vuex.Store({
  state,
  action,
  mutations
})
