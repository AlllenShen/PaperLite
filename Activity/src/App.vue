<template>
  <div id="app">
    <router-view @loginSuccess="loginSuccess"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: false,
      userInfo: null,
      route: null,
    }
  },
  created () {
    this.route = document.URL.split('#')[1]
    if (this.route == '/')
      this.route = '/home'
    if (!this.login){
      this.$router.push('/login')
      return
    }
    console.log(this.route);
    this.$router.push(route)
  },
  // 不被触发？
  // mounted () {
  //   this.$on('loginSuccess', (userInfo) => {
  //     console.log('on');
  //     this.login = true
  //     this.userInfo = userInfo
  //     this.$router.push(this.route)
  //   })
  // },
  methods: {
    loginSuccess (userInfo) {
      console.log(userInfo);
      this.login = true
      this.userInfo = userInfo
      console.log(this.route);
      if (this.route == '/login')
        this.route = '/home'
      this.$router.push(this.route)
    }
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
