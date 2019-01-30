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
                    <div class="idea">想法</div>
                    <div class="signUp">报名</div>
                    <div class="comment">评论</div>
                </div>
                <div class="system">
                    <div class="setUp">设置</div>
                    <div class="feedback">问题反馈</div>
                    <div class="about">关于</div>
                </div>
                <div class="exit">
                    <div>退出登录</div>
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
        height:160px;
        width:100%;
        top:0px;
        left:0;
        background-color: #74b49b
    }
    .headImg{
        position: relative;
        float:left;
        top:30px;
        left:10px;
        width: 50px;
        height:50px;
        margin-top:5px;
        margin-left:5px;
        margin-right: 0px;
        border-radius: 100%;
    }
    .name{
        margin-top:50px;
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
        top:150px;
        border-bottom: 1px solid #f6f6f5;
    }
    .system{
        position: relative;
        width:100%;
        left:0;
        top:150px;
    }
    .idea,.signUp,.comment,.setUp,.feedback,.about{
        position: relative;
        top:0px;
        left:20px;
        font-size: 15px;
        margin-top:20px;
        margin-bottom: 20px;
    }
    .exit{
        position: absolute;
        width:100%;
        bottom: 50px;
        font-size: 15px;
        left:40px;
        color:#ff7657;
    }
    
</style>
