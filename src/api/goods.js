import http from './public'
// 电脑列表
export const getComputer = (params) => {
  return http.fetchGet('/goods/computer', params)
}
// 未登录获取购物车
export const getCartList = (params) => {
  return http.fetchPost('/users/cartList', params)
}
