<!-- 记录 想法 组件 -->

<template>
  <div id="IdeaCard">
    <div class="base" v-bind:key="idealist.ideakey" v-for="(idealist) in IdeaLists">
      <div class="headimg">
        <div class="name">{{idealist.name}}</div>
        <div class="time">{{idealist.time}}</div>
        <div class="return">
          <i class="goodimg"></i> 
          <div class="good">{{idealist.goodNumber}} </div>
          <i class="commentimg"></i>
          <div class="comment">{{idealist.commentNumber}} </div>
        </div>
      </div>
      <div class="word">{{idealist.word}}</div>
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
  props: ['IdeaLists'],
  watch: {},
  methods: {},
  filters: {},
  computed: {},
  created () {},
  mounted () {}
}
</script>

<style  scoped>
.IdeaCard {
  display:inline-table;
  width: 100%;
  min-height:500px;
  height:auto;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
}
  .base {
    position:relative;
    min-height:40px;
    left:0px;
    height:auto;   
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
  }
    .headimg{
      position:relative;
      margin-left: 0px;
      width: 30px;
      height: 30px;
      line-height: 20px;
      background-color: rgba(74, 74, 72, 1);
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0);
      border-radius: 100px;
    }
    .name{
      position:relative;
      margin-left: 50px;
      width: 28px;
      height: 20px;
      line-height:20px;
      color: rgba(74, 74, 72, 1);
      font-size: 14px;
      text-align: left;
      font-family: PingFangSC-bold;
    }
    .time{
      position:relative;
      margin-left: 50px;
      width: 60px;
      height: 14px;
      line-height:14px;
      font-size: 10px;
      color: rgba(132, 132, 132, 1);
      text-align: left;
      font-family: PingFangSC-regular;
    }
    .word {
      position: relative;
      margin-left: 50px;
      width: 150px;
      height: auto;
      color: rgba(74, 74, 72, 1);
      line-height:20px;
      font-size: 14px;
      text-align: left;
      font-family: PingFangSC-regular;
      margin-top: 10px;
    }
    .return{
      position: relative;
      left:160px;
      height:20px;
      width:200px;
    }
    .goodimg{
      display:inline-block;
      width:20px;
      height:20px;
      background-image: url(./点赞.png);
      background-position: left;
      left:60px;
      background-size: 20px 20px;
      background-repeat: no-repeat;     
    }
    .good {
      display:inline-block;
      left: 65px;
      width: 15px;
      height: 17px;
      color: rgba(132, 132, 132, 1);
      font-size: 12px;
      text-align: left;
      font-family: PingFangSC-regular;
    }
    .commentimg{
      display:inline-block;
      width:20px;
      height:20px;
      background-image: url(./信息.png);
      background-position: left;
      left:110px;
      background-size: 20px 20px;
      background-repeat: no-repeat;
    }
    .comment{
      display:inline-block;
      left: 135px;
      width: 15px;
      height: 17px;
      color: rgba(132, 132, 132, 1);
      font-size: 12px;
      text-align: left;
      font-family: PingFangSC-regular;
    }
    .thread{
      height:1px;
      border-bottom: 1px solid rgba(189, 189, 189, 1);
      margin-left:40px;
      margin-right: 0px;
    }
</style>
