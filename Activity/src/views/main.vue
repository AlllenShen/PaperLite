<template>
<div id="main">
  <div id="search"><search></search></div>
  <div id="cardlist"
    :style="{marginTop: heightOfHeader + 'px'}"><CardList></CardList></div>
</div>
</template>

<script>
import {mapState, mapGetters } from 'vuex'
import CardList from '../components/activityList/CardList.vue'
import ActList from '../components/activityList/ActList.vue'
import search from '../components/search'

export default {
  components: {
    CardList,
    search,
  },
  computed: {
    ...mapState({
        currentActs:state=>state.activity.currentActs,
        bgjzpage:state=>state.activity.bgjzpage,
        jshdpage:state=>state.activity.jshdpage,
        zyfupage:state=>state.activity.zyfupage,
        pagemap:state=>state.activity.pagemap,
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
    })
    this.$http.get(
      this.activityApply,
      {headers: this.JWTHeaderObj}
    ).then((res) => {
      this.$store.commit('initApplied', res.data.result)
      this.$Message.success('刷新成功')
    }, (res) => {
      this.$Message.error('刷新失败，请检查网络')
    })
  },
  methods:{
    onScroll() {
        let innerHeight = document.querySelector('#cardlist').clientHeight; //cardlist总长
        //let headHeight = document.querySelector('#search').clientHeight; //顶部search长度
        let outerHeight = document.documentElement.clientHeight; //屏幕高度
        let scrollTop = document.documentElement.scrollTop; //已上拉长度
        console.log(innerHeight + " " + outerHeight + " " + scrollTop+" "+this.heightOfHeader);
        if (innerHeight < (outerHeight + scrollTop - this.heightOfHeader + 5)) {  //加1因为高度有些误差，拉到底后已上拉高度存在小数的情况
        //加载更多
            console.log("loadmore");
            this.$store.commit('loadmore')
            this.$http.post(
                this.activitySearch,
                {size:20,
                page: this.$store.state.activity[this.$store.state.activity.pagemap[this.$store.state.activity.currentTag]]}
            ).then((res) => {
                let data=res.data.result
                //console.log(data)
                let select=0
                while(select<data.length){
                  if(data[select].type!=this.$store.state.activity.currentTag){
                    data.splice(select,1)
                  }
                  else{
                    var same=false
                    for(var i=0;i<10;i++){
                      if(data[select].id==this.$store.state.activity.currentActs[i].id){ //避开初始化时已有的10个活动
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
            })
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
</style>
