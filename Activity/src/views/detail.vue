<template>
  <div id="main">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1,user-scalable=no">
    <div class="change">
      <headNav headline="详情">
        <template slot="left_element">
            <Icon type="md-arrow-back" color="#7e7e7e" size="24" />
        </template>
      </headNav>
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
import headNav from '../components/headNav/HeadBar'
import bottom from '../components/contentBlock/bottom.vue'
import func from '../components/contentBlock/function.vue'
import comment from '../components/comment/'
export default {
  components: {
    bottom,
    func,
    comment,
    headNav
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