<template>
    <div class="bottom">
        <div class="mask" v-show="maskShow" @click="setMaskShow">
        </div>
        <div class="child" id="child" v-show="maskShow">
            <div class="newComment">
                <textarea rows="2" cols="30" placeholder="添加评论">
                    
                </textarea>
            </div>
            <div class="announce">
            发布
            </div>
        </div>
        <div class="comment">
        <div @click="setMaskShow" v-show="!maskShow">
            添加评论
        </div>
        </div>
    </div>
</template>

<script>
   export default {
        data: function(){
            return {
                maskShow: false,
            }
        },
        methods: {
            setMaskShow(){
                this.maskShow = !this.maskShow;
            }
        }
    }
</script>

<style scoped>
    .bottom{
        position:fixed;
        bottom:0px;
        width: 100%;
        height: 50px;
        border-top: 1px solid #e0e0e0;
        background-color: #ffffff;
    }
    .mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.3;
    } 
    textarea{
            resize: none;
            font-size: 15px;
    }
    .child{
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0px;
        background: #fff;
    }
    .comment{
        position: relative;
        bottom:-2px;
        width:100%;
        color: #bdbdbd;
        margin-left: 10px;
        font-size: 15px;
    }
    .newComment{
        position: relative;
        float: left;
        top:2px;
        margin-left: 9px;
        color: #bdbdbd;
    }
    .announce{
        position: relative;
        top:12px;
        float: right;
        margin-right:8%;
        color: #364e68;
        font-size: 15px;
    }
</style>