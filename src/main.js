import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import ElementUI from 'element-ui'
import '../theme/index.css'
Vue.config.productionTip = false
Vue.use(VueLazyload, {
  // preLoad: 1.3,
  // error: 'dist/error.png',
  loading: '/static/images/lazyload@2x.gif'
  // attempt: 1
})
Vue.use(ElementUI)
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
