<template>
    <div>
        <div class="head">
            <div class="boardsearch">
                <div id="more" @click="rankmenu">
                    <Icon id="iconmore" type="md-more" color="#7e7e7e" size="26" />
                </div>
                <div class="search">
                    
                    <div class="newComment">
                        <input ref="a"  style="width: 100%" />
                    </div>
                    <div class="searchFor" v-on:click="searchfor">
                    <Icon type="ios-search" color="#7e7e7e" size="26"/>
                    </div>
                </div>
                <div class="info" @click="value1 = true">
                    <Icon  type="md-person" color="#7e7e7e" size="26" />
                </div>
            </div>
        </div>
        <div id="rankdrop" v-if="rankmenudrop">
            <h4>排序</h4>
            <ul v-for="(rk,index) in ranklist" style="margin:2%" @click="rank(rk.rankname)">{{rk.rankname}}</ul>
        </div>
        <div class="classfic">
            <Row>
                
                <span v-for="(tab,index) in tabs" :key="index" class='classf' @click="changeTag(tab.activityc , index)">
                    <Col span="8" :class="{'bor':clicked==index, 'midBor':index==1}" >
                        {{tab.activityc}}
                    </Col>
                </span>
                
            </Row>
        </div>

        <Drawer placement="left" :closable="false" v-model="value1">
            <div class="drawerHead" >
                <img :src='imgUrl' class="headImg" @click="goTail">
                <div class="name"  @click="goTail">
                    {{name}}
                </div>
                
                <div class="username">
                    {{email}}
                </div>
            </div>
            <div class="person">
                
                <div class="idea">
                    <Icon type="md-bulb" size="18" class="ideaIcon" color="#4a4a48"/>
                    <div class="ideaWord">
                        想法
                    </div>
                        
                </div>
                <div class="signUp">
                    <Icon type="md-checkmark" size="18" class="signUpIcon" color="#4a4a48"/>
                    <div class="signUpWord">
                        报名
                    </div>
                    
                </div>
                <div class="comment">
                    <img src="../../assets/img/pinglun.png" class="commentIcon">
                    <div class="commentWord">
                        评论
                    </div>
                    
                </div>
            </div>
            <div class="system">
                <div class="setUp">
                    <Icon type="md-settings" size="18" class="setUpIcon" color="#4a4a48"/>
                    <div class="setUpWord">
                        设置
                    </div>
                    
                </div>
                <div class="feedback">
                    <img src="../../assets/img/feedback.png" class="feedbackIcon">
                    <div class="feedbackWord">
                        问题反馈
                    </div>
                    
                </div>
                <div class="about">
                    <Icon type="md-information" size="24" class="aboutIcon" color="#4a4a48"/>
                    <div class="aboutWord">
                        关于
                    </div>
                    
                </div>
            </div>
            <div class="exit" @click="exitSystem()">
                <div>
                    <Icon type="md-exit" size="18" class="exitIcon"/>
                    <div class="exitWord">
                        退出登录
                    </div>
                </div>
            </div>
        </Drawer>
    </div>

</template>


<script>
import { mapState, mapGetters } from 'vuex'

import scrollCard from '../scrollCard/'
export default {
    data () {
        return {
            activity:'http://118.89.48.63:8001/activity/search',
            searchstr: ' ',
            tabs:[
                {activityc:'竞赛活动',value:1},
                {activityc:'报告讲座',value:2},
                {activityc:'志愿服务',value:3}
            ],   
            searchContent: null,
            value1: false,
            clicked:0,
            rankmenudrop:false,
            ranklist:[
                {key:1, rankname:'按热度'},
                {key:2, rankname:'按时间'}
            ]
        }
    },
    components: {
      scrollCard
    },
    computed: {
        ...mapState({
            currentTag: (state) => state.activity.currentTag,
            currentActs: (state) => state.activity.currentActs,
            name: state => state.auth.userInfo.name,
            email: state => state.auth.userInfo.email,
            imgUrl: state => state.auth.imgUrl,
            token: state => state.auth.token,
            bgjzpage:state=>state.activity.bgjzpage,
            jshdpage:state=>state.activity.jshdpage,
            zyfupage:state=>state.activity.zyfupage,
            pagemap:state=>state.activity.pagemap,
            currentOrder:state => state.activity.currentOrder,
        }),
        ...mapGetters([
            'imgUrl',
            'activitySearch',
            'activityApply',
            'JWTHeaderObj'
        ])
    },
    created () {
        this.$http.get(
            this.activityApply,
            {
            headers: this.JWTHeaderObj,
            forcomment: true,
            }).then((response) => {
                this.$store.commit('initApplied', response.data.result);
                if(response.data.result.length != 0){
                    this.show = true;
                }
            },(response) => {

            })
        let body=document.querySelector('body')
        body.addEventListener('click',(e)=>{
            //console.log(e.target.id==='more')
            if((e.target.id==='more'||e.target.id==='iconmore')&&e.target.id!='rankdrop'){
                this.rankmenudrop=!this.rankmenudrop
            }
            else{
                this.rankmenudrop=false
            }
        },false)
    },
    methods:{
        goTail() {
            this.$router.push('/information');
        },
        trans:function(){
            this.aortactivi = !this.sortactivi;
        },
        changeTag (tagName , index) {
            this.$store.commit('changeTag', tagName)
            if (this.currentActs.length == 0) {
                this.initActs(this.changeTag)
            }
            this.clicked = index
        },
        initActs (tagName) {
            this.$http.post(
                this.activitySearch,
                {type: this.currentTag}
            ).then((res) => {
                this.$store.commit('addActs', res.data.result)
            })
        },
        searchfor (){
            let tagName = '搜索';
            this.clicked = 3;
            this.$store.commit('changeTag', tagName);
            this.$store.commit('clearActs');
            this.searchContent = this.$refs.a.value;
            this.$http.post(
                this.activitySearch,
                {title_like: this.searchContent}
            ).then((res) => {
                this.$store.commit('addActs', res.data.result)
            })
        },
        exitSystem (){
            this.$router.push('/login');
            this.$store.commit('logout')
        },
        rankmenu(e){
        },
        rank(rankname){
            if(rankname!=this.currentOrder){
                if(rankname=='按热度'){
                    var date=new Date();
                    var dateend=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                    var daterange=new Date()
                    daterange.setDate(daterange.getDate()-14)
                    var datebegin=daterange.getFullYear()+'-'+(daterange.getMonth()+1)+'-'+daterange.getDate();
                    this.$store.commit('changeOrder', 'hot')
                    //console.log(this.currentActs)                   
                    this.$store.commit('clearAllActs')
                    this.$store.commit('searchrecent')
                    this.$http.post(
                        this.activitySearch,
                        {size:20,
                        page: this.$store.state.activity[this.$store.state.activity.pagemap[this.currentTag]]+1,
                        type:this.currentTag,
                        order:this.currentOrder,
                        apply_end_during:[datebegin,dateend],
                        ignore_expired:false}
                    ).then((res) => {
                        let data=res.data.result
                        console.log(res)
                        let select=0
                        while(select<data.length){
                            if(data[select].type!=this.$store.state.activity.currentTag){
                                data.splice(select,1)
                            }
                            else{
                                select++
                            }
                        }
                        if(data.length!=0){
                            this.$store.commit('addmoreActs', data)
                        }
                    })
                    this.$store.commit('changeTag',this.currentTag)
                    //console.log(this.currentTag)
                    
                }
                if(rankname=='按时间'){
                    var date=new Date();
                    var dateend=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
                    var daterange=new Date()
                    daterange.setDate(daterange.getDate()-14)
                    var datebegin=daterange.getFullYear()+'-'+(daterange.getMonth()+1)+'-'+daterange.getDate();
                    this.$store.commit('changeOrder', 'time')
                    //console.log(this.currentActs)
                    this.$store.commit('clearAllActs')
                    this.$store.commit('searchrecent')
                    this.$http.post(
                        this.activitySearch,
                        {size:20,
                        page: this.$store.state.activity[this.$store.state.activity.pagemap[this.currentTag]]+1,
                        type:this.currentTag,
                        order:this.currentOrder,
                        apply_end_during:[datebegin,dateend],
                        ignore_expired:false}
                    ).then((res) => {
                        let data=res.data.result
                        console.log(res)
                        let select=0
                        while(select<data.length){
                            if(data[select].type!=this.$store.state.activity.currentTag){
                                data.splice(select,1)
                            }
                            else{
                                select++
                            }
                        }
                        if(data.length!=0){
                            this.$store.commit('addmoreActs', data)
                        }
                    })
                    this.$store.commit('changeTag',this.currentTag)
                }

            }
            
        }
        
    },
    mounted () {
        this.changeTag('竞赛活动' , 0)
    }
    
}
</script>

<style scoped>
    .classfic{
        height: 40px;
        line-height: 40px;
        background-color: #5F98F4;
        /* margin-bottom: 2px; */
        text-align: center;
        border-bottom: solid 1px #efefef;
    }
    .classf{
        text-align: center;
        font-family: PingFangSC-regular;
        font-size: 14px;
        color:#fff;
        height: 35px;
        line-height: 35px;
    }
    .bor{
        border-bottom:solid 5px #fff;
    }
    .midBor{
        
    }
    .startBor{
        border-bottom:solid 5px #fff;
    }
    .boardsearch{
        margin-left: 4px;
        margin-right: 4px;
        height: 40px;
        border-radius: 5px;
        background-color:#ffffff;
    }
    .search{
        position: relative;
        float: right;
        height: 40px;
        width:75%;
        margin-right: 3%;
        margin-top:2px;
        text-align: center;
    }
    .newComment{
        position: relative;
        float: left;
        color: #bdbdbd;
        width: 85%;
    }
    .searchFor{
        position: relative;
        float: right;
        /* margin-right:3%; */
        top:4px;
        font-size: 15px;
    }
    input{
        margin-top:2px;
        font-size: 14px;
        padding:5px;
        border:none;
        outline:none;
    }
    #more{
        position: relative;
        float: right;
        margin-right:1%;
        margin-top:6px;
        border-left: 1px solid  rgba(132, 132, 132, 1);
    }
    .info{
        position: relative;
        float: left;
        margin-left:2%;
        padding-right:1%;
        margin-top:6px;
        border-right: 1px solid  rgba(132, 132, 132, 1);
    }
    .head{
        position: relative;
        top:0px;
        background-color:  #5F98F4;
        height: 48px;
        padding-top:4px;
    }
    #rankdrop{
        position: absolute;
        right: 2%;
        z-index: 10;
        width: 25%;
        padding: 3%;
        font-size: 13px;
        background: rgb(236, 232, 232);
        border-radius: 3px;
    }
    .drawerHead{
        position: absolute;
        height:190px;
        width:100%;
        top:0px;
        left:0;
        background-color: #5F98F4;
    }
    .headImg{
        position: relative;
        float:left;
        top:50px;
        left:10px;
        width: 50px;
        height:50px;
        margin-top:5px;
        margin-left:5px;
        margin-right: 0px;
        border-radius: 100%;
    }
    .name{
        margin-top:70px;
        margin-left: 74px;
        color:#fff;
        font-size:15px;
    }
    .nickname{
        position: relative;
        top:25px;
        left:18px;
        color:#fff;
        font-size:15px;
    }
    .username{
        position: relative;
        top:30px;
        left:18px;
        width: 90%;
        color:#fff;
        font-size:15px;
    }
    .person{
        position: relative;
        width:100%;
        left:0;
        top:190px;
        font-family: "微软雅黑";
        border-bottom: 1px solid #bdbdbd;
        font-weight: bolder;
    }
    .system{
        position: relative;
        width:100%;
        left:0;
        font-family: "微软雅黑";
        top:190px;
        border-bottom: 1px solid #bdbdbd;
        font-weight: bolder;
    }
    .idea{
        position: relative;
        top:0px;
        left:5px;
        font-size: 13px;
        margin-top:5px;
        margin-bottom: 25px;
    }
    .signUp,.comment,.feedback{
        position: relative;
        top:0px;
        left:5px;
        font-size: 13px;
        margin-top:25px;
        margin-bottom: 15px;
    }
    .setUp{
        position: relative;
        top:0px;
        left:5px;
        font-size: 13px;
        margin-top:15px;
        margin-bottom: 10px;
    }
    .feedback{
        position: relative;
        top:0px;
        left:5px;
        font-size: 13px;
        margin-top:25px;
        margin-bottom: 16px;
    }
    .about{
        position: relative;
        top:0px;
        left:0px;
        font-size: 13px;
        margin-top:20px;
        margin-bottom: 15px;
    }
    .exit{
        position: absolute;
        width:90%;
        font-family: "微软雅黑";
        font-size: 13px;
        left:20px;
        color:#ff7657;
        font-weight: bolder;
        top:500px;
    }
    .commentIcon{
        width:18px;
        margin-top:0px;
    }
    .feedbackIcon{
        width:18px;
        margin-top:0px;
    }
    .ideaWord,.setUpWord,.commentWord,.signUpWord{
        float:right;
        position: relative;
        right:75%;
    }
    .aboutWord{
        float:right;
        position: relative;
        right:73%;
        margin-top:2px;
    }
    .ideaWord,.signUpWord{
        margin-top:3px;
    }
    .setUpWord{
        margin-top:1px;
    }
    .commentWord{
        margin-top:-2px;
    }
    .feedbackWord{
        float:right;
        margin-right:64%;
        margin-top:0px;
    }
    .exitWord{
        float:right;
        margin-right:64%;
        margin-top:2px;
    }
</style>