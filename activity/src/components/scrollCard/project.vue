<template>
    <div class="project">
            <div class='card'>
                <div :style='backColor' class="cardHead">
                    <p>{{type}}</p>
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
<style scoped>
    .card{
        border: 1px solid #dcdee2;
        width: 120px;
        border-radius: 10px;
    }
    .cardHead{
        border-bottom: 1px solid #e8eaec;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        left:50%;
        color: #fbeed7;
        padding: 10px 0px;
        line-height: 1;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 35px;
    }
    .cardBody{
        font-size: 3px;
        padding: 16px;
        background-color: #ffffff;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        height:70px;
    }
</style>


