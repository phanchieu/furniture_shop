import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/auth/login.vue'
import Register from '../views/auth/register.vue'
import Livingroom from '../views/category/livingRoom.vue'
import DiningRoom from '../views/category/diningRoom.vue'
import BebRoom from '../views/category/bebRoom.vue'
import WorkRoom from '../views/category/workRoom.vue'
import Kitchen from '../views/category/kitchen.vue'
import Decorations from '../views/category/decorations.vue'
import News from '../views/news/news.vue'
import Contact from '../views/contact/contact.vue'
import Cart from '../views/cart/cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Đăng nhập',
    component: Login
  },
  {
    path: '/Register',
    name: 'Đăng ký',
    component: Register
  },
  {
    path: '/Living-room',
    name: 'Phòng khách',
    component: Livingroom
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
    path: '/Cart',
    name: 'Giỏ hàng',
    component: Cart
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
