import Vue from 'vue'
import Router from 'vue-router'

import actList from './components/activityList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'explore',
      path: '/explore',
      component: actList
    }
  ]
})
