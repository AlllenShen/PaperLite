<template>
  <div class='card' :style="{width: width + 'px'}">
      <div class="name">{{name}}</div>
    
  </div>
</template>

<script>
  export default {
    data () { 
      return { 
        
      }  
    },
    props: ['name','width'],
    mounted () {   
    },
  }
</script>

<style lang="less" scoped>
.card{
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  color:#4a4a48;
  background-color: #dfdfdf;
  height: 70px;
  display: table;
}

.name {
  padding-top:0.25rem;
  padding-left: 7px;
  font-size: 0.8rem;
  display: table-cell;
  vertical-align:middle;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

</style>