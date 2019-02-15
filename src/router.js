import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Winning from '@/views/Winning'
import All from '@/views/All'
import Player from '@/views/Player'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/current/'
    },
    {
      path: '/:id/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:id/winning',
      name: 'Winning',
      component: Winning
    },
    {
      path: '/:id/all',
      name: 'All',
      component: All
    },
    {
      path: '/:id/player',
      name: 'Player',
      component: Player
    }
  ]
})
