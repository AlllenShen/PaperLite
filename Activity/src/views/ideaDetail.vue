<template>
    <div class="allpage" @on-visible-change="change">
        <div>
            <textarea v-model="value1" style="resize:none; border:0px; height:100px"   placeholder="写下你的想法吧....."  />
        </div>

        <!-- 按键 -->
        <div class="picicon">
            <span>
                <Icon type="md-images" size="34"/>
            </span>

            <span  class="first" click="changecolor($event)">
                匿名
            </span>

        </div>

        <div>
            <Collapse simple >
                <Panel name="1">
                    面向人群:
                    <p slot="content">
                        <RadioGroup v-model="vertical" vertical>
                            <!-- <Radio la> -->
                            <Radio  v-for='a in people' :label='a' :key='index'>            
                                <span>{{a}}</span>
                            </Radio>  
                        </RadioGroup>
                    </p>
                </Panel>

                <Panel name="2">
                    活动类型:
                    <p slot="content">
                        <RadioGroup v-model="vertical" vertical>
                         <Radio  v-for='a in activity' :label='a' :key='index'>            
                                <span>{{a}}</span>
                            </Radio>  
                        </RadioGroup>
                    </p>
                </Panel>

            </Collapse>
        </div>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                obj: " ",
                value1: '' ,
                value2: '' ,
                nomame: '' ,
                people:['校级','院级'],
                activity:['1','2','3']
                // first_group:'校级',
                // second_group :'院级',
                // vertical: 's-people',
                // activity: 'mostactivity',
            }
        },
        methods:{
            nomame(){
                this.nomame = true;
            },
            changecolor(object){
                object.target.style.backgroundColor = "pink";
            },//有问题，一直提示object是空值
        }
        //改了vfor后返回值还没想好怎么写

        //图片上传

    }
</script>


<style>
    .allpage{
        padding: 10px;
        margin:  10px;
    }
    .picicon{
        padding: 4px;
        margin:  2px;
    }
    .first{
        padding:2px;
        margin: 6px;
        font-style: 微软雅黑 ;
        font-size: 20px;

        background:#FFFFFF;
        color: #909090;

        width: 60px;
        height:40px;
        border:1px;
        border-style:  solid ;
        /* border-color: #909090; */
        border-radius:4px;
    }

</style>