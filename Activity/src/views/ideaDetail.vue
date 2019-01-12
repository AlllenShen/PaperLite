<template>
    <div>
        <!-- 调用headnav 实现返回按钮 发布按钮 参考mine.vue -->
        <div>
            <!-- 用原生textarea 去除边框 -->
            <Input v-model="value1" type="textarea" :rows="8" placeholder="写下你的想法吧....." />
        </div>

        <!-- 按键 -->
        <div>
            <!-- 调节pading和margin的间隔 -->
            <Icon type="md-images" size="34"/>
            <!-- 用span 不选中时边框+白底 选中填充+白字 -->
            <Button type="warning"@click="noname">匿名</Button>
        </div>
        <div>
            <!-- 用简洁模式 -->
            <Collapse v-model="value2">
                <!-- 内容用data的数据 不要写死 数据会从服务器请求 注意结构  下同 -->
                <Panel name="1">
                    面向人群:
                    <p slot="content">
                        <RadioGroup v-model="vertical" vertical>
                            <Radio label="c-people">            
                                <span>校级</span>
                            </Radio>
                            <Radio label="s-people">
                                <span>院级</span>
                            </Radio>
                            <Radio label="sc-people">
                                <span>三人群</span>
                            </Radio>
                        </RadioGroup>
                    </p>
                </Panel>

                <Panel name="2">
                    活动类型:
                    <p slot="content">
                        <RadioGroup v-model="activity" vertical>
                            <Radio label="mostactivity">
                                <span>mostactivity</span>
                            </Radio>
                            <Radio label="secondactivity">
                                <span>secondactivity</span>
                            </Radio>
                            <Radio label="thirdactivity">
                                <span>thirdactivity</span>
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
                value1: '' ,
                value2: '' ,
                nomame: '' ,
                vertical: 's-people',
                activity: 'mostactivity',
            }
        },
        methods:{
            nomame(){
                this.nomame = true;
            }
        }
    }
</script>


<style>
  /* .name{
        background:#fff ;

    } */

</style>