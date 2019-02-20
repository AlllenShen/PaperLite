<!-- 记录 评论 组件 -->

<template>
  <div class="CommentCard">
    <div class="frame" v-bind:key="commentlist.commentkey" v-for="(commentlist) in CommentLists">
      <div class="comment">{{commentlist.comment}}</div>
      <div class="time">{{commentlist.time}}</div>
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
  width: 100%;
  height: 180px;
  padding: 10px 10px 10px 10px;
  color: #4a4a48;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 10px;
}
  .frame{
    margin-top: 5px;
  }
  .comment {
    position: relative;
    text-align: left;
    font-size: 14px;
  }
  .time {
    position: relative;
    text-align: left;
    color: #bdbdbd;
    font-size: 0.5px;
    font-weight: lighter;
  }
  .title {
    position: relative;
    text-align: left;
    max-width:100%;
    color: #bdbdbd;
    font-size: 14px;
    font-weight: lighter;
    width:100%;
    background-color: #f6f6f5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
