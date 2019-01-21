<template>
    <div id="test">
        <mainHead title="我的活动"></mainHead>
        <ActList></ActList>
        <mainBottom current="探索"></mainBottom>
    </div>
</template>

<script>
import ActList from './ActList.vue'
import { mainBottom, mainHead } from '../mainNav/'

export default {
  components:{
    'ActList':ActList,
    mainBottom,
    mainHead
  }

}
</script>

<style>
  #test{
    margin-top: 55px;
    margin-bottom: 55px;
  }

</style>
