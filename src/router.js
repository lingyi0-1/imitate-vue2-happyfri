import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Item from './views/Item'
import Score from './views/Score'


Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          component: Home,
      },
      {
          path: '/item',
          component: Item,
      },
      {
          path: '/score',
          component: Score,
      }
  ]
})
