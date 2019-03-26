<template>
  <div id="main">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,minimum-scale=1,user-scalable=no">
    <div class="change">
      <headNav headline=详情>
        <template slot="left_element">
            <Icon type="ios-arrow-back" color="#7e7e7e" size="26"
                @click="back()"/>
        </template>
      </headNav>
      <func :info="information" :proId="route"></func>
      <div class="choose">
        <div class="choice">
            评论
        </div>
      </div>
        <comment v-for="item in comments" 
        :name="item.name"
        :time="item.time"
        :content="item.content"
        :likeCount="item.likeCount"
        :identicon="item.identicon"
        @click.native="getCancelComment(item)"></comment>
        <div v-if="bottomShow && nobottomShow" class="bottomStyle"> 
            没有更多评论了
        </div>
        <div v-if="! bottomShow && nobottomShow" class="bottomStyle"> 
            正在加载更多评论...
        </div>
        <div v-if="! nobottomShow" class="bottomStyle"> 
            还没有人发表评论呢
        </div>
      <div class="mask" v-show="maskShow" @click="noCancelComment()">
      </div>
      <div class="child" v-show="maskShow">
          <div class="cancel" @click="cancelComment()">
              删除评论
          </div>
      </div>
      <bottom v-on:getContent="getCont" :proId="route" v-show="! maskShow"></bottom>
      <div id="foot"></div>
    </div>
  </div>
</template>

<script>
import utils from '../assets/utils'
import headNav from '../components/headNav/HeadBar'
import bottom from '../components/contentBlock/bottom.vue'
import func from '../components/contentBlock/function.vue'
import comment from '../components/comment/'
import {mapState, mapGetters } from 'vuex'
export default {
    data: function () {
        return {
            route: null,
            information: null,
            maskShow: false,
            token:null,
            page: 1,
            scloll:true,
            loaded: false,
            bottomShow: false,
            nobottomShow: true,
            selectComment:{

            },
            newComment:{

            }
        }
    },
    components: {
      bottom,
      func,
      comment,
      headNav
    },
    computed: {
        ...mapState({
        comments: state => state.activity.comments,
        stuId: state => state.auth.userInfo.id,
        cancelAPI: state => state.auth.cancelAPI,
        getAPI: state => state.auth.getAPI,
        viewAPI: state => state.auth.viewAPI,
        detailAPI: state => state.auth.detailAPI,
        }),
        ...mapGetters([
            'detailAPI',
            'cancelAPI',
            'getAPI',
            'viewAPI',
            'JWTHeaderObj'
        ])
    },
    created () {
        this.route = this.$route.params.projectID;
        let detailapi = this.detailAPI + this.route;
        console.log(detailapi);
        let token1 = utils.getCookie('token');
        if (token1 != '') { 
            this.$http.post(
            detailapi, 
            {},
            {
            headers: {
            Authorization: 'JWT' + token1
            }
            }).then((response) => {
                this.information = response.data.info;
                // console.log(this.information);
                console.log(response)
            })
        }
    },
    mounted() {
        setTimeout(() => {
        
            console.log("10秒了")
                this.$http.post(
                this.viewAPI,{'act_id': this.route,},
                {
                headers: this.JWTHeaderObj,
                }).then((response) => {
                 console.log(response)
                },(response) => {

                })
        }, 10000);

        this.$store.commit('cancelAll');
        this.getComment();
        window.addEventListener('scroll', this.scroll)
    },
    methods: {
        back () {
            this.$router.go(-1);
            this.$store.commit('cancelAll');
            // console.log(this.page);
        },
        getCont: function(cont,t,commid,n,stuid,identicon){
            if(cont.length != 0){
                this.newComment = {
                        name: n,
                        time: t,
                        content: cont,
                        likeCount: 0,
                        id:commid,
                        studentId: stuid,
                        identicon: identicon,
                };
                this.$store.commit('addComment',this.newComment);
                // console.log(this.newComment);
            }
        document.querySelector("#foot").scrollIntoView(true);
        },
        getCancelComment: function(item){
            if(item.studentId == this.stuId){
                this.maskShow = !this.maskShow;
                this.selectComment=item;
            }
           
        },
        noCancelComment: function(){
            this.maskShow = !this.maskShow;
        },
        cancelComment: function(){
            this.show = !this.show;
            this.maskShow = !this.maskShow;
            // console.log(this.selectComment);
            this.selectComment.delete=false;
            this.$store.commit('cancelComment',this.selectComment);
            // console.log(this.selectComment.id);
            if (this.token != '') {
                this.$http.post(
                this.cancelAPI,{'comment_id': this.selectComment.id},
                {
                headers: this.JWTHeaderObj
                }).then((response) => {
                // console.log(response)
                },(response) => {

                })
            }
        },
        getComment: function(){
            if (this.token != '') {
                this.$http.post(
                this.getAPI,
                {
                    'act_id': this.route,
                    'page': 1,
                    'size': 10,
                },
                {
                headers: this.JWTHeaderObj
                }).then((response) => {
                console.log(response.data.result);
                this.page = this.page + 1;
                if((response.data.result.length != 10) && (response.data.result.length != 0)){
                    this.page=1;
                    this.bottomShow=true;
                }
                if(response.data.result.length == 0) {
                    this.nobottomShow=false;
                }
                // console.log(this.page+"c");
                this.$store.commit('getComments',response.data.result);
                },(response) => {

                })
            }
            
        },
        scroll() {
            // console.log();
            if (!this.$route.path.includes('detail'))
                return
            // 距离底部200px时加载一次
            let bottomOfWindow = document.documentElement.offsetHeight - document.documentElement.scrollTop - window.innerHeight <= 10
            if ((bottomOfWindow && this.loaded == false)&&(this.page!=1)) {
                // console.log(this.page+"a");
                // console.log('get page: '+this.page);
                this.loaded = true
                
                if (this.token != '') {
                    this.$http.post(
                    this.getAPI,
                    {
                        'act_id': this.route,
                        'page': this.page,
                        'size': 10,
                    },
                    {
                    headers: this.JWTHeaderObj
                    }).then((response) => {
                    // console.log(response.data.result);
                    this.page = this.page + 1;
                    if(response.data.result.length != 10) {
                        this.page=1;
                        this.bottomShow=true;
                    }
                    // console.log('finish ' + this.page);
                    this.loaded = false
                    this.$store.commit('getComments',response.data.result);
                    // this.loaded = true
                    })
                }
            }
        }
    }
}
</script>

<style scoped>
    .choice{
      margin-left:5px;
      margin-top:7px;
      margin-bottom:5px;
    }
    .change{
        margin-bottom:50px;
    }
    .choose{
      border-top: 5px solid #efefef;
      border-bottom: 1px solid #e0e0e0;
    }
    #foot{
        height:65px;
        width: 100%;
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
    .child{
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0px;
        background: #fff;
    }
    .cancel{
        font-size: 20px;
        width:100%;
        text-align:center;
        line-height:50px;
    }
    .bottomStyle{
        font-size: 12px;
        width:100%;
        height:50px;
        text-align:center;
        margin-top:5px;
    }
</style>