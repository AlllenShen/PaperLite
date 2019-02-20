<template>
  <div id="ItemList">
    <div class="idea">想法</div>
    <IdeaCard  v-bind:IdeaLists="IdeaLists"></IdeaCard><br>
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
          type:'我的想法是',
          word:'************',
          goodNumber:'25',
          commentNumber:'30'
        },
        {
          ideakey:2,
          type:'我建议',
          word:'************',
          goodNumber:'25',
          commentNumber:'30'
        },
        {
          ideakey:3,
          type:'我的想法是',
          word:'*********************************************************************************',
          goodNumber:'25',
          commentNumber:'30'
        }        
      ],
      CommentLists:[
        {
          commentkey:1,
          comment:'很好的活动',
          time:'2019年1月25日',
          title:'计算机与信息学院趣味代码大赛'
        },
        {
          commentkey:2,
          comment:'我喜欢这个想法',
          time:'2019年1月2日',
          title:'我建议****************************************************************************'
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
  width: 100%;
  height: 180px;
  padding: 10px 10px;
  color: #4a4a48;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.idea{
  position:relative;
  left:10px;
  height:20px;
  width:100%;
  font-size:20px;
  text-align: left;
  font-weight:bold; 
}
.Comment{
  position:relative;
  left:10px;
  height:5px;
  width:100%;
  text-align: left;
  font-size:20px;
  font-weight:bold; 
}
</style>

