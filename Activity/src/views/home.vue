<template>
  <div id="home">
    <mainHead title="首页"></mainHead>
    <calender :style="{ marginTop: heightOfHeader }"></calender>
    <scrollCard></scrollCard>
    <mainBottom current="首页"></mainBottom>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import scrollCard from '../components/scrollCard/'
import calender from '../components/calender/'
import { mainBottom, mainHead } from '../components/mainNav/'
export default {
  components: {
    scrollCard,
    calender,
    mainBottom,
    mainHead,
  },
  computed: {
    ...mapState({
      heightOfHeader: state => state.style.heightOfHeader + 'px'
    })
  }
}
</script>
  
<style scoped>
  #home{
      margin-top: 55px;
      margin-bottom: 55px;
  }
  /* .hn{
    position: fixed;
    top:0px;
    height: 55px;
  }
  .ca{
    position: fixed;
    top:55px;
    width: 360px;
  }
  .pj{
    position: fixed;
    bottom:50px;
    height: 140px;
    width: 100%;
    background-color: #fff;
  }
  .bn{
    position: fixed;
    bottom: 0; 
  } */
</style>