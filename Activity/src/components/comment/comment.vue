<template>
    <div class="comment">
        <div class="headImg">

        </div>
        
        <div class="like">
            <Icon :type="iconType" :color="iconColor" @click="togglelike()" size="15"/>
            {{likeCount}}
        </div>
        <div class="name">
            CR7{{name}}
        </div>
        <div class="time">
            12:02{{time}}
        </div>
        <div class="content">
            {{content}}说来也不难，flex 的核心的概念就是容器和轴。容器包括外层的父容器也一样也一样
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                islike: false,
                iconType: 'md-heart-outline',
                iconColor: '#4a4a48',
                likeCount: 15
            }
        },
        props: ['name','time','content'],
        methods:{
            togglelike: function(){
                this.islike = !this.islike
                if (this.islike) {
                    this.iconType = 'md-heart',
                    this.iconColor = '#ff7657',
                    this.likeCount ++
                } else {
                    this.iconType = 'md-heart-outline',
                    this.iconColor = '#4a4a48',
                    this.likeCount --;
                }
            }
        }
    } 
</script>

<style scoped>
    .comment{
        border-bottom: 1px solid #e0e0e0;
    }
    .headImg{
        float:left;
        width: 30px;
        height:30px;
        margin-top:5px;
        margin-left:5px;
        margin-right: 0px;
        background-color: black;
        border-radius: 100%;
    }
    .content{
        margin-top:5px;
        margin-left: 30px;
        margin-right:10px;
        margin-bottom:10px;
    }
    .name{
        margin-top:3px;
        margin-left:40px;
    }
    .time{
        margin-top:2px;
        margin-left:40px;
    }
    .like{
        float:right;
        margin-right: 10px;
        margin-top:5px;
    }
</style>