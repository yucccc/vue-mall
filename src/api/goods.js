import http from './public'
// 电脑列表
export const getComputer = (params) => {
  return http.fetchGet('/goods/computer', params)
}
// 加入购物车
export const addCart = (params) => {
  return http.fetchPost('/goods/addCart', params)
}
