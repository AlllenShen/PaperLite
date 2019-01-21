<template>
    <div class="bottom">
        <preference name="KeyboardDisplayRequiresUserAction" value="true" />
        <div class="mask" v-show="maskShow" @click="setMaskShow">
        </div>
        <div class="child" id="child" v-show="maskShow">
            <div class="newComment">
                <textarea ref="contarea" rows="2" @blur="focusState = false" v-focus="focusState" placeholder="添加评论" id="t">
                </textarea>
            </div>
            <div class="announce" v-on:click="sendContent">
            发布
            </div>
        </div>
        <div class="comment">
        <textarea  @click="setMaskShow" v-show="!maskShow" placeholder="添加评论" style="border:none;">
        </textarea>
        </div>
    </div>
</template>

<script>
    import utils from '../../assets/utils'
    export default {
        data: function(){
            return {
                maskShow: false,
                focusState: false,
                cont: null,
                time: null,
                name: null
            }
        },
        methods: {
            setMaskShow(){
                this.maskShow = !this.maskShow;
                this.focusState = true;
            },
            sendContent: function (){
                this.cont = this.$refs.contarea.value;
                this.maskShow = !this.maskShow;
                this.$refs.contarea.value = null;
                this.time = new Date().getHours() + ':' + new Date().getMinutes();
                this.$emit('getContent',this.cont,this.time)
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
        padding:2px;
        width: 100%;
        height:48px;
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
        bottom:-1px;
        width:100%;
        color: #bdbdbd;
        margin-left: 10px;
        font-size: 15px;
    }
    .newComment{
        position: relative;
        float: left;
        top:1px;
        margin-left: 9px;
        color: #bdbdbd;
        width: 85%;
        height:48px;
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