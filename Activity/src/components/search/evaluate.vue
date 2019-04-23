<template>
    <div>
        <transition name="evaluate"> 
            <div v-show="isactive && show" class="hideshow">
                    <scrollCard></scrollCard> 
            </div>
        </transition>
        

        <div class="unfind" @click="toggle()" v-show="show">
            待评价
            <Icon v-if="isactive" type="ios-arrow-up" />
            <Icon v-else type="ios-arrow-down" />
        </div>
    </div>

</template>


<script>
import { mapState, mapGetters } from 'vuex'

import scrollCard from '../scrollCard/'
export default {
    data () {
        return {   
            isactive: false,
        }
    },
    components: {
      scrollCard
    },
    computed: {
        ...mapState({
            show: state => {
                if(state.activity.needComment.length == 0){
                    return false
                }
                else{
                    return true
                }
            }
        }),
        ...mapGetters([
            'activitySearch',
            'activityApply',
            'JWTHeaderObj'
        ])
    },
    created () {
        
    },
    methods:{
        toggle:function(){
            this.isactive = !this.isactive;
        },
    },
}
</script>

<style scoped>
    .unfind{
        float:none;
        text-align: center;
        font-family: PingFangSC-regular;
        background-color: #f6f6f5;
        margin-bottom: -15px;
        color: #5F98F4;
        font-size: 13px;
    }
    .hideshow{
        float: none;
        height: 90px;
        background-color: #f6f6f5;
    }
</style>