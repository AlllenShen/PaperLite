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
}
.hideshow{
    float: none;
    height: 90px;
    background-color: #f6f6f5;
}

.evaluate-enter-active, .evaluate-leave-active {
}
.evaluate-enter, .evaluate-leave-to {
}
</style>