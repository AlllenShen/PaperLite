<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from './views/home.vue'
export default {
  components: {
    home
  }
}
</script>


<style>
#app {
  font-family: 'PingFang';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
