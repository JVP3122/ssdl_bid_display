import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Old from '@/views/Old'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/ssdl',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:id',
      name: 'Old',
      component: Old
    },
  ]
})
