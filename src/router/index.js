import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['/page/index'], resolve)
const Login = resolve => require(['/page/login/login'], resolve)
const Home = resolve => require(['/page/Home/home'], resolve)
const GoodS = resolve => require(['/page/Goods/goods'], resolve)
const goodsDetails = resolve => require(['/page/Goods/goodsDetails'], resolve)
const PerDetails = resolve => require(['/page/PerDetails/perDetails'], resolve)
const Cart = resolve => require(['/page/Cart/cart'], resolve)
const order = resolve => require(['/page/Order/order'], resolve)
const user = resolve => require(['/page/User/user'], resolve)
const checkout = resolve => require(['/page/Checkout/checkout'], resolve)
const payment = resolve => require(['/page/Order/payment'], resolve)
const paysuc = resolve => require(['/page/Order/paysuccess'], resolve)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [
        {path: 'home', component: Home},
        {path: 'goods', component: GoodS}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/goodsDetails/:productId', name: 'goodsDetails', component: goodsDetails},
    {path: '/perDetails', name: 'perDetails', component: PerDetails},
    {path: '/cart', name: 'cart', component: Cart},
    {path: '/order', name: 'order', component: order},
    {path: '/order/payment', name: 'payment', component: payment},
    {path: '/order/paysuc', name: 'paysuc', component: paysuc},
    {path: '/user', name: 'user', component: user},
    {path: '/checkout', name: 'checkout', component: checkout},
    {path: '*', redirect: '/home'}
  ]
})
