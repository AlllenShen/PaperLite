<template>
  <div id="ItemList">
    <div class="idea">
     <h3>想法</h3>
    </div>
    <IdeaCard  v-bind:IdeaLists="IdeaLists"></IdeaCard><br>
    <div class="Comment">
      <div class="Outline"></div>
      <h3>评论</h3>
    </div><br>
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
          word:'************',
          goodNumber:'25',
          commentNumber:'30'
        }        
      ],
      CommentLists:[
        {
          commentkey:1,
          comment:'很好的活动',
          time:'2019年1月25日',
          type:'活动',
          title:'计算机与信息学院趣味代码大赛'
        },
        {
          commentkey:2,
          comment:'我喜欢这个想法',
          time:'2019年1月2日',
          type:'想法',
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
  margin-bottom: 10px;
}
.idea{
  position:relative;
  left:10px;
  height:20px;
  width:100%;
  text-align: left;
}
.Outline{
  outline:#f6f6f5 solid 5px;
}
.Comment h3{
  position:relative;
  left:10px;
  height:5px;
  width:100%;
  text-align: left;
}
</style>

