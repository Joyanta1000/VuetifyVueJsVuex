import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cart',
    component: () => import('../components/Cart.vue')
  },
  {
    path: '/Shopping',
    name: 'Shopping',
    component: () => import('../components/Shopping.vue')
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router