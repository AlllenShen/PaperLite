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
    z-index: 10;
    border-bottom: #dedede solid 1px;
    background-color: white;
}
.left_item {
    position: absolute;   
    margin-left: 3%;
    }
.headline{   
    position: absolute;
    /* font-weight: bold; */
    font-size: 17px;
    left: 44%;
    top: 30%;
    color: #1e1e1e
}
.right_item{
    position: absolute;
    margin-left: 90%
}
</style>
