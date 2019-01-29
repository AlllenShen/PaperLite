<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // loginAPI: 'http://127.0.0.1:8888/user/login'
    }
  },
  computed: {
    ...mapState({
      loginAPI: state => state.auth.loginAPI,
      token: state => state.auth.token,
      login: state => state.auth.login,
      route: state => state.global.route,
    })
  },
  created () {
    let route = document.URL.split('#')[1]
    this.$store.commit('routeTo', route == '/' ? '/home': route)
    // 验证token
    if (this.token != '') {
      this.$http.post(
        this.loginAPI, {}, {
        headers: {
          Authorization: 'JWT ' + this.token
        }
      }).then((response) => {
        console.log(response.data)
        let data = response.data
        if (data.code == 200) {
          this.$store.commit('login', data)
          this.$router.push(this.route)
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
