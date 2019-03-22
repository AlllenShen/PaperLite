<template>
    <div>
        <div class="boardsearch">
            <div class="search">
                <Input v-model="searchstr" prefix="md-menu"  suffix="md-more" style="width: 98%" />
            </div>

        </div>
        
        <div class="classfic">

            <div v-for="tab in tabs" class='classf'>
                {{tab.activityc}}
            </div>
        </div>
        
        <div v-show="isactive" class="hideshow">
            <div class="un_activity" @click="colorchg(this)">
                {{acti_name}}
            </div>    
        </div>

        <div class="unfind" @click="toggle()">
            待评价
            <Icon v-if="isactive" type="ios-arrow-down" />
            <Icon v-else type="ios-arrow-up" />
        </div>
    </div>

</template>


<script>
    import { mapState } from 'vuex';
    export default {

        data () {
            return {
                activity:'http://118.89.48.63:8001/activity/search',
                searchstr: ' ',
                tabs:[
                    {activityc:'竞赛活动',value:1},
                    {activityc:'报告讲座',value:2},
                    {activityc:'志愿服务',value:3}
                    ],   
                acti_name: "趣味代码大赛",

                isactive: false,
            }
        },
        mounted:function(){
            this.getaction();
        },
        
        methods:{

            toggle:function(){
                this.isactive = !this.isactive;
            },

            trans:function(){
                this.aortactivi = !this.sortactivi;
            },
            // colorchg(_this){
            //     this.style.color="white";
            // }
            getaction:function(){
                this.$http.post(this.activity,{'title_like':this.searchstr}).then((response) => {
                    console.log(response)
                    this.activities=response.data.result
                    console.log(response);
                },(response) => {
                    console.log(response);
                })
            }

        }
        
    }
</script>

<style>
    .boardsearch{
        left: 0px;
        width: 100%;
        height: 50px;
        line-height: 25px;
        background-color: rgba(189, 189, 189, 1);
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .search{
        left: 5px;
        top: 25px;
        width: 100%;
        height: 40px;
        margin-top: 5px;
        line-height: 20px;
        border-radius: 3px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0);
    }
    .classfic{
        height: 40px;
        line-height: 40px;
        background-color: rgba(189, 189, 189, 1);
        /* margin-bottom: 2px; */
        text-align: center;
    }
    .classf{
        display: inline;
        padding:30px;
        color: rgba(132, 132, 132, 1);
        text-align: center;
        line-height: 20px;
        border: 1px solid rgba(255, 255, 255, 0);
        font-family: PingFangSC-regular;
        font-size: 14px;
    }

    .unfind{
        float:none;
        margin: 0px;
        text-align: center;
        /* font-size: 8px; */
        /* border-top: 1px  solid gray; */
        color: rgba(132, 132, 132, 1);
        font-family: PingFangSC-regular;
        background-color: rgb(230, 230, 230);
    }

    .hideshow{
        float: none;
        height: 90px;
        text-align: center;
        border-top: 1px solid rgba(132, 132, 132, 1);
        background-color: rgb(230, 230, 230);
    }
    .un_activity{
        margin: 15px;
        width: 90px;
        height:60px;
        line-height: 50px;
        border: 1px solid rgba(132, 132, 132, 1);
        border-radius:5%; 
        color: aliceblue;
        background-color: rgba(132, 132, 132, 1);
        font-family: PingFangSC-regular;

    }


</style>


    