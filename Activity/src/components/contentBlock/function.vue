<template>
    <div class="function">
        <functionFrame>
            <div slot="content" class="project">
                <div>
                    <!-- <div class="projectColor" :style="{backgroundColor: color}">
                    </div> -->
                    <div class="proName" :style="{color: this.color}">{{title}}</div>
                </div>
                    <div class="head">
                        <div>时间：{{time}}</div>
                        <div>地点：{{place}}</div>
                        <div>面向人群：{{people}}</div>
                        <div class="cont">
                            活动内容：
                            <div v-html="content"></div>
                        </div>
                    </div>
                    <div class="bottom">
                        <div>负责人：{{personInCharge}}</div>
                        <div>联系方式：{{numbers}}</div>
                    </div>
                <div class="st">
                    <!-- <div class="signUp" :style="{backgroundColor: color}">
                    报名
                    </div> -->
                    <div class="signup">
                        <button id="ifapply" v-if="apply(actId)" @click.stop="cancelApply(act)">已报名</button>
                        <button id="overtime" v-if="!apply(actId)&&timecompare(time)">报名</button>
                        <button id="withintime" v-if="!apply(actId)&&!timecompare(time)" @click.stop="toapply(act)">报名</button>
                    </div>
                </div>
            </div>
                <div slot="watch" class="f">
                    <!-- <img src="../../assets/img/liulan.png" class="watchIcon"> -->
                    <Icon type="md-eye"  size="20" class="watchIcon" color="#a5a5a5"/>
                    <div class="count">
                        {{watchCount}}
                    </div>
                </div>
                <div slot="comment" class="f">
                    <Icon :type="iconType" :color="iconColor" @click="togglelike()" size="20" class="likeIcon"/>
                    <div class="count">
                        {{likeCount}}
                    </div>
                </div>
                <div slot="like" class="f" >
                    <!-- <img src="../../assets/img/pinglun.png" class="commentIcon"> -->
                    <Icon type="md-text"  size="20" class="commentIcon" color="#a5a5a5"/>
                    <div class="count">
                        {{commentCount}}
                    </div>
                </div>
                <div slot="team" class="f">
                    <!-- <img src="../../assets/img/icons_Group_.png" class="teamIcon"> -->
                    <Icon type="md-people"  size="20" class="teamIcon" color="#a5a5a5"/>
                    <div class="count">
                        {{teamCount}}
                    </div>
                </div>
        </functionFrame>
    </div>
</template>

<script>
import utils from '../../assets/utils'
import functionFrame from './functionFrame.vue'
import {mapState, mapGetters } from 'vuex'
export default {
    data () {
        return {
            islike: false,
            iconType: 'md-thumbs-up',
            iconColor: '#a5a5a5',
            likeCount: 0,
            watchCount:0,
            commentCount:0,
            teamCount:0,
            time: null,
            place: null,
            people: null,
            content: null,
            personInCharge: null,
            numbers:null,
            color: '#5F98F4',
            type: null,
            title: null,
            actId: null,
            act: null,
        }
    },
    components: {
        functionFrame
    },
    props: ['info','proId'],
    computed: {
        ...mapState({
            token: state => state.auth.token,
            likeAPI: state => state.auth.likeAPI,
            unlikeAPI: state => state.auth.unlikeAPI,
            applied:state=>state.activity.applied,
            activityApplyAPI:state=>state.auth.activityApplyAPI,
            likeIconColor: state => state.style.likeIconColor,
        }),
        ...mapGetters([
            'likeAPI',
            'unlikeAPI',
            'activitySearch',
            'activityApplyAPI',
            'JWTHeaderObj',
            'cancelApplyAPI',
            'activityApply'
        ])
    },
    methods:{
        togglelike: function(){
            this.islike = !this.islike
            if (this.islike) {
                this.iconColor = '#ff7657',
                this.likeCount ++;
                // let token = utils.getCookie('token');
                if (this.token != '') {
                    this.$http.post(
                    this.likeAPI,{'act_id': this.proId},
                    {
                    headers: {
                        Authorization: 'JWT ' + this.token
                    }
                    }).then((response) => {
                    console.log(response)
                    },(response) => {

                    })

                }
                
            } else {
                this.iconColor = '#a5a5a5',
                this.likeCount --;
                if (this.token != '') {
                this.$http.post(
                    this.unlikeAPI,{'act_id': this.proId},
                    {
                    headers: {
                        Authorization: 'JWT ' + this.token
                    }
                    }).then((response) => {
                        console.log(response)
                    },(response) => {

                    })
                }
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
        },
        toapply(act){
            let activityapplyapi = this.activityApplyAPI + act.id;
            this.$http.post(
                activityapplyapi,{},
                {headers:this.JWTHeaderObj}
            ).then((response)=>{
                console.log(act.id);
                if (response.data.code == 200) {
                    this.$Message.success('报名成功')
                } else {
                    this.$Message.error(response.data.msg)
                }
                this.$store.commit('addApplied', act)
            }, (response) => {
                this.$Message.error('报名失败，请重试')
            })
            this.$http.get(
                this.activityApply,
                {
                    headers: this.JWTHeaderObj,
                    params: {for_comment: true}
                }
            ).then((response) => {
                console.log(response);
                
                this.$store.commit('initNeedComment', response.data.result);
            })
        },
        cancelApply(act){
            console.log(act);
            
            this.$http.get(
                this.cancelApplyAPI + act.id,
                {headers:this.JWTHeaderObj}
            ).then((response)=>{
                this.$Message.success('已取消')
                this.$store.commit('cancelApplied', act)
            }, (response) => {
                this.$Message.error('取消报名失败，请重试')
            })
        },
    },
    watch: {
        info: function(newVal,oldVal){
            this.content = newVal.content;
            this.place = newVal.organization;
            this.people = newVal.accepted_apply;
            this.time = newVal.apply_end_at
            this.title = newVal.title;
            this.personInCharge = newVal.principal
            this.likeCount=newVal.like;
            this.watchCount=newVal.view;
            this.commentCount=newVal.comment;
            this.teamCount=newVal.members;
            this.numbers=newVal.contact;
            this.actId=newVal.id;
            this.act = newVal;
            console.log(this.content);
            if(this.content.length == 0) this.content="无";
            if(this.place.length == 0) this.place="无";
            if(this.time.length == 0) this.time="无";
            if(this.title.length == 0) this.title="无";
            if(this.personInCharge.length == 0) this.personInCharge="无";
            if(this.numbers.length == 0) this.numbers="无";
        }
    }
} 
</script>

<style scoped>
    .function{
        border-bottom: 1px solid #e0e0e0;
    }
    .t{
        display: flex;
        justify-content: space-around;
    }
    .f{
        margin-top:5px;
        margin-bottom:5px;
    }
    .project{
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        margin-top:50px;
    }
    .projectColor{
        float: left;
        width: 10px;
        height:35px;
        margin-top:5px;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        }
    .proName{
        margin-top:10px;
        padding-top:10px;
        width:78%;
        margin-left:15px;
        font-size: 16px;
    }
    .head{
        margin-left:15px;
        margin-right:15px;
        margin-top:12px;
        font-size: 14px;
    }
    .bottom{
        margin-left:5%;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 14px;
    }
    .st{
        position: absolute;
        right:10px;
        /* width: 40px; */
        top:72px;
    }
    .signUp{
      border-radius: 5px;
      padding:6px 10px 6px 14px;
      letter-spacing: 4px;
      color: white;
      font-size: 13px;
    }
    .watchIcon{
        width:24px;
        margin-top:-3px;
        margin-right:-2px;
    }
    .likeIcon{
        width:18px;
        margin-top:-3px;
        margin-right:3px;
    }
    .commentIcon{
        width:18px;
        margin-top:0px;
        margin-right:4px;
    }
    .teamIcon{
        margin-top:-1px;
        width:24px;
    }
    .count{
        float:right;
    }
    .cont{
        font-size:14px;
    }
    .signup #ifapply{
        width:137%;
        height: 25px;
        margin-left: -30%;
        border: 1px solid #fff;
        border-radius: 2px;
        color: white;
        background: #5F98F4;
    }
    .signup #overtime{
        width:200%;
        height: 25px;
        margin-left: -90%;
        border: 1px solid #BDBDBD;
        border-radius: 2px;
        color: white;
        background: #BDBDBD;
    }
    .signup #withintime{
        width:200%;
        height: 25px;
        margin-left: -90%;
        border: 1px solid #5F98F4;
        border-radius: 2px;
        color: #5F98F4;
        background: white;
    }
</style>