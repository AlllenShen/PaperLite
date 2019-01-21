<template>
    <BottomBar v-bind:items="items"></BottomBar>
</template>

<script>
import BottomBar from './BottomBar.vue'
export default {
    data () {
        return{
            items:[
                {id:1,label:"首页",icon_name:"ios-home",icon_color:"white",icon_size:"24"},
                {id:2,label:"探索",icon_name:"ios-planet",icon_color:"white", icon_size:"24"},
                {id:3,label:"我的",icon_name:"ios-notifications",icon_color:"white",icon_size:"24"}
            ]
        }
    },
    components:{
        'BottomBar': BottomBar
    }
}
</script>

<style scoped>

</style>