<template>
    <BottomBar v-bind:items="items" :color="color" :selectedColor="selectedColor"></BottomBar>
</template>

<script>
import BottomBar from '../bottomNav/'
export default {
    props: {
        current: {
            type: String
        }
    },
    data () {
        return{
            items:[
                {
                    id:1,
                    label:"首页",
                    icon_name:"ios-home",
                    icon_size:"26",
                    to: '/home'
                },
                {
                    id:2,
                    label:"探索",
                    icon_name:"ios-planet",
                    icon_size:"26",
                    to: '/explore'
                },
                {
                    id:3,
                    label:"我的",
                    icon_name:"ios-notifications",
                    icon_size:"26",
                    // to: '/mine'
                }
            ],
            color: '#bdbdbd',
            selectedColor: '#ff7657'
        }
    },
    components:{
        'BottomBar': BottomBar
    },
    created () {
        for (let item in this.items) {
            if (this.items[item].label == this.current){
                this.items[item].selected = true
                console.log(this.items[item]);
            }
        }
    }
}
</script>

<style scoped>

</style>