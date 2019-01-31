<template>
    <HeadBar v-bind:headline="title">
        <template slot="left_element">
            <div @click="value1 = true">
                <Icon  type="md-person" color="#7e7e7e" size="26" />
            </div>
            <Drawer placement="left" :closable="false" v-model="value1">
                <div class="drawerHead">
                    <img src="../../assets/img/10312115.jpg" class="headImg">
                    <div class="name">
                        HFUTER
                    </div>
                    <div  class="nickname">
                        HFUTER
                    </div>
                    <div class="username">
                        2016212023@edu.com
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
                <div class="exit">
                    <div>
                        <Icon type="md-exit" size="18" class="exitIcon"/>
                        <div class="exitWord">
                            退出登录
                        </div>
                        
                    </div>
                </div>
            </Drawer>
            <!-- <Icon type="md-arrow-back" color="#7e7e7e" size="24" /> -->
        </template>
        <template slot="right_element">
            <Icon type="md-more" color="#7e7e7e" size="24" />
        </template>            
    </HeadBar>
</template>

<script>
import HeadBar from '../headNav/'
export default {
    props:{
        title: {
            type: String
        },
    },
    data () {
        return{
            bar_title: '标题',
            value1: false
        }
    },
    components: {
        'HeadBar': HeadBar
    }
}
</script>
<style scoped>
    .drawerHead{
        position: absolute;
        height:190px;
        width:100%;
        top:0px;
        left:0;
        background-color: #74b49b
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
        width:100%;
        bottom: 140px;
        font-family: "微软雅黑";
        font-size: 13px;
        left:20px;
        color:#ff7657;
        font-weight: bolder;
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
        margin-right:68%;
        margin-top:2px;
    }
    /* .ideaIcon,.setUpIcon,.commentIcon,.feedbackIcon,.exitIcon,.signUpIcon,.aboutIcon{
        float:left;
    } */
</style>
