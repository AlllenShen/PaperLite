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
                        <div>负责人：{{personInCharge}}联系方式：{{numbers}}</div>
                    </div>
                <div class="st">
                    <div class="signUp" :style="{backgroundColor: color}">
                    报名
                    </div>
                </div>
            </div>
                <div slot="watch" class="f">
                    <!-- <img src="../../assets/img/liulan.png" class="watchIcon"> -->
                    <Icon type="md-eye"  size="20" class="watchIcon"/>
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
                    <Icon type="md-text"  size="20" class="commentIcon"/>
                    <div class="count">
                        {{commentCount}}
                    </div>
                </div>
                <div slot="team" class="f">
                    <!-- <img src="../../assets/img/icons_Group_.png" class="teamIcon"> -->
                    <Icon type="md-people"  size="20" class="teamIcon"/>
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
        data: function () {
            return {
                islike: false,
                iconType: 'md-thumbs-up',
                iconColor: '#4a4a48',
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
                color: 'black',
                type: null,
                title: null,
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
            }),
            ...mapGetters([
                'likeAPI',
                'unlikeAPI',
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
                    this.iconColor = '#4a4a48',
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
        },
        watch: {
            info: function(newVal,oldVal){
                this.type = newVal.type;
                if(this.type=='竞赛活动') this.color="#74b49b";
                if(this.type=='报告讲座') this.color="#ffba6a";
                if(this.type=='志愿服务') this.color="#ff987e";
                if(this.type=='为您推荐') this.color="#4a4a48";
                this.content = newVal.content;
                this.place = newVal.organization;
                this.title = newVal.title;
                this.likeCount=newVal.like;
                this.watchCount=newVal.view;
                this.commentCount=newVal.comment;
                this.teamCount=newVal.members;
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
        margin-left:5%;
        margin-top:12px;
    }
    .bottom{
        margin-left:5%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .st{
        position: absolute;
        right:10px;
        /* width: 40px; */
        top:70px;
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
        font-size:12px;
    }
</style>