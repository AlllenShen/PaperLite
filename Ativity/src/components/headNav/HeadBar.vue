<template>
  <div id="HeadBar">
    <div class="bar">
      <div class="left_item">
        <slot name="left_element"></slot>
      </div>
      <div class="headline">
        <p>{{headline}}</p>
      </div>
      <div class="right_item">
        <slot name="right_element"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['headline']
}
</script>

<style scoped>
.bar{
    position: fixed;
    top: 0;
    text-align: center;
    padding-top: 20px;
    width: 100%;
    height: 55px;
    background: #364e68;
    z-index: 10;
}
.left_item {
    position: absolute;   
    margin-left: 3%;
    }
.headline{   
    position: absolute;
    font-size: 17px;
    color: white;
    left: 44%;
    top: 30%;
}
.right_item{
    position: absolute;
    margin-left: 90%
}
</style>
