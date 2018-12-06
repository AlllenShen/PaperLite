<template>
  <div id="main">
    <div class='hn'>
      <headnav></headnav>
    </div>
    <div class='ca'>
      <calender></calender>
    </div>
    <div class='pj'>
      <pros></pros>
    </div>
    <div class='bn'>
      <bottomnav></bottomnav>
    </div>
  </div>
</template>

<script>
import pros from '../components/scrollCard/pros.vue'
import calender from '../components/calender/'
import bottomnav from '../components/bottomNav/BottomNav.vue'
import headnav from '../components/headNav/HeadNav.vue'
export default {
  components: {
    pros,
    calender,
    bottomnav,
    headnav
  }
}
</script>
  
<style scoped>
  #main{
      margin-top: 55px;
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