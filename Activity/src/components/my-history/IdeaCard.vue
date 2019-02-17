<!-- 记录 想法 组件 -->

<template>
  <div id="IdeaCard">
    <div class="frame" v-bind:key="idealist.ideakey" v-for="(idealist,index) in IdeaLists">
      <h3>{{idealist.type}}</h3>
      <p>{{idealist.word}}</p>
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
  padding: 10px 10px;
  color: #4a4a48;
  background-color: #fff;
  border-bottom: 1px solid #bdbdbd; 
}
  .frame {
    position: relative;
    text-align: center;
    margin-left: 2%;
    width: 96%;
    height: 40px;
    border-bottom: 1px solid #bdbdbd;      
  }
    .frame h3 {
      float: left;
      text-align: left;
      color: #4a4a48;
      font-size: 12px;
      font-weight: bold;
    }
    .frame p {
      position: relative;
      float: left;
      max-width: 50%;
      color: #4a4a48;
      font-size: 12px;
      font-weight: lighter;
    }
    .good {
      text-align: right;
      font-size: 12px;
      color: #ff987e;
    }
    .comment{
      text-align: right;
      font-size: 12px;
      color: #ff987e;
    }
</style>
