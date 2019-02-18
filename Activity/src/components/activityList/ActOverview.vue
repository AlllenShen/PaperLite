<template>   
    <div id="ActOverview">
        <!--<div class="actlist" v-bind:key="act.actkey" v-for="(act,index) in activities">-->
        <div class="actlist" v-for="(act,index) in activities">
            <div class="frame">
                <div class="typecolor" :style="{'background-color':bgcolor(act)}"></div>
                <!--<h3>{{act.actname}}</h3>
                <p>时间：{{act.acttime}}</p>
                <p>地点：{{act.actplace}}</p>
                <p>参与对象：{{act.actmember}}</p>
                <p>说明：{{act.actnote}}</p>-->
                <h3>{{act.title}}</h3>
                <p>报名时间：{{act.apply_begin_at}}~{{act.apply_end_at}}</p>
                <p>参与对象：{{act.accepted_apply}}</p>
                <p>组织者：{{act.organization}}</p>  
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
        /*bgcolor:function(act){
            if(act.acttype=='竞赛活动'){
                return '#ffba5a'
            }
            if(act.acttype=='报告讲座'){
                return '#665c84'
            }
            if(act.acttype=='志愿服务'){
                return '#ff7657'
            }
        }*/
        bgcolor:function(act){
            if(act.type=='竞赛活动'){
                return '#ffba5a'
            }
            if(act.type=='报告讲座'){
                return '#665c84'
            }
            if(act.type=='志愿服务'){
                return '#ff7657'
            }
        }
    }    
}
</script>

<style scoped>
.frame{
    position: relative;
    text-align: center;
    margin-top: 0.2rem;
    margin-bottom: 12px;
    margin-left: 2%;
    width: 96%;
    height: 150px;
    border-radius: 5px;      
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
    width: 47.9%;
    height: 25px;
    border: 1px solid #98ccd3;
    border-bottom-left-radius: 5px;
    background-color: #98ccd3;
}
.frame #detail{
    position: absolute;
    right: 4.2%;
    bottom: 0;
    width: 47.9%;
    height: 25px;
    border: 1px solid #fbeed7;
    background-color: #fbeed7;
}
.typecolor{
    position: absolute;
    right: 0;
    top: 0;
    width: 4.2%;
    height: 150.5px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #ff7657;
}
.blank{
    width: 100%;
    height: 55px;
}
</style>

