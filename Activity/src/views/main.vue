<template>
  <div id="main">
    <div class="change">
    <func></func>
    <div class="choose">
      <div class="choice">
          评论
      </div>
    </div>
    <comment></comment>
    <comment></comment>
    <comment></comment>
    <comment></comment>
    <comment></comment>
    <comment></comment>
    <comment></comment>
    <bottom></bottom>
    </div>
  </div>
</template>

<script>
import bottom from '../components/contentBlock/bottom.vue'
import func from '../components/contentBlock/function.vue'
import comment from '../components/comment/'
export default {
  components: {
    bottom,
    func,
    comment,
  }
}
</script>

<style scoped>
    .choice{
      margin-left:5px;
      margin-top:5px;
      margin-bottom:5px;
    }
    .change{
        margin-bottom:50px;
    }
    .choose{
      margin-top:10px;
      border-top: 1px solid #e0e0e0;
      border-bottom: 1px solid #e0e0e0;
    }
</style>