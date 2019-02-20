<!-- 记录 想法 组件 -->

<template>
  <div id="IdeaCard">
    <div class="frame" v-bind:key="idealist.ideakey" v-for="(idealist) in IdeaLists">
      <div class="type">{{idealist.type}}</div>
      <div class="word">{{idealist.word}}</div>
      <div class="good">点赞数:{{idealist.goodNumber}} </div>
      <div class="comment">评论数:{{idealist.commentNumber}} </div>
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
  display: table-row-group;
  width: 100%;
  height: 180px;
  padding: 10px 10px 10px 10px;
  color: #4a4a48;
  background-color: #fff;
}
  .frame {
    border-bottom: 0.5px solid #bdbdbd;  
    margin: 10px 0px 10px 2px; 
  }
    .type {
      display:inline-block;
      position: absolute;
      left:5%;
      max-width: 70px;
      color: #4a4a48;
      font-size: 14px;
    }
    .word {
      display:inline-block;
      color: #4a4a48;
      text-align: left;
      font-size: 14px;
      max-width: 20%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .good {
      display:inline-block;
      position:absolute;
      right:20%;
      text-align: right;
      font-size: 12px;
      color: #ff987e;
    }
    .comment{
      display:inline-block;
      position:absolute;
      right:2.5%;
      font-size: 12px;
      color: #ff987e;
    }
</style>
