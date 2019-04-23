<template>
    <div class="comment">
        
        <div>
            <img :src='imgSrc' class="headImg">
            <div class="like">
                <Icon :type="iconType" :color="iconColor" @click.stop="togglelike()" size="15"/>
                {{likeCount}}
            </div>
            <div class="name">
                {{name}}
            </div>
            <div class="time">
                {{time}}
            </div>
            <div class="content">
                {{content}}
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters } from 'vuex'
    export default {
        data: function () {
            return {
                islike: false,
                iconType: 'md-heart-outline',
                iconColor: '#4a4a48',
                imgSrc: "https://paperlite-api.wyyxhlxy.com"+this.identicon,
            }
        },
        props: ['name','time','content','likeCount','identicon'],
        methods:{
            togglelike: function(){
                console.log(this.identicon)
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
        border-radius: 100%;
    }
    .content{
        margin-top:5px;
        margin-left: 30px;
        margin-right:10px;
        margin-bottom:10px;
        font-size: 14px;
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