import Vue from 'vue'
import Router from 'vue-router'
 
//懒加载方式，当路由被访问的时候才加载对应组件
const ItemList = resolve => require(['@/components/my-history/ItemList'], resolve)
const IdeaCard = resolve => require(['@/components/my-history/IdeaCard'], resolve) 
const CommentCard = resolve => require(['@/components/my-history/CommentCard'], resolve)

 
Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: '记录',
      component: ItemList
    },
    {
      path: '/',
      name: '想法',
      component: IdeaCard
    },
    {
      path: '/',
      name: '评论',
      component: CommentCard
    }
  ]
})

