<template>
<div id="main">
  <div id="search"><search></search></div>
  <div class="eva"><evaluate></evaluate></div>
  <div id="cardlist"
    :style="{marginTop: heightOfHeader + 'px'}"><CardList></CardList></div>
  <div id="reachbottom" v-if="this[this.loadallmap[this.currentTag]]">已显示近两周全部活动</div>
</div>
</template>

<script>
import {mapState, mapGetters } from 'vuex'
import CardList from '../components/activityList/CardList.vue'
import ActList from '../components/activityList/ActList.vue'
import search from '../components/search/search.vue'
import evaluate from '../components/search/evaluate.vue'

export default {
  data(){
    return{
      //ifloadall: false,
      bgjz_initnum: 0,
      jshd_initnum: 0,
      zyfu_initnum: 0,
      initnummap: {
          '报告讲座': 'bgjz_initnum',
          '竞赛活动': 'jshd_initnum',
          '志愿服务': 'zyfu_initnum',
      },
    }
  },
  components: {
    CardList,
    search,
    evaluate
  },
  computed: {
    ...mapState({
        currentActs:state=>state.activity.currentActs,
        currentTag:state=>state.activity.currentTag,
        bgjzpage:state=>state.activity.bgjzpage,
        jshdpage:state=>state.activity.jshdpage,
        zyfupage:state=>state.activity.zyfupage,
        pagemap:state=>state.activity.pagemap,
        recentbgjz:state=>state.activity.recentbgjz,
        recentjshd:state=>state.activity.recentjshd,
        recentzyfu:state=>state.activity.recentzyfu,
        recentmap:state=>state.activity.recentmap,
        allbgjz:state=>state.activity.allbgjz,
        alljshd:state=>state.activity.alljshd,
        allzyfu:state=>state.activity.allzyfu,
        loadallmap:state=>state.activity.loadallmap,
        heightOfHeader:state=>state.style.heightOfHeader,
    }),
    ...mapGetters([
      'activitySearch',
      'activityApply',
      'JWTHeaderObj'
    ])
  },
  created(){
    window.addEventListener('scroll',this.onScroll)
  },
  mounted () {
    this.$Message.config({
      top: 120,
    }),
    this.$http.get(
      this.activityApply,
      {
        headers: this.JWTHeaderObj,
        params: {for_comment: true}
      }
    ).then((response) => {
      console.log('comment');
      console.log(response.data);
      
      this.$store.commit('initNeedComment', response.data.result);
    })
    this.$http.get(
      this.activityApply,
      {
        headers: this.JWTHeaderObj,
      }
    ).then((response) => {
      this.$store.commit('initApplied', response.data.result);
    })
    /*if(this.currentActs==null||this.currentActs.length==0){
      console.log('no acts')
    }
    else{
      console.log(this.currentActs.length)
    }*/
  },
  methods:{
    onScroll() {
        let innerHeight = document.querySelector('#cardlist').clientHeight; //cardlist总长
        //let headHeight = document.querySelector('#search').clientHeight; //顶部search长度
        let outerHeight = document.documentElement.clientHeight; //屏幕高度
        let scrollTop = document.documentElement.scrollTop; //已上拉长度
        console.log(innerHeight + " " + outerHeight + " " + scrollTop+" "+this.heightOfHeader);
        if (innerHeight < (outerHeight + scrollTop - this.heightOfHeader + 5) && !this[this.loadallmap[this.$store.state.activity.currentTag]]) {  //加1因为高度有些误差，拉到底后已上拉高度存在小数的情况
        //加载更多
            console.log("loadmore");
            //console.log(this.$store.state.activity[this.recentmap[this.$store.state.activity.currentTag]]);
            
            //查询可报名活动
            if(!this.$store.state.activity[this.recentmap[this.$store.state.activity.currentTag]]){ 
              var date=new Date();
              //console.log(date)
              this.$store.commit('loadmore')
              if(this.$store.state.activity[this.$store.state.activity.pagemap[this.$store.state.activity.currentTag]]==1){
                this[this.initnummap[this.$store.state.activity.currentTag]]=this.currentActs.length
                console.log('初始化活动数量：',this[this.initnummap[this.$store.state.activity.currentTag]])
              }     
              console.log('page',this.$store.state.activity[this.$store.state.activity.pagemap[this.$store.state.activity.currentTag]])
              this.$http.post(
                this.activitySearch,
                {size:20,
                page: this.$store.state.activity[this.$store.state.activity.pagemap[this.$store.state.activity.currentTag]],
                type:this.currentTag,
                }
              ).then((res) => {
                let data=res.data.result
                console.log(res)
                if(data.length==0){
                  this.$store.commit('searchrecent')
                }
                let select=0
                while(select<data.length&&data.length!=0){
                  if(data[select].type!=this.$store.state.activity.currentTag){
                    data.splice(select,1)
                  }
                  else{
                    var same=false
                    for(var i=0;i<this[this.initnummap[this.$store.state.activity.currentTag]];i++){
                      if(data[select].id==this.$store.state.activity.currentActs[i].id){ //避开初始化时已有的活动
                        same=true
                        //console.log(data[select].title)
                        data.splice(select,1)
                        break
                      }
                    }
                    if(!same){
                      select++
                    }
                  }
                }
                if(data.length!=0){
                  this.$store.commit('addmoreActs', data)
                }
                if(data.length==0){
                  this.$store.commit('searchrecent')
                }
              })

            }

            //查询近两周活动
            if(this.$store.state.activity[this.recentmap[this.$store.state.activity.currentTag]]){
              var date=new Date();
              var dateend=date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
              //console.log(dateend)
              //var dateend=new Date(Date.parse(datestr.replace('-','/')))
              var daterange=new Date()
              daterange.setDate(daterange.getDate()-14)
              var datebegin=daterange.getFullYear()+'-'+(daterange.getMonth()+1)+'-'+daterange.getDate();
              //console.log(datebegin)

              this.$store.commit('loadmore')
              if(this.$store.state.activity[this.$store.state.activity.pagemap[this.$store.state.activity.currentTag]]==1){
                this[this.initnummap[this.$store.state.activity.currentTag]]=this.currentActs.length
                console.log('初始化活动数量：',this[this.initnummap[this.$store.state.activity.currentTag]])
              }     
              console.log('thepage',this.$store.state.activity[this.$store.state.activity.pagemap[this.$store.state.activity.currentTag]])       
              this.$http.post(
                this.activitySearch,
                {size:20,
                page: this.$store.state.activity[this.$store.state.activity.pagemap[this.$store.state.activity.currentTag]],
                type:this.currentTag,
                apply_end_during:[datebegin,dateend],
                ignore_expired:false}
              ).then((res) => {
                let data=res.data.result
                console.log(res)
                let select=0
                while(select<data.length&&data.length!=0){
                  if(data[select].type!=this.$store.state.activity.currentTag){
                    data.splice(select,1)
                  }
                  else{
                    var same=false
                    for(var i=0;i<this[this.initnummap[this.$store.state.activity.currentTag]];i++){
                      if(data[select].id==this.$store.state.activity.currentActs[i].id){ //避开初始化时已有的活动
                        same=true
                        //console.log(data[select].title)
                        data.splice(select,1)
                        break
                      }
                    }
                    if(!same){
                      select++
                    }
                  }
                }
                if(data.length!=0){
                  this.$store.commit('addmoreActs', data)
                }
                if(data.length==0){
                  this.$store.commit('loadall')
                  //this.ifloadall=this.$store.state.activity[this.loadallmap[this.$store.state.activity.currentTag]]
                  //console.log('ifloadall',this.ifloadall)
                }
              })
            }          
        }
    }
  }

}
</script>

<style scoped>
#search {
  position: fixed;
  top: 0;
  width: 100%;
}
.eva{
  position:relative;
  top:88px;
}

#reachbottom{
  width: 100%;
  height: 30px;
  text-align: center;
  color: grey;
  background: #F6F6F5;
}
</style>
