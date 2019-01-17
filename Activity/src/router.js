import Vue from 'vue'
import Router from 'vue-router'
import detail from './views/detail.vue'
import ideaDetail from './views/ideaDetail.vue'
import mine from './views/mine.vue'
import actList from './components/activityList'
import explore from './views/explore'
import home from './views/home'
import login from './views/login'
import tipForMail from './views/tipForMail'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'tipForMail',
      path: '/tip-for-mail',
      component: tipForMail
    }
  ],
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  }
})