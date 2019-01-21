<template>
  <div id="scroll-main">
    <div>
        <div class="mine">
          我的
        </div>
        <scrollView class="scroll-pad" :scrollX="true" :width="minewidth" :data="mine">
        <card class="card" :style="{marginLeft: cardMargin + 'px'}" v-for="item in mine" 
          :color="item.color" 
          :type="item.type" 
          :name="item.name" 
          :time="item.time" 
          :place="item.place"
          :width="cardWidth"
        ></card>
      </scrollView>
    </div>
    <div>
        <div class="all">
          全部
        </div>
      <scrollView class="scroll-pad" :scrollX="true" :width="allwidth" :data="all">
        <card class="card" :style="{marginLeft: cardMargin + 'px'}" v-for="item in all" 
          :color="item.color" 
          :type="item.type" 
          :name="item.name" 
          :time="item.time" 
          :place="item.place"
          :width="cardWidth"
        ></card>
      </scrollView>
    </div>
  </div>
</template>

<script>
import card from './card.vue'
import BScroll from 'better-scroll' 
import scrollView from '../HscrollView'
export default {
  data () {
    return {
      mine: [
          {
            color: '#74b49b',
            type: '竞赛活动',
            name:'数学竞赛',
            time:'8:00',
            place:'二教101'
          },
          {
            color: '#ffba6a',
            type: '报告讲座',
            name: '这是一个长名称的测试',
            time: '9:00',
            place:'五教101'
          },
          {
            color: '#ff987e',
            type: '志愿服务',
            name: '人工智能讲座',
            time: '9:00',
            place:'五教101'
          },
          {
            color: '#4a4a48',
            type: '为您推荐',
            name: '人工智能讲座',
            time: '9:00',
            place:'五教101'
          },
      ],
      all: [{
            color: '#ffba6a',
            type: '报告讲座',
            name: '这是一个长名称的测试',
            time: '9:00',
            place:'五教101'
          },
          {
            color: '#ff987e',
            type: '志愿服务',
            name: '人工智能讲座',
            time: '9:00',
            place:'五教101'
          },
          {
            color: '#4a4a48',
            type: '为您推荐',
            name: '人工智能讲座',
            time: '9:00',
            place:'五教101'
          },],
      cardWidth: 130,
      cardMargin: 16,
    }
  },
  computed: {
    minewidth () {
      return this.cardWidth * (this.mine.length + 1)
    },
    allwidth () {
      return this.cardWidth * (this.all.length + 1)
    }
  },
  components: {
    card,
    scrollView
  }
}
</script>

<style scoped>
#scroll-main {
  overflow: hidden;
  border-top: solid 5px #efefef;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.mine{
  font-size: 15px;
  color:#4a4a48;
  padding: 1.2rem 0.5rem 0.7rem 0.5rem;
  background-color: #ffffff
}
.all{
  font-size: 15px;
  color:#4a4a48;
  padding: 1.2rem 0.5rem 0.7rem 0.5rem;
  background-color: #ffffff
}
.scroll-pad {
  padding-left: 1rem;
}
.card{
  float: left;
}


</style>

