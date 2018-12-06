<template>
    <BottomBar v-bind:items="items"></BottomBar>
</template>

<script>
import BottomBar from './BottomBar.vue'
export default {
    data () {
        return{
            items:[
                {id:1,label:"首页",icon_name:"md-calendar",icon_color:"white",icon_size:"20"},
                {id:2,label:"浏览",icon_name:"md-list",icon_color:"white", icon_size:"20"},
                {id:3,label:"我的",icon_name:"md-person",icon_color:"white",icon_size:"20"}
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