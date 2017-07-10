import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import ElementUI from 'element-ui'
import VueCookie from 'vue-cookie'
import '../theme/index.css'
Vue.use(infiniteScroll)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/lazyload@2x.gif'
  // attempt: 1
})
Vue.use(ElementUI)
Vue.config.productionTip = false
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
