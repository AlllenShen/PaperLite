<template>
    <div class="MailBox">
        <h3>{{title}}</h3>
            <p>{{tip}}</p>
                <form name="login" id="login" >
                    <label for="mail">邮箱：</label>
                    <input type="e-mail" placeholder="请输入邮箱" v-bind="mail" id="mail" autofocus /><br>
                    <input type="button" value="取消" @click="exit()" id="exit"/>
                    <input type="button" value="登录" @click="loginin()" id="check-in"/>
                </form>  
    </div>
</template>
<script>
    export default {
        data(){
            return{
                title:"提示",
                tip:"为展示第二课堂有关内容，需要填写第二课堂所绑定的邮箱",
                mail:'',              
            }
        },
        methods:{
            loginin:function(){
            
            }
        }
    }       

</script>
<style scoped>
.MailBox h3{
    position: center;
    top: 14px;
    line-height: 24px;
    padding: 8px 0;
    color: #364e68;
    font-size: 30px;
    font-weight: bold;
    font-style: 微软雅黑;
}
.MailBox p{
    color: #ff7657;
    font-size:5px;
    padding-top: 0px;
    text-align:center;
    
}
.MailBox #mail{
    margin-top: 10px;
    position: center;
    width:200px;
    height:30px ;
}
#exit{  
    position: center;
    margin:0 auto;
    border: 2px solid #ff7657;
    background: #ff7657;
    color: #fff;   
    font-size: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
    margin-top: 30px;
    margin-right: 20px;
    height: 30px;
    width:50px; 
}
#check-in{
    position: center;
    margin:0 auto;
    border: 2px solid #364e68;
    background: #364e68;
    color: #fff;
    font-size: 10px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: 30px;
    margin-left: 30px;
    height: 30px;
    width:50px; 
}
</style>
