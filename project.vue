<template>
    <div class="project">
            <div class='card'>
                <div :style='backColor' class="cardHead">
                    <p class="title">{{type}}</p>
                </div>
                <div class="cardBody">
                    <p>活动名称：{{name}}</p>
                    <p>活动时间：{{time}}</p>
                    <p>活动地点：{{place}}</p>
                </div>
            </div>
    </div>
</template>

<script>
   export default {
        data () { 
            return { 
                backColor: {  
                    backgroundColor: '#fff'
                }
            }  
        },
        props: ['color','type','name','time','place'],
        mounted () {   
            this.backColor = {backgroundColor: this.color}
        }
    }
</script>
<style>
    .card{
        border: 1px solid #dcdee2;
        border-color: #e8eaec;
        width: 150px;
        border-radius: 10px;
    }
    .cardHead{
        border-bottom: 1px solid #e8eaec;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        left:50%;
        color: #fbeed7;
        padding: 14px 16px;
        line-height: 1;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .cardBody{
        font-size: 3px;
        padding: 16px;
    }
</style>


