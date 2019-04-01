<template>
  <div id="scroll-main">
    <div>
        <scrollView class="scroll-pad" :scrollX="true" :width="minewidth" :data="mine" >
            <div v-for="item in mine">
                <div @click="evaluate(item)">
                    <card class="card" :style="{marginLeft: cardMargin + 'px'}" 
                      :name="item.title" 
                      :projectId="item.id"
                      :width="cardWidth"
                    ></card>
                </div>
            </div>
        </scrollView>
      <div class="mask" v-show="maskShow" @click="evaluate2()">
      </div>
      <div class="child" id="child" v-show="maskShow">
          <star 
          :actTitle="selectAct.title"
          :actID="selectAct.id">
          </star>
      </div>
    </div>
  </div>
</template>

<script>
import card from './card.vue'
import BScroll from 'better-scroll' 
import scrollView from '../HscrollView'
import star from '../feedback/star.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      maskShow: false,
      selectAct:{

      },
      cardWidth: 130,
      cardMargin: 16,
    }
  },
  computed: {
    minewidth () {
      return (this.cardWidth+20) * (this.mine.length + 1)
    },
    allwidth () {
      return this.cardWidth * (this.all.length + 1)
    },
    ...mapState({
      mine: (state) => state.activity.applied,
    })
  },
  components: {
    card,
    scrollView,
    star
  },
  methods:{
    evaluate (item){
        this.maskShow = !this.maskShow;
        this.selectAct = item;
    },
    evaluate2 (){
        this.maskShow = !this.maskShow;
    },
  }
}
</script>

<style scoped>
#scroll-main {
  overflow: hidden;
  padding-top: 0.5rem;
}
.scroll-pad {
  padding-left: 0.3rem;
}
.card{
  float: left;
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
    height: 570px;
    bottom: 0px;
    background: #fff;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

</style>