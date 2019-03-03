<!-- 记录 评论 组件 -->

<template>
  <div class="CommentCard">
    <div class="frame" v-bind:key="commentlist.commentkey" v-for="(commentlist) in CommentLists">
      <div class="headimg">
        <div class="base">
          <div class="name">{{commentlist.name}}</div>
          <div class="time">{{commentlist.time}}</div>
        </div>
      </div>
      <div class="comment">{{commentlist.comment}}</div>
      <div class="title">{{commentlist.title}}</div>
      <div class="thread"></div>
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
  },
  filters: {},
  computed: {},
  created () {},
  mounted () {
  }
}
</script>

<style  scoped>
.CommentCard {
  display:inline-table;
  width: 100%;
  min-height:500px;
  height:auto;
  text-align: center;
  
}
  .frame{
    position:relative;
    
    min-height:40px;
    height:auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
  }
  .headimg{
    position: relative;
    left: 0px;
    width: 30px;
    height: 30px;
    line-height: 20px;
    background-color: rgba(74, 74, 72, 1);
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 100px;
  }
  .base{
    position: relative;
    left:0px;
    height:15px;
    width:200px;
  }
    .name{
      display: inline-block;
      position: relative;
      width: 36px;
      height: 20px;
      line-height:15px;
      color: rgba(74, 74, 72, 1);
      font-size: 14px;
      text-align: left;
      font-family: PingFangSC-bold;
      margin-left: 10px;
    }
    .time{
      display:inline-block;
      position: relative;
      margin-left: 10px;
      width: 60px;
      height: 14px;
      line-height: 15px;
      color: rgba(132, 132, 132, 1);
      font-size: 10px;
      text-align: left;
      font-family: PingFangSC-regular;
    }
  .comment {
    position: relative;
    width: 100%;
    height: 17px;
    color: rgba(74, 74, 72, 1);
    font-size: 14px;
    text-align: left;
    font-family: PingFangSC-regular;
    margin-left:50px;
    margin-bottom: 10px;
  }
  .title {
    position: relative;
    margin-left: 50px;
    margin-right:0px;
    max-width: 100%;
    height: 30px;
    line-height: 20px;
    border-radius: 3px;
    background-color: rgba(246, 246, 245, 1);
    color: rgba(132, 132, 132, 1);
    font-size: 12px;
    text-align: left;
    font-family: PingFangSC-regular;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.2rem;
  }
  .thread{
      height:1px;
      border-bottom: 1px solid rgba(189, 189, 189, 1);
      margin-left:0px;
      margin-right: 0px;
  }
</style>
