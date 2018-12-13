<template>
    <div id="BottomBar">
        <div class="bar">
            <div class="item">        
                <div v-for="(item,index) in items" :item="item">                 
                    <BarItem>
                        <template slot="Icon"><Icon :type="item.icon_name" :color="item.icon_color" :size="item.icon_size" /></template>                           
                        <!--<img slot="Img" src="item.url">-->
                        <template slot="Label"><p>{{item.label}}</p></template>
                    </BarItem>                                        
                </div>
            </div>            
         </div>        
    </div>
</template>

<script>
import BarItem from './BarItem.vue'
export default {
    name: "BottomBar",
    components:{
        BarItem
    },
    props:['items'],
}
</script>

<style scoped>
.bar{
<<<<<<< HEAD
    position: relative;
    text-align: center;
    padding-top: 11px;
    width: 360px;
    height: 55px;
    background: #364e68;
    }
=======
    position: fixed;
    bottom: 0;
    text-align: center;
    padding-top: 11px;
    width: 100%;
    height: 55px;
    background: #364e68;
    z-index: 10;
}
>>>>>>> ee95d0afc063ab226c7b444f52e060382bf7edb2
.item{
    display: flex;
    justify-content: space-around;
}
.item img{
    width:"30px";
    height:"30px";
}
.item p{
    color: white;
}
</style>