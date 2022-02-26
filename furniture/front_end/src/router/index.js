import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Livingroom from '../views/category/livingRoom.vue'
import DiningRoom from '../views/category/diningRoom.vue'
import BebRoom from '../views/category/bedRoom.vue'
import WorkRoom from '../views/category/workRoom.vue'
import Kitchen from '../views/category/kitchen.vue'
import Decorations from '../views/category/decorations.vue'
import News from '../views/news/news.vue'
import Contact from '../views/contact/contact.vue'
import Cart from '../views/cart/cart.vue'
import Pay from '../views/cart/pay.vue'
import ViewProduct from '../views/viewProduct/viewProduct.vue'
import viewNews from '../views/news/viewNews.vue'
import pay_success from '../views/cart/pay_success.vue'
import Info_product_order from '../views/auth/Info_product_order.vue'
import search_product from '../views/category/search_product.vue'
import all_product from '../views/category/all_products.vue'
import test from '../components/test.vue'
//vuex
import store from '../store/index.js'
//

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: test
  },
  {
    path: '/Login',
    name: 'Đăng nhập',
    component: Login,
    meta:{Auth:JSON.parse(localStorage.getItem('login'))},
    beforeEnter: (to,from,next)=>{
      if(to.matched.some(record => record.meta.Auth)== true){
        next('/')
      }else{
        next()
        // console.log(to)
      }
    }
  },
  {
    path: '/Register',
    name: 'Đăng ký',
    component: Register,
    meta:{Auth:JSON.parse(localStorage.getItem('login'))},
    beforeEnter: (to,from,next)=>{
      if(to.matched.some(record => record.meta.Auth)== true){
        next('/')
      }else{
        next()
        // console.log(to)
      }
    }
  },
  {
    path: '/Living-room',
    name: 'Phòng khách',
    component: Livingroom,
  },
  {
    path: '/Dining-room',
    name: 'Phòng ăn',
    component: DiningRoom
  },
  {
    path: '/Beb-room',
    name: 'Phòng ngủ',
    component: BebRoom
  },
  {
    path: '/Work-room',
    name: 'Phòng làm việc',
    component: WorkRoom
  },
  {
    path: '/Kitchen',
    name: 'Bếp',
    component: Kitchen
  },
  {
    path: '/Decorations',
    name: 'Đồ trang trí',
    component: Decorations
  },
  {
    path: '/News',
    name: 'Tin tức',
    component: News,
  },
  
  {
    path: '/Contact',
    name: 'Liên hệ',
    component: Contact
  },
  {
    path: '/AllProducts',
    name: 'Tất cả sản phẩm',
    component: all_product
  },
  {
    path: '/Cart',
    name: 'Giỏ hàng',
    component: Cart,
    meta:{Auth: true},
    beforeEnter: (to,from,next)=>{
      // console.log(to.matched)
      // let requiresAuth = store.state.user_login
      if(to.matched.some(record => record.meta.Auth) == store.state.user_login){
        next()
      }else{
        next('/Login')
      }
    }
  },
  {
    path:'/Cart/Pay',
    name:'Thanh toán',
    component: Pay,
    meta:{Auth: true},
    beforeEnter: (to,from,next)=>{
      if(to.matched.some(record => record.meta.Auth) == store.state.user_login){
          next()
      }else{
        next('/')
      }
    }
  },
  {
    path:'/View-product',
    name:'Sản phẩm',
    component: ViewProduct,
    meta:{Auth: true},
    beforeEnter: (to,from,next)=>{
      if(to.matched.some(record => record.meta.Auth) == store.state.user_login){
        next()
      }else{
        next('/Login')
      }
    }
  },
  {
    path:'/View-news',
    name:'Đọc tin tức',
    component: viewNews,
  },
  {
    path:'/Pay-success',
    name:'Đặt hàng thành công',
    component: pay_success,
    meta:{Auth: true},
    beforeEnter: (to,from,next)=>{
      if(to.matched.some(record => record.meta.Auth) == store.state.user_login){
        next()
      }else{
        next('/Login')
      }
    }
  },
  {
    path:'/Info-product-order',
    name:'Thông tin đơn hàng',
    component: Info_product_order,
    meta:{Auth: true},
    beforeEnter: (to,from,next)=>{
      if(to.matched.some(record => record.meta.Auth) == store.state.user_login){
        next()
      }else{
        next('/Login')
      }
    }
  },
  {
    path: '/Search',
    name: 'Tìm kiếm sản phẩm',
    component: search_product
  },
  // {
  //   path: '/Cart',
  //   name: 'Giỏ hàng',
  //   component: Cart,
  //   meta:{requiresAuth: true},
  //   beforeEnter: (to,from,next)=>{
  //     // console.log(to.matched)
  //     // let requiresAuth = store.state.user_login
  //     if(to.matched.some(record => record.meta.requiresAuth) == store.state.user_login){
  //       next()
  //     }else{
  //       next('/Login')
  //     }
  //   }
  // },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
// router.beforeEach( (to,from,next)=>{
//   let requiresAuth = true
//   if(to.matched.some(record => record.meta.requiresAuth)){
//     if(requiresAuth){
//       next();
//     }
//     else{router.replace('/Login')}
//   }
// });
// router.beforeEach( (to,from,next)=>{
//   if(to.matched.some(record => record.meta.requiresAuth) ==! store.state.user_login){
//     next('/')
//   }else{
//     next()
//   }
// });

export default router
