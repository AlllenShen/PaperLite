<template>
    <div>
        <div class="first">
            <div>
                <img src="./green.jpg" class="avatar">
            </div>
            
            <div class="intro">
                <div class="sname">
                    {{sname}}
                </div>
                <div class="snum">
                    学号:{{snum}}
                </div>
            </div>
                
            <div class="thenext">
                <Icon type="ios-arrow-forward" />
            </div>   
        </div>
        
        <div v-show="isactive" class="hideshow">
            <div class="un_activity">
                {{acti_name}}
            </div>    
        </div>

        <div class="second" @click="toggle()">
            待评价<Icon type="ios-arrow-down" />
        </div>
    </div>


</template>

<script>
    export default {

        data () {
            return {
              sname: "张三",
              snum: "2016212020",
              acti_name: "趣味代码大赛",
              isactive: false,
            }
        },
        
        methods:{
            toggle(){
                this.isactive = !this.isactive;
            }

        }
    }
</script>


<style>
    .first{
        font-display: inline;
        overflow: hidden;
    }
    .avatar{
        margin-left: 20px;
        margin-top: 15px;
        margin-bottom: 15px;
        float:left;
        border-radius:50%;
        left: 20px;
        top: 40px; 
        width:50px; 
        height:50px;
        line-height: 20px;
        background-color: rgba(74, 74, 72, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .intro{
        float:left;
    }
    .sname{
        margin: 15px;
        left: 90px;
        top: 42px;
        width: 50px;
        height: 16px;
        color: rgba(74, 74, 72, 1);
        font-size: 20px;
        text-align: left;
        font-family: PingFangSC-bold;
    }
    .snum{
        margin:15px;
        display: inline;
        left: 90px;
        top: 73px;
        width: 113px;
        height: 20px;
        color: rgba(132, 132, 132, 1);
        font-size: 14px;
        text-align: left;
        font-family: PingFangSC-regular;
    }
    .thenext{
        text-align: right;
        margin-right: 20px;
        padding-top: 25px;
    }
    .second{

        float:none;
        margin: 0px;
        text-align: center;
        border-top: 1px  solid gray;
        color: rgba(132, 132, 132, 1);
        font-family: PingFangSC-regular;
    }
    .hideshow{
        float: none;
        height: 90px;
        text-align: center;
        border-top: 1px solid gray;
        background-color: rgb(230, 230, 230);
    }
    .un_activity{
        margin: 15px;
        width: 90px;
        height:60px;
        line-height: 50px;
        border: 1px solid gray;
        border-radius:5%; 
        color: aliceblue;
        background-color: rgb(170,170,170);
        font-family: PingFangSC-regular;
    }


</style>



