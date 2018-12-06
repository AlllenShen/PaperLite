<template>
  <div id="app">
    <Calender></Calender>
  </div>
</template>

<script>
import Calender from './components/calender/'
export default {
  components: {
    Calender: Calender
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
