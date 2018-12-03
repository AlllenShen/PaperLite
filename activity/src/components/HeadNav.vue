<template>
    <HeadBar v-bind:headline = "bar_title">
        <template slot="left_element">
            <Icon type="md-arrow-back" color="white" size="20" />
        </template>

        <template slot="right_element">
            <Icon type="md-more" color="white" size="20" />
        </template>            
    </HeadBar>
</template>

<script>
import HeadBar from './HeadBar.vue'
export default {
    data () {
        return{
            bar_title: '标题'
        }
    },
    components: {
        'HeadBar': HeadBar
    }
    
}
</script>

