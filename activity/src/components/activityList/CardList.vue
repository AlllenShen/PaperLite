<template>
  <div id="CardList">
    <ActCard :activities="{activities}"></ActCard>
  </div>
</template>

<script>
import ActCard from './ActCard.vue'
import { mapState, mapGetters } from 'vuex'
export default {
    /*data () {
        return{
            activity:'http://api.wyyxhlxy.com/activity/search',
            activities:[]
        }
    },*/
    computed: {
        ...mapState({
            activities:state=>state.activity.activities
        }),
        ...mapGetters([
            'activityAPI'
        ]),
    },
    components:{
        'ActCard':ActCard
    },
    mounted:function(){
        this.getacts()
        //this.$store.commit('getacts')
    },
    methods:{
        getacts:function(){
            this.$http.post(this.activityAPI).then((response) => {
                let data = response.data.result
                console.log(this.activityAPI)
                console.log(response)
                //$store.state.activities=response.data.result
                this.$store.commit('getacts',data)
                //console.log($store.state.activities);
            },(response) => {
                console.log(response);
            })
        }
    }
}
</script>

<style scoped>

</style>
