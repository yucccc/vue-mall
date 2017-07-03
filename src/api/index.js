import http from './public'
// 轮播图
export const getBanner = () => {
  return http.fetchGet('/banner')
}
// 登陆
export const userLogin = (params) => {
  return http.fetchPost('/users/login', params)
}
