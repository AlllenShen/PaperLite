<template>
    <ActOverview v-bind:activities="activities"></ActOverview>
</template>

<script>
import ActOverview from './ActOverview.vue'
export default {
    data () {
        return{
            activities:[
                {acttype: '竞赛活动', actname: '活动1', acttime: '2018-01-01', actplace: '翠三教101', actmember:'计算机与信息学院全体学生', actnote: 'balabalabala'},
                {acttype: '报告讲座', actname: '活动2', acttime: '2018-01-02', actplace: '翠三教102',actmember:'全校师生', actnote: 'balabalabala'},
                {acttype: '志愿服务', actname: '活动3', acttime: '2018-01-03', actplace: '翠三教103',actmember:'计算机与信息学院全体学生', actnote: 'balabalabala'}
            ]
        }
    },
    components:{
        'ActOverview':ActOverview
    }
}
</script>

<style scoped>

</style>

