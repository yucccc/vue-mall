import http from './public'
// 轮播图
export const getBanner = () => {
  return http.fetchGet('/banner')
}
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/users/login', params)
}
// 退出登陆
export const loginOut = (params) => {
  return http.fetchPost('/users/loginOut', params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchPost('/users/userInfo', params)
}
// 首页接口
export const productHome = (params) => {
  return http.fetchGet('/goods/productHome', params)
}

