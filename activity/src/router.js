import Vue from 'vue'
import Router from 'vue-router'
import mine from './components/scrollCard/mine.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mine',
      component: mine
    }
  ]
})
