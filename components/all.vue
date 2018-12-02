<template>
  <div id="app">
    <div class="pro-wrapper" ref="proWrapper">
      <ul class="pro-list" ref="proList">
        <li class="pro-items" v-for="item in items">
            <project  :color="item.color" :type="item.type" :name="item.name" :time="item.time" :place="item.place"></project>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import project from './project.vue'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      items: [
          {
            color: '#ff7657',
            type: '志愿服务',
            name: '人工智能讲座',
            time: '9:00',
            place:'五教101'
          },
          {
            color: '#ffba5a',
            type: '竞赛活动',
            name:'数学竞赛',
            time:'8:00',
            place:'二教101'
          },
          {
            color: '#665c84',
            type: '报告讲座',
            name: '人工智能讲座',
            time: '9:00',
            place:'五教101'
          },
      ]
    }
  },
  components: {
    project
  },
  mounted () {
    this.$nextTick(()=>{
      this._initPros();
    });
  },
  watch:{
    'items'(){
      this.$nextTick(()=>{
      this._initPros();
      });
    }
  },
  methods:{
        //用于初始化“活动块”的横向滚动效果
              _initPros(){        
                //先判断是否有这个属性                 
                   //这里之所以要设置宽度，是因为.pic-wrapper和.pic-list的宽度一样大          
                   //当.pic-list的宽度大于.pic-wrapper的宽度，才能横向滚动          
                   let proWidth = 120; //这里是设置每张图片的宽度          
                   let margin = 100;          //width是所有图片的宽度和以及margin的大小和          
                   let width = (proWidth + margin)*this.items.length - margin;          
                   console.log(width);          
                   this.$refs.proList.style.width = width + 'px'; //设置.pic-list的宽度的宽度          
                   this.$nextTick(()=>{            
                     if(!this.proScroll){              
                       this.proScroll = new BScroll(this.$refs.proWrapper,{                
                         scrollX:true,                
                         eventPassthrough:'vertical' //忽略竖直方向的滚动              
                         });            
                      }else{              
                        this.proScroll.refresh();            
                      }       
                    });        
              }
  }
}
</script>

<style>
  .pro-wrapper{
    position: fixed;
    left:10%;
    top:0%;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
  .pro-list{

  }
  .pro-items{
    display: inline-block;
    margin-right: 16px;
    width:150px;
  }
  li{
    float: left;
    list-style: none;
  }
</style>

