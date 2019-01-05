<template>
    <div class="loginbox">
        <h3>{{title}}</h3>
        <p>{{tip}}</p>
        <span class="erroe-show" v-show="error_warning">{{tip_warning}}</span>
            <form name="login" id="login" >
                <label for="username">学号：</label>
                <input type="text" placeholder="请输入学号" v-bind="username" id="username" autofocus /><br>
                <label for="psw" >密码：</label>
                <input type="password"  placeholder="请输入密码" v-bind="psw" id="psw"/><br>
                <input type="button" value="取消" @click="exit()" id="exit"/>
                <input type="button" value="登录" @click="loginin()" id="check-in"/>
            </form>  
  </div>
</template>
<script>
    export default {
        data(){
            return{
                title:"登录",
                tip:"请使用信息门户密码登录！",
                tip_warning:"用户名或密码错误",
                error_warning:false,
                username:'',
                psw:'',
            }
        },
        methods:{
        loginin:function(){
            if(this.username!=username||this.psw!=password)
            {
                this.error_warning=true;
            }else{
                this.error_warning=false;
            }
        }
    }       
}
</script>
<style scoped>

.loginbox h3{
    position: center;
    top: 14px;
    line-height: 24px;
    padding: 8px 0;
    color: #364e68;
    font-size: 70px;
    font-weight: bold;
    font-style: 微软雅黑;
}
.loginbox p{
    color: #ff7657;
    font-size:5px;
    padding-top: 0px;
    text-align:center;
    
}
.loginbox span{
    color: #ff7657;
    font-size:5px;
    padding-top: 0px;
    text-align:center;
}
.login input[type='text']{
    width:20px;
    height:20px;
}
.login input[type='button']{
    position: center;
    display: block;
    font-size: 18px;
    text-align: center;
    font-style: 微软雅黑;
    margin:0 auto;
       
}
.loginbox #username{
    margin-top: 10px;
    position: center;
    width:200px;
    height:30px ;
}
.loginbox #psw{
    margin-top: 30px;
    position: center;
    width:200px;
    height:30px ;
}
.loginbox #exit{  
    border: 2px solid #ff7657;
    background: #ff7657;
    color: #fff;   
    font-size: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
    margin-top: 30px;
    margin-right: 30px;
    height: 50px;
    width:80px; 
    
}
.loginbox #check-in{
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
}
</style>
