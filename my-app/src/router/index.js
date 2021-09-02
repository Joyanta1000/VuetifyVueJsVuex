import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/Photos.vue')
  },
  {
    path: '/myStore',
    name: 'myStore',
    component: () => import('../views/myStore.vue')
  },
  {
    path: '/ProductList',
    name: 'ProductList',
    component: () => import('../components/ProductList.vue')
  },
  {
    path: '/TodoForm',
    name: 'TodoForm',
    component: () => import('../components/TodoForm.vue')
  },
  {
    path: '/TodoList',
    name: 'TodoList',
    component: () => import('../components/TodoList.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

// import Vue from "vue";
// import Router from "vue-router";

// const routerOptions = [
//   { path: "/signin", component: "SignIn" },
//   { path: "/signup", component: "SignUp" },
//   { path: "/home", component: "Home", meta: { requiresAuth: true } }
// ];

// const routes = routerOptions.map(route => {
//   return {
//     ...route,
//     component: () => import(`../views/${route.component}.vue`)
//   };
// });

// Vue.use(Router);

// export default new Router({
//   mode: "history",
//   routes
// });
