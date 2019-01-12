<template>   
    <div id="ActOverview">
        <div class="actlist" v-for="act in activities">
            <div class="blank"></div>
            <div class="frame">
                <div class="typecolor" :style="{'background-color':bgcolor(act)}"></div>
                <h3>{{act.actname}}</h3>
                <p>时间：{{act.acttime}}</p>
                <p>地点：{{act.actplace}}</p>
                <p>参与对象：{{act.actmember}}</p>
                <p>说明：{{act.actnote}}</p>  
                    <button id="signup">报&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</button> 
                    <button id="detail">详&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;情</button>                     
            </div>           
        </div>
        <div class="blank"></div>       
    </div>
</template>

<script>
export default {
    props:['activities'],
    methods:{
        bgcolor:function(act){
            if(act.acttype=='竞赛活动'){
                return '#ffba5a'
            }
            if(act.acttype=='报告讲座'){
                return '#665c84'
            }
            if(act.acttype=='志愿服务'){
                return '#ff7657'
            }
        }
    }    
}
</script>

<style scoped>
.blank{
    width: 360px;
    height: 12px;;
}
.frame{
    position: relative;
    margin-left: 5px;
    width: 350px;
    height: 150px;
    border-radius: 10px;      
    box-shadow: 1px 3px 10px #bdbdbd;  
}
.frame h3{
    padding-top: 10px;    
}
.frame p{
    margin-left: 20px;
    text-align: left;
}
.frame #signup{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 167.5px;
    height: 25px;
    border: 1px solid #98ccd3;
    border-bottom-left-radius: 10px;
    background-color: #98ccd3;
}
.frame #detail{
    position: absolute;
    right: 15px;
    bottom: 0;
    width: 167.5px;
    height: 25px;
    border: 1px solid #fbeed7;
    background-color: #fbeed7;
}
.typecolor{
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 150.5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ff7657;
}
</style>

