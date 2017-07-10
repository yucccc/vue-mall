import {ADD_CART} from './mutation-types'

export default {
  // 添加到购物车
  [ADD_CART] (state, shopid) {
    state.cartList = shopid
  }
}
