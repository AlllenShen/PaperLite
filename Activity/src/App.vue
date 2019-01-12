<template>
  <div id="app">
    <router-view @loginSuccess="loginSuccess"></router-view>
  </div>
</template>

<script>
import utils from './assets/utils'
export default {
  data () {
    return {
      login: false,
      userInfo: null,
      route: null,
      // loginAPI: 'http://118.89.48.63:8001/user/login'
      loginAPI: 'http://127.0.0.1:8888/user/login'
    }
  },
  created () {
    this.route = document.URL.split('#')[1]
    if (this.route == '/')
      this.route = '/home'
    // 验证token
    let token = utils.getCookie('token')
    if (token != '') {
      this.$http.post(
        this.loginAPI, {}, {
        headers: {
          Authorization: 'JWT ' + token
        }
      }).then((response) => {
        console.log(response.data)
        let data = response.data
        if (data.code == 200) {
          utils.setCookie('userInfo', data.user_info)
          utils.setCookie('token', data.token)
          utils.setCookie('expires', data.expires)
          this.loginSuccess(data.user_info)
        }
      })
    }
    if (!this.login){
      this.$router.push('/login')
      return
    }
    console.log(this.route);
    this.$router.push(this.route)
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
