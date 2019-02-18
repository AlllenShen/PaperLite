<template>
  <div id="ActList">
    <filtrank v-bind:filter="filter" v-bind:rank="rank"></filtrank>
    <ActOverview v-bind:activities="activities"></ActOverview>
  </div>
    
</template>

<script>
import ActOverview from './ActOverview.vue'
import filtrank from './filtrank.vue'
import { mapState } from 'vuex';
export default {
    data () {
        return{
            activity:'http://118.89.48.63:8001/activity/search',
            activities:[],
            para1:'',
            /*activities:[
                {actkey:1, acttype: '竞赛活动', actname: '活动1', acttime: '2018-01-01', actplace: '翠三教101', actmember:'计算机与信息学院全体学生', actnote: 'balabalabala'},
                {actkey:2, acttype: '报告讲座', actname: '活动2', acttime: '2018-01-02', actplace: '翠三教102',actmember:'全校师生', actnote: 'balabalabala'},
                {actkey:3, acttype: '志愿服务', actname: '活动3', acttime: '2018-01-03', actplace: '翠三教103',actmember:'计算机与信息学院全体学生', actnote: 'balabalabala'}
            ],*/
            btn_of_card:[
                {btnkey:1, btnname:'报名', btncolor:'#98ccd3', btnborder:'#98ccd3'},
                {btnkey:2, btnname:'详情', btncolor:'#fbeed7', btnborder:'#fbeed7'}
            ],
            filter:[
                {
                    clsname:'类型',
                    options:[
                        {key:1, optname:'竞赛活动', selected:false},
                        {key:2, optname:'报告讲座', selected:false},
                        {key:3, optname:'志愿服务', selected:false}
                    ]
                },
                {
                    clsname:'时间',
                    options:[
                        {key:1, optname:'1月', selected:false},{key:2, optname:'2月', selected:false},{key:3, optname:'3月', selected:false},{key:4, optname:'4月', selected:false},
                        {key:5, optname:'5月', selected:false},{key:6, optname:'6月', selected:false},{key:7, optname:'7月', selected:false},{key:8, optname:'8月', selected:false},
                        {key:9, optname:'9月', selected:false},{key:10, optname:'10月', selected:false},{key:11, optname:'11月', selected:false},{key:12, optname:'12月', selected:false}
                    ]
                },
                {
                    clsname:'学院',
                    options:[
                        {key:1, optname:'计算机', selected:false},
                        {key:2, optname:'软件', selected:false},
                        {key:3, optname:'化工', selected:false},
                        {key:4, optname:'机械', selected:false},
                        {key:5, optname:'电气', selected:false},
                        {key:6, optname:'土木与水利', selected:false},
                        {key:7, optname:'马克思', selected:false},
                        {key:8, optname:'食品', selected:false},
                        {key:9, optname:'管理', selected:false},
                        {key:10, optname:'建艺', selected:false},
                        {key:11, optname:'生医', selected:false},
                        {key:12, optname:'电物与微电子', selected:false},
                        {key:13, optname:'资环', selected:false},
                    ]
                }
            ],
            rank:[
                {key:1, rankname:'按时间排序'},
                {key:2, rankname:'按类型排序'}
            ]
        }
    },
    components:{
        'ActOverview':ActOverview,
        'filtrank':filtrank
    },
/*    state:{
        Myactivities:[]
    },*/
    mounted:function(){
        this.getact()
    },
/*    computed:{
        ...mapState({
            Myactivities:state => state.Myactivities
        })
    },*/
    /*mutations:{
        getact(state){
            this.activities=state.Myactivities
        }
    },*/
    methods:{
        getact:function(){
            this.$http.post(this.activity,{'type_name':this.para1}).then((response) => {
                //console.log(response.data)
                console.log(response)
                this.activities=response.data.result
                console.log(activities);
            },(response) => {
                console.log(response);
            })
        }
    }
}
</script>

<style scoped>

</style>

