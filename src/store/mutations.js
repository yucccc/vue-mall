import {
  INIT_BUYCART,
  ADD_CART,
  GET_USERINFO,
  RECORD_USERINFO,
  ADD_ANIMATION,
  SHOW_CART,
  REDUCE_CART
} from './mutation-types'
import {setStore, getStore} from '../utils/storage'
export default {
  // 网页初始化时从本地缓存获取购物车数据
  [INIT_BUYCART] (state) {
    let initCart = getStore('buyCart')
    if (initCart) {
      state.cartList = JSON.parse(initCart)
    }
  },
  // 加入购物车
  [ADD_CART] (state, {productId, productPrice, productName, productImg}) {
    let cart = state.cartList // 购物车
    let falg = true
    let goods = {
      productId,
      productPrice,
      productName,
      productImg
    }
    if (cart.length) {        // 有内容
      cart.forEach(item => {
        if (item.productId === productId) {
          if (item.productNum >= 0) {
            falg = false
            item.productNum++
          }
        }
      })
    }
    if (!cart.length || falg) {
      goods.productNum = 1
      goods.checked = '1'
      cart.push(goods)
    }
    state.cartList = cart
    // 存入localStorage
    setStore('buyCart', cart)
  },
  // 加入购物车动画
  [ADD_ANIMATION] (state, {moveShow, elLeft, elTop, img, cartPositionT, cartPositionL, receiveInCart}) {
    state.showMoveImg = moveShow
    if (elLeft) {
      state.elLeft = elLeft
      state.elTop = elTop
    }
    state.moveImgUrl = img
    state.receiveInCart = receiveInCart
    if (cartPositionT) {
      state.cartPositionT = cartPositionT
      state.cartPositionL = cartPositionL
    }
  },
  // 是否显示购物车
  [SHOW_CART] (state, {showCart}) {
    // let timer = null
    state.showCart = showCart
    // clearTimeout(timer)
    // if (showCart) {
    //   timer = setTimeout(() => {
    //     state.showCart = false
    //   }, 5000)
    // }
  },
  // 移除商品
  [REDUCE_CART] (state, {shopId, goodsId}) {
    let cart = state.cartList //  商品
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i]
      let shop = item['shopId']
      let goods = item['goods']
      if (shop === shopId) {
        if (goods.length) { // 如果有商品
          for (let j = 0; j < goods.length; j++) { // 遍历商品
            if (goods[j]['id'] === goodsId) { // 找到对应商品
              let num = goods[j]['num'] // 当前数量
              if (num > 0) {
                goods[j]['num']--
              } else {
                goods = null
              }
              break
            }
          }
        } else {
          goods = null
        }
      }
    }
    state.cartList = cart
    // 存入localStorage
    setStore('buyCart', state.cartList)
  },
  // 记录用户信息
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setStore('userInfo', info)
  },
  // 获取用户信息
  [GET_USERINFO] (state, info) {
    if (state.userInfo && (state.userInfo.username !== info.username)) {
      return
    }
    if (!state.login) {
      return
    }
    if (!info.message) {
      state.userInfo = {...info}
    } else {
      state.userInfo = null
    }
  }
}
