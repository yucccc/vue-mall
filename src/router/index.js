import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['/page/index'], resolve)
const Login = resolve => require(['/page/login'], resolve)
const Home = resolve => require(['/page/Home/home'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [{
        path: 'home', component: Home
      }]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '*', redirect: '/home'}
  ]
})
