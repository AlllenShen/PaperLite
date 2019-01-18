<template>
    <div class="bottom">
        <div class="mask" v-show="maskShow" @click="setMaskShow">
        </div>
        <div class="child" id="child" v-show="maskShow">
            <div class="newComment">
                <textarea rows="2" cols="39" @blur="focusState = false" v-focus="focusState" placeholder="添加评论">
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
                focusState: false
            }
        },
        methods: {
            setMaskShow(){
                this.maskShow = !this.maskShow;
                this.focusState = true 
            }
        },
        directives: {
            focus: {
            //根据focusState的状态改变是否聚焦focus
                update: function (el, {value}) {    //第二个参数传进来的是个json
                    if (value) {
                        el.focus()
                    }
                }
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
        padding:1px;
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
        margin-left: 11px;
        font-size: 15px;
    }
    .newComment{
        position: relative;
        float: left;
        top:1px;
        margin-left: 9px;
        color: #bdbdbd;
    }
    .announce{
        position: relative;
        top:23px;
        float: right;
        margin-right:2%;
        color: #364e68;
        font-size: 15px;
    }
</style>