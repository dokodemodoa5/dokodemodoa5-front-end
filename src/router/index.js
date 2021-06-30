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
    path: '/Blockchain',
    name: 'Blockchain',
    component: () => import("@/views/Blockchain"),
    meta: {
      title: 'Blockchain | The Explorer'}
  },
  {
    path: '/Layer2',
    name: 'Layer2',
    component: () => import("@/views/Layer2"),
    meta: {
      title: 'Layer2 | The Explorer'}
  },
  {
    path: '/Defi',
    name: 'Defi',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Defi.vue')
    },
  },
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
