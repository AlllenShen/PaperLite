<template>
  <div class='card' :style="{width: width + 'px'}" @click="goTail">
    <div :style='backColor' class="cardHead">
      <p>{{type}}</p>
    </div>
    <div class="cardBody">
      <div class="name">{{name}}</div>
      <div class="time">活动时间：{{time}}</div>
      <div class="place">活动地点：{{place}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () { 
      return { 
        backColor: {  
          backgroundColor: '#fff'
        }
      }  
    },
    props: ['color','type','name','time','place', 'width'],
    mounted () {   
      this.backColor = {backgroundColor: this.color}
    },
    methods:{
      goTail() {
        this.$router.push('/detail')
      }
    }
  }
</script>

<style lang="less" scoped>
.card{
  border: 1px solid #dcdee2;
  min-width: 115px;
  border-radius: 10px;
}
.cardHead{
  border-bottom: 1px solid #e8eaec;
  font-size: 15px;
  font-weight: bold;
  text-align: center;
  /* left:50%; */
  color: #ffffff;
  padding: 10px 0px;
  line-height: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* height: 35px; */
}
.cardBody{
  // font-size: 3px;
  font-family: 'PingFang';
  padding: 1rem 0.5rem 1rem 0.5rem;
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  /* height:70px; */
  div {
    text-align: left;
    width: 100%; 
    white-space:nowrap; 
    overflow:hidden; 
    text-overflow:ellipsis;
  }
}
.name {
  font-size: 1rem;
  font-weight: bold;
}
</style>


