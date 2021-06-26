import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/defi',
    name: 'Defi',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Defi.vue')
    },
    // children: [
    //   {
    //     path: '/uniswap3-testing',
    //     name: 'Uniswap3Testing',
    //     component: function () {
    //       return import('../views/Uniswap3Testing.vue')
    //     }
    //   },
    // ]
  }
]

const router = new VueRouter({
  routes
})

export default router