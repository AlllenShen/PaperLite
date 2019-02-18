<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
      target: state => state.global.target,
    }),
    ...mapGetters([
      'loginAPI'
    ])
  },
  created () {
    let target = document.URL.split('#')[1]
    this.$store.commit('routeTo', target == '/' ? '/home': target)
    // 验证token
    if (this.token != '') {
      this.$http.post(
        this.loginAPI, {}, {
        headers: {
          Authorization: 'JWT ' + this.token
        }
      }).then((response) => {
        // console.log(response.data)
        // console.log(this)
        let data = response.data
        if (data.code == 200) {
          this.$store.commit('login', data)
          this.$router.push(this.target)
        }
      })
    }
    if (!this.login){
      this.$router.push('/login')
      return
    }
    // console.log(this.target);
    this.$router.push(this.target)
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
