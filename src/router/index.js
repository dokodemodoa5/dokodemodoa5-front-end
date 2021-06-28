import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    
    name: 'Home',
    component: () => import("@/views/Home"),
    meta: {
      title: 'Dokodemodoa | The Explorer'}
  },
  {
    path: '/Test',
    name: 'Test',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Test.vue')
    },
    meta: {
      title: 'Dokodemodoa'}
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
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title = to.meta.title
  }
  next();
})

export default router
