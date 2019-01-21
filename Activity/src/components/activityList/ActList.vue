<template>
  <div id="ActList">
    <filtrank v-bind:filter="filter" v-bind:rank="rank"></filtrank>
    <ActOverview v-bind:activities="activities"></ActOverview>
  </div>
    
</template>

<script>
import ActOverview from './ActOverview.vue'
import filtrank from './filtrank.vue'
export default {
    data () {
        return{
            activities:[
                {actkey:1, acttype: '竞赛活动', actname: '活动1', acttime: '2018-01-01', actplace: '翠三教101', actmember:'计算机与信息学院全体学生', actnote: 'balabalabala'},
                {actkey:2, acttype: '报告讲座', actname: '活动2', acttime: '2018-01-02', actplace: '翠三教102',actmember:'全校师生', actnote: 'balabalabala'},
                {actkey:3, acttype: '志愿服务', actname: '活动3', acttime: '2018-01-03', actplace: '翠三教103',actmember:'计算机与信息学院全体学生', actnote: 'balabalabala'}
            ],
            btn_of_card:[
                {btnkey:1, btnname:'报名', btncolor:'#98ccd3', btnborder:'#98ccd3'},
                {btnkey:2, btnname:'详情', btncolor:'#fbeed7', btnborder:'#fbeed7'}
            ],
            filter:[
                {
                    clsname:'活动类型',
                    options:[
                        {key:1, optname:'竞赛活动', selected:false},
                        {key:2, optname:'报告讲座', selected:false},
                        {key:3, optname:'志愿服务', selected:false}
                    ]
                },
                {
                    clsname:'活动时间',
                    options:[
                        {key:1, optname:'1月', selected:false},{key:2, optname:'2月', selected:false},{key:3, optname:'3月', selected:false},{key:4, optname:'4月', selected:false},
                        {key:5, optname:'5月', selected:false},{key:6, optname:'6月', selected:false},{key:7, optname:'7月', selected:false},{key:8, optname:'8月', selected:false},
                        {key:9, optname:'9月', selected:false},{key:10, optname:'10月', selected:false},{key:11, optname:'11月', selected:false},{key:12, optname:'12月', selected:false}
                    ]
                }
            ],
            rank:[
                {key:1, rankname:'时间'}
            ]
        }
    },
    components:{
        'ActOverview':ActOverview,
        'filtrank':filtrank
    }
}
</script>

<style scoped>

</style>

