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
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Living-room',
    name: 'Living-room',
    component: Livingroom
  },
  {
    path: '/Dining-room',
    name: 'Dining-room',
    component: DiningRoom
  },
  {
    path: '/Beb-room',
    name: 'Beb-room',
    component: BebRoom
  },
  {
    path: '/Work-room',
    name: 'Work-room',
    component: WorkRoom
  },
  {
    path: '/Kitchen',
    name: 'Kitchen',
    component: Kitchen
  },
  {
    path: '/Decorations',
    name: 'Decorations',
    component: Decorations
  },
  {
    path: '/News',
    name: 'News',
    component: News
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  },
  
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
