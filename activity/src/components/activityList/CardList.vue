<template>
  <div id="CardList">
    <ActCard :activities="currentActs"></ActCard>
  </div>
</template>

<script>
import ActCard from './ActCard.vue'
import { mapState, mapGetters } from 'vuex'
export default {
    computed: {
        ...mapState({
            currentActs:state=>state.activity.currentActs,
            bgjzpage:state=>state.activity.bgjzpage,
            jshdpage:state=>state.activity.jshdpage,
            zyfupage:state=>state.activity.zyfupage,
            pagemap:state=>state.activity.pagemap,
        }),
        ...mapGetters([
            'activitySearch'
        ]),
    },
    components:{
        'ActCard':ActCard
    },
}
</script>

<style scoped>
#CardList{
    background-color: #F6F6F5;
    padding-top: 0.5rem;
}
</style>
