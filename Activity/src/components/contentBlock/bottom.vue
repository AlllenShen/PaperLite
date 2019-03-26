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
import {mapState, mapGetters } from 'vuex'
    export default {
        data: function(){
            return {
                maskShow: false,
                focusState: false,
                cont: null,
                time: null,
                commId: null,
            }
        },
        props: ['proId'],
        computed: {
            ...mapState({
            token: state => state.auth.token,
            name: state => state.auth.userInfo.name,
            stuId: state => state.auth.userInfo.id,
            addCommentAPI: state => state.auth.addCommentAPI,
            sno: state => state.auth.userInfo.sno,
            identicon: state => state.auth.userInfo.identicon,
            }),
            ...mapGetters([
                'addCommentAPI'
            ])
        },
        methods: {
            setMaskShow(){
                this.maskShow = !this.maskShow;
                this.focusState = true;
            },
            sendContent: function (){
                console.log("this.proId");
                this.cont = this.$refs.contarea.value;
                this.maskShow = !this.maskShow;
                this.$refs.contarea.value = null;
                this.time = new Date().getHours() + ':' + new Date().getMinutes();
                console.log(this.proId);
                if (this.token != '') {
                    console.log(this.token);
                    this.$http.post(
                    this.addCommentAPI,
                    {
                        'act_id': this.proId,
                        'content': this.cont,
                        'tags': ([1,2]),
                    },
                    {
                    headers: {
                        Authorization: 'JWT ' + this.token
                    }
                    }).then((response) => {
                        console.log(response);
                        // console.log(this.name);
                        this.commId = response.data.comment_id;
                        // console.log(this.commId);
                        this.$emit('getContent',this.cont,this.time,this.commId,this.name,this.stuId,this.identicon);
                    })
                }
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