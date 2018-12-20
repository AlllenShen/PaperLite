<template>
    <HeadBar v-bind:headline="title">
        <template slot="left_element">
            <Icon type="md-person" color="#7e7e7e" size="26" />
            <!-- <Icon type="md-arrow-back" color="#7e7e7e" size="24" /> -->
        </template>
        <template slot="right_element">
            <Icon type="md-more" color="#7e7e7e" size="24" />
        </template>            
    </HeadBar>
</template>

<script>
import HeadBar from '../headNav/'
export default {
    props:{
        title: {
            type: String
        },
    },
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

