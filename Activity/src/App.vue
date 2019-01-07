<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import home from './views/home.vue'
export default {
  components: {
    home
  },
  created () {
    let route = document.URL.split('#')[1]
    console.log(route);
    if (route == '/')
      route = '/home'
    this.$router.push(route)
  }
}
</script>


<style scoped>
#app {
  font-family: 'PingFang';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
