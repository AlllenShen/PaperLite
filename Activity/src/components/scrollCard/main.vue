<template>
  <div id="scroll-main">
      <div class="nav">
        <div class="mine" :class="{'select': selected == mine}" @click="selectMine()">
          我的
        </div>
        <div class="all" :class="{'select': selected == all}" @click="selectAll()">
          全部
        </div>
      </div>
      <scrollView class="scroll-pad" :scrollX="true" :width="width" :data="selected">
        <card class="card" :style="{marginLeft: cardMargin + 'px'}" v-for="item in selected" 
          :color="item.color" 
          :type="item.type" 
          :name="item.name" 
          :time="item.time" 
          :place="item.place"
          :width="cardWidth"
        ></card>
      </scrollView>
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
      all: [],
      selected: [],
      cardWidth: 130,
      cardMargin: 16,
    }
  },
  computed: {
    width () {
      return this.cardWidth * (this.selected.length + 1)
    }
  },
  components: {
    card,
    scrollView
  },
  mounted () {
    this.selected = this.mine

  },
  methods:{
    selectMine () {
      this.selected = this.mine
    },
    selectAll () {
      this.selected = this.all
    },
  }
}
</script>

<style scoped>
#scroll-main {
  overflow: hidden;
  /* background-color: #efefef; */
  border-top: solid 5px #efefef;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.mine, .all{
  display: block;
  writing-mode: vertical-lr;
  font-size: 12px;
  color:#4a4a48;
  padding: 1.2rem 0.5rem 1.2rem 0.5rem;
  /* border-right: solid 1px #efefef; */
  /* border-bottom: solid 1px #efefef; */
  background-color: #ffffff
}
.scroll-pad {
  padding-left: 0.5rem;
}
.select{
  background-color: #627a97;
  color: white;
}
.nav {
  position: relative;
  float: left;
  left: 0;
  top: 0;
  z-index: 9;
}
.card{
  float: left;
}


</style>

