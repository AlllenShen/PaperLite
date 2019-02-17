<!-- 记录 评论 组件 -->

<template>
  <div class="CommentCard">
    <div class="frame" v-bind:key="commentlist.commentkey" v-for="(commentlist,index) in CommentLists">
      <div class="comment">{{commentlist.comment}}</div>
      <div class="time">{{commentlist.time}}</div>
      <div class="type" :style="{'color':fontcolor(commentlist)}">{{commentlist.type}}:</div>
      <div class="title">{{commentlist.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  props: ['CommentLists'],
  watch: {},
  methods: {
    fontcolor:function(commentlist){
            if(commentlist.type=='活动'){
                return '#ff987e'
            }
            if(commentlist.type=='想法'){
                return '#4a4a48'
            }
        }
  },
  filters: {},
  computed: {},
  created () {},
  mounted () {
    this.typeColor = {color: this.color};
  }
}
</script>

<style  scoped>
.CommentCard {
  width: 100%;
  height: 180px;
  padding: 10px 10px;
  color: #4a4a48;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-top: 1px solid #bdbdbd; 
}
.frame{
  border-bottom: 1px solid #bdbdbd;  
}
  .comment {
    position: relative;
    text-align: left;
    font-size: 10px;
  }
  .time {
    position: relative;
    text-align: left;
    color: #bdbdbd;
    font-size: 20%;
    font-weight: lighter;
  }
  .type{
    position: relative;
    text-align: left;
    max-width: 50%;
    font-size: 12px;
    font-weight: bold;
  }
  .title {
    position: relative;
    text-align: left;
    max-width:100%;
    color: #4a4a48;
    font-size: 12px;
    font-weight: bold;
    width:100%;
    background-color: #f6f6f5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
