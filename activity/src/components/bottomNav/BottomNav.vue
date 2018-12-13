<template>
    <BottomBar v-bind:items="items"></BottomBar>
</template>

<script>
import BottomBar from './BottomBar.vue'
export default {
    data () {
        return{
            items:[
<<<<<<< HEAD
                {id:1,label:"首页",icon_name:"md-calendar",icon_color:"white",icon_size:"20"},
                {id:2,label:"浏览",icon_name:"md-list",icon_color:"white", icon_size:"20"},
                {id:3,label:"我的",icon_name:"md-person",icon_color:"white",icon_size:"20"}
=======
                {id:1,label:"首页",icon_name:"ios-home",icon_color:"white",icon_size:"24"},
                {id:2,label:"探索",icon_name:"ios-planet",icon_color:"white", icon_size:"24"},
                {id:3,label:"我的",icon_name:"ios-notifications",icon_color:"white",icon_size:"24"}
>>>>>>> ee95d0afc063ab226c7b444f52e060382bf7edb2
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