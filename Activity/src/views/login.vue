<template>
  <div class="loginbox">
    <!-- 不要用原来那种定位方式，h和p这种tag一般都在文章中才使用
      用class或者id定位就行  
     -->
    <div class="title"> <span>登录</span> </div>
    <!-- 提示信息统一在这显示 -->
    <div class="tip"> <span v-html="tip"></span> </div>
    <!-- <span class="erroe-show" v-show="error_warning">{{tip_warning}}</span> -->
    <div class="login">
      <form name="login" id="login" >
        <div class="center">
          <label class="input-label" for="email">邮箱</label>
          <input type="text" v-model="email" id="email" autofocus /><br>
        </div>
        <div class="center">
          <label class="input-label" for="pw" >密码</label>
          <input type="password" v-model="pw" id="pw"/><br>
        </div>
        <div class="center btn">
          <input type="button" value="取消" @click="exit()" id="exit"/>
          <input type="button" value="登录" @click="login()" id="commit"/>
        </div>
      </form>  
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data(){
    return{
      tip: '<strong>使用第二课堂邮箱密码登录</strong> <br> 没有第二课堂账号？<a href="https://dev.wxhfut.com/student/#/register">前往注册</a>',
      email: '',
      pw: '',
    }
  },
  computed: {
    ...mapState({
      loginAPI: state => state.auth.loginAPI,
      route: state => state.global.route,
    })
  },
  methods:{
    login () {
      // todo: 格式校验
      // 测试功能 绕开登录
      if (this.email == 'test'){
        this.$emit('loginSuccess', null)
        return
      } 
      this.$http.post(
        this.loginAPI,
        {
          'email': this.email,
          'pw': this.pw
        }).then((response) => {
          console.log(response.data)
          let data = response.data
          switch (data.code) {
            case 200: 
              this.$store.commit('login', data)
              this.$router.push(this.route); break;
            case 400:
              this.tip = '<strong>登录错误</strong>'; break;
            case 403:
              this.tip = '<strong>用户名或密码错误</strong>'; break;
          }
        }, (response) => {
          this.tip = '<strong>登录请求失败</strong> 请检查您的网络 <br> 或者服务器挂了...'
          console.log(response);
        })
    }
  }  
}
</script>
<style scoped>
.center {
  max-width: 80%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.loginbox {
  padding: 1rem 1rem 1rem 1rem;
}

.title{
  padding: 8px 0;
  color: #364e68;
  font-size: 30px;
  font-family: PingFangSC-Ultralight, sans-serif;
  border-bottom: #364e68 solid 1px;
  padding-left: 5px;
}
.tip {
  color: #ff7657;
  background-color: #f3f3f3;
  margin: 1rem 0 1rem 0;
  padding: 1rem 0 1rem 0;
  text-align:center;
  font-size: 15px;
  border-radius: 2px;
}

.input-label {
  color: #364e68;
  font-size: 16px;
  margin-right: 1rem;
  margin-left: 1rem;
}

.login {
  padding-top: 1rem;
}

.login input {
  margin-top: 1rem;
  border: none;
  border-bottom: #364e68 solid 1px;
  width: 70%;
  height: 30px;
  outline: none;
  -webkit-appearance : none; /* 去除圆角 */
  border-radius: 0;
}

.login input:hover {
  border: none;
  border-bottom: #364e68 solid 1px;
}

.login input[type='button']{
  border-bottom: 1px solid #364e68;
  color: #364e68;  
  background-color: #ffffff;
  font-size: 16px; 
  height: 30px;
  width: 30%;
}

.btn {
  margin-top: 2rem;
}

#commit {
  float: right;
  border-bottom: 1px solid #ff7657;
}
</style>
