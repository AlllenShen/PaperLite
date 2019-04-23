<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import utils from '@/assets/utils'

export default {
  computed: {
    ...mapState({
      loginAPI: state => state.auth.loginAPI,
      token: state => state.auth.token,
      login: state => state.auth.login,
      target: state => state.global.target,
    }),
    ...mapGetters([
      'loginAPI',
      'visitorLogin',
      'JWTHeaderObj'
    ])
  },
  created () {
    let target = document.URL.split('#')[1]
    // this.$store.commit('routeTo', target == '/' ? '/home': target)
    this.$store.commit('routeTo', target)
    
    // 验证token
    if (this.token != '') {
      this.$http.post(
        this.loginAPI, {}, {
        headers: this.JWTHeaderObj
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
    // 游客模式
    if (utils.getQueryString('visitor') == '1') {
      this.$Message.info({
                content: '您正在使用游客模式',
                duration: 6,
                closable: true
            })
      this.$http.get(
        this.visitorLogin
      ).then((response) => {
        console.log(response.data)
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
  font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
