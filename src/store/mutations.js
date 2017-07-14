import {
  INIT_BUYCART,
  ADD_CART,
  GET_USERINFO,
  RECORD_USERINFO,
  ADD_ANIMATION,
  SHOW_CART
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
  // 未登录情况下加入购物车
  [ADD_CART] (state, {shopId, goodsId, price, name, img}) {
    let cart = state.cartList // 购物车
    var goods = {
      'name': name,
      'id': goodsId,
      'num': 1,
      'price': price,
      'img': img
    }
    let flag = true
    if (cart.length) {
      for (let i = 0; i < cart.length; i++) {
        let item = cart[i]
        // 店铺id
        if (item['shopId'] === shopId) { // 找到对应的店铺
          flag = false
          let flag1 = true
          let goodsArr = item['goods']
          if (goodsArr.length) {
            for (let j = 0; j < goodsArr.length; j++) {
              let goodsArrj = goodsArr[j]
              if (goodsArrj['id'] === goodsId) { // 已经存在此商品
                goodsArrj['num']++
                flag1 = false
                break
              }
            }
            if (flag1) {
              goodsArr.push(goods)
            }
          } else {
            // 该店铺good列表为空
            console.log('该店铺good列表为空')
          }
        }
      }
      if (flag) {
        cart.push({
          shopId: shopId,
          goods: [goods]
        })
      }
    } else {
      cart.push({
        shopId: shopId,
        goods: [goods]
      })
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
  [SHOW_CART] (state, {showCart}) {
    let timer = null
    state.showCart = showCart
    clearTimeout(timer)
    if (showCart) {
      timer = setTimeout(() => {
        state.showCart = false
      }, 5000)
    }
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
