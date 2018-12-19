<template>
    <div class="bottom">
            <div class="comment">
            <Input v-model="value8" type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="添加评论" />
            </div>
        <div class="team">
        组队
        </div>
        <div class="signUp">
        报名
        </div>
        
    <!-- <Drawer  placement="down" :closable="false" v-model="value1">
        <div class="comment">
            <Input v-model="value8" type="textarea" :autosize="{minRows: 1,maxRows: 3}" placeholder="" />
        </div>
        <div class="signUp">
        发布
        </div>
    </Drawer> -->
    </div>
</template>

<script>
   export default {
        data () {
            return {
                value1: false,
                value8: ''
            }
        }
    }
</script>

<style scoped>
    .bottom{
        position:fixed;
        bottom:0px;
        width: 100%;
        height: 50px;
        border-top: 1px solid #e0e0e0;
        background-color: #ffffff;
    }
    .comment{
        position: relative;
        float: left;
        top:8px;
        margin-left: 10px;
        width:80%;
        color: #bdbdbd;
    }
    .team{
        position: relative;
        top:15px;
        float: right;
        margin-right:5px;
        color: #364e68;
    }
    .signUp{
        position: relative;
        float: right;
        top:15px;
        margin-right: 5px;
        color: #ff7657;
    }
</style>