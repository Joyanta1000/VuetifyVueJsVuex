import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cart',
    component: () => import('../components/others/Cart.vue')
  },
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
