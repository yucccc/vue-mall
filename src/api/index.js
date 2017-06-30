import http from './public'
export const getBanner = () => {
  return http.fetchGet('/banner')
}
