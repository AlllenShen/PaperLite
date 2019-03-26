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
                    <div class="signup">
                        <button id="ifapply" v-if="apply(act.id)">已报名</button>
                        <button id="overtime" v-if="!apply(act.id)&&timecompare(act.apply_end_at)">报名</button>
                        <button id="withintime" v-if="!apply(act.id)&&!timecompare(act.apply_end_at)">报名</button>
                    </div>
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
import { mapState, mapGetters } from 'vuex'
export default {
    props:['activities'],
    computed: {
        ...mapState({
            applied:state=>state.activity.applied,
        }),
        ...mapGetters([
            'activitySearch'
        ]),
    },
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
        },
        timecompare:(ddl)=>{
            //console.log(ddl)
            var ddldate=ddl.split(' ')[0]
            var ddltime=ddl.split(' ')[1]
            var ddlyear=ddldate.split('-')[0]
            var ddlmonth=ddldate.split('-')[1]
            var ddlday=ddldate.split('-')[2]
            var ddlhour=ddltime.split(':')[0]
            var ddlminute=ddltime.split(':')[1]
            var ddlsecond=ddltime.split(':')[2]
            var date=new Date()
            var year=date.getFullYear()
            if(year!=ddlyear){
                if(year<ddlyear){
                    //console.log('可报名',year)
                    return false
                }
                if(year>ddlyear){
                    //console.log('超过时间',year)
                    return true
                }          
            }
            else{
                var month=date.getMonth()+1
                if(month!=ddlmonth){
                    if(month<ddlmonth){
                        //console.log('可报名',month)
                        return false
                    }
                    if(month>ddlmonth){
                        //console.log('超过时间',month)
                        return true
                    }
                }
                else{
                    var day=date.getDate()
                    if(day!=ddlday){
                        if(day<ddlday){
                            //console.log('可报名',day)
                            return false
                        }
                        if(day>ddlday){
                            //console.log('超过时间',day)
                            return true
                        }
                    }
                    else{
                        var hour=date.getHours()
                        if(hour!=ddlhour){
                           if(hour<ddlhour){
                                //console.log('可报名',hour)
                                return false
                            }
                            if(hour>ddlhour){
                                //console.log('超过时间',hour)
                                return true
                            }
                        }
                        else{
                            var minute=date.getMinutes()
                            if(minute!=ddlminute){
                                if(minute<ddlminute){
                                    //console.log('可报名',minute)
                                    return false
                                }
                                if(minute>ddlminute){
                                    //console.log('超过时间',minute)
                                    return true
                                }
                            }
                            else{
                                var second=date.getSeconds()
                                if(second>ddlsecond){
                                    //console.log('超过时间',second)
                                    return true
                                }
                                else{
                                    //console.log('未超时')
                                    return false
                                }
                            }
                        }
                    }
                }
            }
        },
        apply(actid){
            //console.log(this.applied)
            for(var i=0;i<this.applied.length;i++){
                //console.log(this.applied[i])
                if(actid==this.applied[i].id){
                    return true
                }
            }
            return false
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
.signup #ifapply{
    width: 55%;
    height: 25px;
    margin-left: 22.5%;
    border: rgb(190, 188, 188);
    border-radius: 2px;
    color: white;
    background: rgb(190, 188, 188);
}
.signup #overtime{
    width: 55%;
    height: 25px;
    margin-left: 22.5%;
    border: rgb(190, 188, 188);
    border-radius: 2px;
    color: white;
    background: rgb(190, 188, 188);
}
.signup #withintime{
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


