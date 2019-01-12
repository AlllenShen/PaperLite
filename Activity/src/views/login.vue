<template>
    <div class="loginbox">
        <!-- 不要用原来那种定位方式，h和p这种tag一般都在文章中才使用
            用class或者id定位就行    
         -->
        <div class="title"> <span>{{title}}</span> </div>
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
    import utils from '../assets/utils'
    export default {
        data(){
            return{
                title: "登录",
                tip: '<strong>使用第二课堂邮箱密码登录</strong> <br> 没有第二课堂账号？<a href="https://dev.wxhfut.com/student/#/register">前往注册</a>',
                // 这里不用tip_warning，登录失败直接改写tip就能显示
                // tip_warning: "用户名或密码错误",
                error_warning:false,
                email: '',
                pw: '',
                loginAPI: 'http://118.89.48.63:8001/user/login'
            }
        },
        methods:{
            login () {
                // todo: 格式校验
                // console.log(this.pw, this.email);
                this.$http.post(
                    this.loginAPI,
                    {
                        'email': this.email,
                        'pw': this.pw
                    }).then((response) => {
                        console.log(response.data)
                        let data = response.data
                        if (data.code == 200) {
                            utils.setCookie('userInfo', data.user_info)
                            this.$emit('loginSuccess', data.user_info)
                            console.log('emit');
                        }
                        if (data.code == 400) {
                            this.tip = '<strong>登录错误</strong>'
                        }
                        if (data.code == 403) {
                            this.tip = '<strong>用户名或密码错误</strong>'
                        }
                    }, (response) => {
                        this.tip = '<strong>登录请求失败</strong> 请检查您的网络 <br> 或者服务器挂了...'
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
    /* position: center; */
    /* center是无效的 应该是想用absolute定位
        这里不要使用绝对定位，用margin把div撑开即可
     */
    /* top: 14px; */
    /* line-height: 24px; */
    padding: 8px 0;
    color: #364e68;
    font-size: 30px;
    /* font-style: 微软雅黑; */
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

/* .loginbox span{
    color: #ff7657;
    font-size:5px;
    padding-top: 0px;
    text-align:center;
} */

.login input[type='button']{
    /* position: center;
    display: block;
    font-size: 18px;
    text-align: center;
    font-style: 微软雅黑; 这段没意义*/
    border-bottom: 1px solid #364e68;
    color: #364e68;  
    background-color: #ffffff;
    font-size: 16px; 
    /* margin-top: 30px; */
    /* margin-right: 30px; */
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

/* id选择器可以直接定位 */
/* #email{ */
    /* margin-top: 10px; */
    /* position: center; */
    /* width: 40%;
    height:30px ;
}
#pw{
    margin-top: 30px;
    position: center;
    width:200px;
    height:30px ;
} */
/* #exit{  
    border-bottom: 1px solid #364e68;
    color: #364e68;  
    background-color: #ffffff;
    font-size: 16px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
    margin-top: 30px;
    margin-right: 30px;
    height: 30px;
    width: 30%; 
    
}
#commit{
    border: 2px solid #364e68;
    background: #364e68;
    color: #fff;
    font-size: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: 30px;
    margin-left: 30px;
    height: 50px;
    width:80px; 
} */
</style>
