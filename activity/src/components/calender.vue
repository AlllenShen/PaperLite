<template>
    <div id="calender">
        <div class="month">
            <ul>
                <li class="arrow" @click="pickPre(currentyear,currentmonth)"> ← </li>

                <!-- 显示年月  -->
                <li class="year-month" @click="pickYear(currentyear,currentmonth)">
                    <span class="choose-year">{{currentyear}} </span>
                    <span class="choose-month">{{currentmonth}}月</span>
                </li>

                <li class="arrow" @click="pickNext(currentyear,currentmonth)"> → </li>
            </ul>        
        </div>

        <ul class="weekdays">
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
        </ul>

        <ul class="days">
            <li v-for="dayobject in days" @click="clickday" >
               <span v-if="dayobject.day.getMonth()+1 != currentmonth" class="other-month">{{ dayobject.day.getDate() }}</span>

            <!--如果是本月  还需要判断是不是这一天-->
            <span v-else>
             <!--今天  同年同月同日-->
                <span v-if="dayobject.day.getFullYear() == new Date().getFullYear() 
                        && dayobject.day.getMonth() == new Date().getMonth() 
                        && dayobject.day.getDate() == new Date().getDate()" > <!-- class="active" -->
                        {{ dayobject.day.getDate() }}
                </span>
                <span v-else>{{ dayobject.day.getDate() }}</span>
            </span>
                
                <!-- 显示每天的活动数量 -->
                <p v-if="dayactivity[dayobject.index]" >
                     <span  class= "active">{{dayactivity[dayobject.index].count}}</span>  
                </p>
            </li>
        </ul>

    </div>
</template>



<script>
import Vue from 'vue';
//import VueResource from 'vue-resource'
import axios from 'axios';

   export default{
    e1:"#calender",
    data:function(){
        return{
        currentday:1,
        currentmonth:1,
        currentyear:2000,
        currentweek:1,
        days:[],
        dayactivity:[
            {count:1},
            {count:2},
            {count:3},
            {count:4},
            {count:5},
        ],
        activityData:[]
        }
    },
    created:function(){
        this.initDate(null);
    },

    methods:{
        initDate:function(cur){
            var leftcount=0;
            var date;
            var index=0;
            var dayactivity;

            // submitday: function() {
            //     var activityData = JSON.stringify(this.day); //表单数据
            //     this.$http.post('http://localhost:8088/post', activityData).then((response) => {
            //     console.log(response.data);
            //     }, (response) => {
            //     console.log("error");
            //     });
            // };


            if(cur){
                date=new Date(cur)
            }else {
                var now=new Date();
                var d=new Date(this.formaDate(now.getFullYear(),now.getMonth(),1));
                d.setDate(35);
                date=new Date(this.formaDate(d.getFullYear(),d.getMonth()+1,1));
            }
                this.currentday=date.getDate();
                this.currentmonth=date.getMonth()+1;
                this.currentyear=date.getFullYear();
                this.currentweek=date.getDay();

                if(this.currentweek==0){
                    this.currentweek=7;
                }

                var str =this.formaDate(this.currentyear,this.currentmonth,this.currentday);
                this.days.length=0;

                for(var i=this.currentweek-1;i>=0;i--){
                    var d=new Date(str);
                    d.setDate(d.getDate()-i);
                    var dayobject={};
                    dayobject.day=d;
                    if(d.getDate()===(now.getDate())&&d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear())
                    {
                        dayobject.index=index++;
                    }
                    else  if(index!=0)dayobject.index=index++;
                    this.days.push(dayobject);
                }

                for(var i=1;i<=35-this.currentweek;i++){
                    var d=new Date(str);
                    d.setDate(d.getDate()+i);
                    var dayobject={};
                    dayobject.day=d;
                
                    if(d.getDate()===(now.getDate())&&d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear())
                    {
                        dayobject.index=index++;
                    }
                    else  if(index!=0)dayobject.index=index++;

                    this.days.push(dayobject);
                }
                
            },

        pickPre:function(year,month){
            var d=new Date(this.formaDate(year,month,1));
            d.setDate(0);
            this.initDate(this.formaDate(d.getFullYear(),d.getMonth()+1,1));
        },

        pickNext:function(year,month){
            var d=new Date(this.formaDate(year,month,1));
            d.setDate(35);
            this.initDate(this.formaDate(d.getFullYear(),d.getMonth()+1,1));
        },

        pickYear:function(year,month){
            alert(year+","+month);
        },

        clickday:function(){
            Bus.$emit('clickdaybus',dayobject.day)
        },

        formaDate:function (year,month,day){
            if(month<10){
                month="0"+month;
            }
            if(day<10){
                day="0"+day;
            }
            return year+"-"+month+"-"+day
        },

    },

}

</script>


<style>
        * {
            box-sizing: border-box;
        }
        ul {
            list-style-type: none;
        }
        body {
            font-family: Verdana, sans-serif;
            background: #E8F0F3;
        }
        #calendar{
            width:80%;
            margin: 0 auto;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.1), 0 1px 5px 0 rgba(0,0,0,0.12);
        }
        .month {
            width: 100%;
            background: #364E68;
        }
        .month ul {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
        }
        .year-month {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
        }
        .year-month:hover {
            background: rgba(150, 2, 12, 0.1);
        }
        .choose-year {
            padding-left: 50%;
            padding-right: 50%;
        }
        .choose-month {
            text-align: center;
            font-size: 1.5rem;
        }
        .arrow {
            padding:30px;
        }
        .arrow:hover {
            background: rgba(100, 2, 12, 0.1);
        }
        .month ul li {
            color: white;
            font-size: 20px;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        .weekdays {
            margin: 0;
            padding: 10px 0;
            background-color: #364E68;
            display: flex;
            flex-wrap: wrap;
            color: #FFFFFF;
            justify-content: space-around;
        }
        .weekdays li {
            display: inline-block;
            width: 13.6%;
            text-align: center;
            vertical-align: top;
        }
        .days {
            padding: 0;
            background: #FFFFFF;
            margin:-1;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
        .days li {
            list-style-type: none;
            display: inline-block;
            width: 14.2%;
            text-align: center;
            padding-bottom: 15px;
            padding-top: 15px;
            font-size: 1rem;
            color: #000;
        }
        .days li .dactive {
            line-height: 2;
            padding: 10px 10px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            background:#fff ;
            color:#00B8EC;
        }
        .days li .active {
            font-weight: bold;
            font-size: 1.2em;
            line-height: 2;
            padding: 10px 10px;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            background:#bcbab8 ;
            color:#fff;
        }
        .days li .other-month {
            padding: 5px;
            color: gainsboro;
        }
        .days li:hover {
            background: #e1e1e1;
        }
</style>

