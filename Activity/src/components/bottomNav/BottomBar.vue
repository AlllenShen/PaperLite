<template>
    <div id="BottomBar">
        <div class="bar">
            <div class="item" :style="{'color': color}">        
                <div v-for="(item,index) in items">                 
                    <BarItem @click.native="navTo(item.to)">
                        <template slot="Icon" >
                            <Icon v-if="item.selected" :type="item.icon_name" :color="selectedColor" :size="item.icon_size" />
                            <Icon v-else :type="item.icon_name" :color="color" :size="item.icon_size" />
                        </template>                           
                        <!--<img slot="Img" src="item.url">-->
                        <template slot="Label">
                            <p v-if="item.selected" :style="{'color':selectedColor}">{{item.label}}</p>
                            <p v-else>{{item.label}}</p>
                        </template>
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
    props:{
        items:{
            type: Array
        }, 
        color: {
            type: String
        }, 
        selectedColor:{
            type: String
        }
    },
    data () {
        return {

        }
    },
    methods: {
        navTo (path) {
            // console.log(path);
            this.$router.push(path)
        }
    }
}
</script>

<style scoped>
.bar{
    position: fixed;
    bottom: 0;
    text-align: center;
    padding-top: 11px;
    width: 100%;
    height: 55px;
    background: #ffffff;
    border-top: #dedede solid 1px;
    z-index: 10;
}
.item{
    display: flex;
    justify-content: space-around;
}
.item img{
    width:"30px";
    height:"30px";
}
.item p{
    /* color: white; */
}
</style>