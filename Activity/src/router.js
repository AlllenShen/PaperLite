import Vue from 'vue'
import Router from 'vue-router'
import detail from './views/detail.vue'
import ideaDetail from './views/ideaDetail.vue'
import mine from './views/mine.vue'
import actList from './components/activityList'
import explore from './views/explore'
import home from './views/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'explore',
      path: '/explore',
      component: explore
    },
    {
      name: 'home',
      path: '/home',
      component: home
    },
    {
      name: 'mine',
      path: '/mine',
      component: mine
    },
    {
      name: 'idea',
      path: '/idea',
      component: ideaDetail
    },
    {
      name: 'detail',
      path: '/detail',
      component: detail
    }
  ]
})