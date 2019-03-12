<template>
  <div id="ItemList">
    <div class="idea">想法</div>
    <IdeaCard  v-bind:IdeaLists="IdeaLists"></IdeaCard><br>
    <div class="bar"></div>
    <div class="Comment">评论</div><br>
    <CommentCard v-bind:CommentLists="CommentLists"></CommentCard>
  </div>
</template>

<script>
import IdeaCard from './IdeaCard.vue'
import CommentCard from './CommentCard.vue'
export default {
  components: {
    'IdeaCard':IdeaCard,
    'CommentCard':CommentCard
  },
  data () {
    return {
      IdeaLists: [
        {
          ideakey:1,
          name:'张三',
          word:'举办一个偏向于学术交流的活动',
          time:'2019-1-2',
          goodNumber:'25',
          commentNumber:'30'
        },
        {
          ideakey:2,
          name:'张三',
          time:'2018-12-2',
          word:'我有个想法，通过学生投标的方式选择举办新活动',
          goodNumber:'25',
          commentNumber:'30'
        },
        {
          ideakey:3,
          name:'张三',
          time:'2018-11-2',
          word:'可以和合肥的其他学校一起竞赛类活动',
          goodNumber:'25',
          commentNumber:'30'
        }        
      ],
      CommentLists:[
        {
          commentkey:1,
          name:'张三',
          time:'2019-1-25',
          comment:'这个活动的结构太单一',          
          title:'趣味代码大赛'
        },
        {
          commentkey:2,
          name:'张三',
          time:'2019-1-25',
          comment:'这个想法我赞同',          
          title:'和社会上的公益组织联系做一些公益活动'
        },
      ]
    }
  },
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {} 
}
</script>

<style scoped>
.ItemList {
  display: flex;
  height: 180px;
  color: #4a4a48;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.idea{
  position:relative;
  padding-left: 20px;
  width: 40px;
  height: 28px;
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  font-family: PingFangSC-bold;
  line-height: 28px;
  margin-block-end: 10px;
}
.Comment{
  position:relative;
  padding-left: 20px;
  width: 40px;
  height: 28px;
  color: rgba(16, 16, 16, 1);
  font-size: 20px;
  text-align: left;
  font-weight: bold;
  font-family: PingFangSC-bold;
  line-height: 28px;
}
.bar{
  position: relative;
  height:10px;
  background-color: rgba(246, 246, 245, 1);
  margin-bottom: 20px;  
  margin-left: -30px;
  margin-right: -30px;
}
</style>

