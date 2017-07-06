import http from './public'
// 电脑列表
export const getComputer = (params) => {
  return http.fetchGet('/goods/computer', params)
}
