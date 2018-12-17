<template>
    <BottomBar v-bind:items="items" :color="color" :selectedColor="selectedColor"></BottomBar>
</template>

<script>
import BottomBar from '../bottomNav/'
export default {
    data () {
        return{
            items:[
                {
                    id:1,
                    label:"首页",
                    icon_name:"ios-home",
                    icon_size:"26",
                    selected: true
                },
                {
                    id:2,
                    label:"探索",
                    icon_name:"ios-planet",
                    icon_size:"26"
                },
                {
                    id:3,
                    label:"我的",
                    icon_name:"ios-notifications",
                    icon_size:"26"
                }
            ],
            color: '#bdbdbd',
            selectedColor: '#ff7657'
        }
    },
    components:{
        'BottomBar': BottomBar
    }
}
</script>

<style scoped>

</style>