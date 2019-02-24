import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Winning from '@/views/Winning'
import All from '@/views/All'
import Player from '@/views/Player'
import store from '@/store'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: `/ale/`
    },
    {
      path: '/:id/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:id/winning',
      name: 'Winning',
      component: Winning,
      meta: {
        title: 'SSDL | Winning Bids'
      }
    },
    {
      path: '/:id/all',
      name: 'All',
      component: All,
      meta: {
        title: 'SSDL | All Bids'
      }
    },
    {
      path: '/:id/player',
      name: 'Player',
      component: Player,
      meta: {
        title: 'SSDL | Bids by Player'
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'SSDL'
  next()
})

export { router }