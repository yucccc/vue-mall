import http from './public'
const baseUrl = '/api'
// 登陆
export const userLogin = (params) => {
  return http.fetchPost(`${baseUrl}/users/login`, params)
}
// 退出登陆
export const loginOut = (params) => {
  return http.fetchPost(`${baseUrl}/users/loginOut`, params)
}
// 用户信息
export const userInfo = (params) => {
  return http.fetchPost(`${baseUrl}/users/userInfo`, params)
}
// 注册账号
export const register = (params) => {
  return http.fetchPost(`${baseUrl}/users/register`, params)
}
// 上传图片
export const upload = (params) => {
  return http.fetchPost(`${baseUrl}/users/upload`, params)
}
// 修改头像
export const updateheadimage = (params) => {
  return http.fetchPost(`${baseUrl}/users/updateheadimage`, params)
}
// 首页接口
export const productHome = (params) => {
  return http.fetchGet(`${baseUrl}/goods/productHome`, params)
}

