import Vue from 'vue'
import Router from 'vue-router'
const detail = () => import('@/views/detail.vue')
const ideaDetail = () => import('@/views/ideaDetail.vue')
const mine = () => import('@/views/mine.vue')
const explore = () => import('@/views/explore.vue')
const home = () => import('@/views/home.vue')
const login = () => import('@/views/login.vue')
const tipForMail = () => import('@/views/tipForMail.vue')
const information = () => import('@/views/information.vue')
const nickname = () => import('@/views/nickname.vue')
const main = () => import('@/views/main.vue')
const photo = () => import('@/views/photo.vue')
const myHistory = () => import('@/components/myHistory')
const search = () => import('@/components/search')

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
      path: '/detail/:projectID',
      component: detail,
      meta: {
        title: '活动详情'
      }
    },
    {
      name: 'login',
      path: '/login',
      component: login,
      meta: {
        title: '登录'
      }
    },
    {
      name: 'tipForMail',
      path: '/tip-for-mail',
      component: tipForMail
    },
    {
      name: 'information',
      path: '/information',
      component: information
    },
    {
      name: 'nickname',
      path: '/nickname',
      component: nickname
    },
    {
      name: 'me',
      path: '/me',
      component: myHistory
    },
    {
      name: 'test',
      path: '/test',
      component: search
    },
    {
      name: 'main',
      path: '/',
      component: main,
      meta: {
        title: '不纸 - 主页'
      }
    },
    {
      name: 'photo',
      path: '/photo',
      component: photo
    },
  ],
  // eslint-disable-next-line
  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  }
})