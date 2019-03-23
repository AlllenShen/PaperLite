<template>
    <div id="ActCard">
        <div class="cards" v-for="(act) in activities">
            <div class="mainpart">
                <div class="cardinfo">
                    <div class="info">
                        <h3>{{act.title}}</h3>
                        <p><Icon type="md-school" />{{act.organization}}</p>
                        <p v-if="act.type!='竞赛活动'"><Icon type="md-pin" />{{act.position}}</p>
                        <p><Icon type="md-calendar" />{{act.apply_end_at}}</p>
                    </div>
                    <div class="signup"><button>报名</button></div>
                </div>
                <div class="cardbar">
                    <div class="item">
                        <Icon type="md-eye" size="15"/>
                        <span>{{act.view}}</span>
                    </div>
                    <div class="item">
                        <Icon type="md-thumbs-up"  size="15"/>
                        <span>{{act.like}}</span>
                    </div>
                    <div class="item">
                        <Icon type="md-text"  size="15"/>
                        <span>{{act.comment}}</span>
                    </div>
                </div>                      
            </div>
                <div  class="typecolor" :style="{'background-color':bgcolor(act),'width':'2%','border-bottom-right-radius': '3px','border-top-right-radius':'3px'}"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:['activities'],
    methods:{
        bgcolor:function(act){
            if(act.type=='竞赛活动'){
                return '#FF9800'
            }
            if(act.type=='报告讲座'){
                return '#3F51B5'
            }
            if(act.type=='志愿服务'){
                return '#E51C23'
            }
        }
    }    
}
</script>
<style scoped>
#ActCard{
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    background-color: #F6F6F5;

}
.cards{
    width: 100%;
    margin-top: 10px;
    display: flex;
    border-radius: 3px;
    background: white;    
}
.mainpart{
    width: 98%;
}
.cardinfo{
    width: 100%;
    padding: 10px;
    display: flex;
    border-bottom: 1.5px solid #BBBBBB;
}
.info{
    width: 72%;
}
.info p{
    margin-top: 10px;
}
.signup{
    width: 28%;
}
.signup button{
    width: 55%;
    height: 25px;
    margin-left: 22.5%;
    border: #009688;
    border-radius: 2px;
    color: white;
    background: #009688;
}
.cardbar{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
}
.item{
    width: 11%;
    display: flex;
    justify-content: space-between;
    margin: auto;
}
.item span{
    width: 37.5%;
}
</style>


