<template>
    <div class="function">
        <functionFrame>
            <div slot="content" class="project">
                <div>
                    <div class="projectColor">
                    </div>
                    <div class="proName">{{name}}活动</div>
                </div>
                    <div class="head">
                        <div>时间：{{time}}</div>
                        <div>地点：{{place}}</div>
                        <div>面向人群：{{people}}</div>
                        <div>内容：{{content}}</div>
                    </div>
                    <div class="bottom">
                        <div>负责人：{{personInCharge}}联系方式：{{numbers}}</div>
                    </div>
                <div class="st">
                    <div class="signUp">
                    报名
                    </div>
                </div>
            </div>
                <div slot="watch" class="f">
                    <img src="../../photos/liulan.png" class="watchIcon">
                    <div class="count">
                        {{likeCount}}
                    </div>
                </div>
                <div slot="comment" class="f">
                    <Icon :type="iconType" :color="iconColor" @click="togglelike()" size="20"/>
                    <div class="count">
                        {{likeCount}}
                    </div>
                </div>
                <div slot="like" class="f" >
                    <img src="../../photos/pinglun.png" class="commentIcon">
                    <div class="count">
                        {{likeCount}}
                    </div>
                </div>
                <div slot="team" class="f">
                    <img src="../../photos/icons_Group_.png" class="teamIcon">
                    <div class="count">
                        {{likeCount}}
                    </div>
                </div>
        </functionFrame>
    </div>
</template>

<script>
    import functionFrame from './functionFrame.vue'
    export default {
        data: function () {
            return {
                islike: false,
                iconType: 'md-heart-outline',
                iconColor: '#4a4a48',
                likeCount: 15
            }
        },
        components: {
            functionFrame
        },
        props: ['name','time','place','people','content','personInCharge','numbers'],
        methods:{
            togglelike: function(){
                this.islike = !this.islike
                if (this.islike) {
                    this.iconType = 'md-heart',
                    this.iconColor = '#ff7657',
                    this.likeCount ++
                } else {
                    this.iconType = 'md-heart-outline',
                    this.iconColor = '#4a4a48',
                    this.likeCount --;
                }
            }
        }
    } 
</script>

<style scoped>
    .function{
        border-bottom: 1px solid #e0e0e0;
    }
    .t{
        display: flex;
        justify-content: space-around;
    }
    .f{
        margin-top:5px;
        margin-bottom:5px;
    }
    .project{
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        margin-top:50px;
    }
    .projectColor{
        float: left;
        width: 10px;
        height:35px;
        margin-top:10px;
        background-color: #ffba5a;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        }
    .proName{
        margin-top:10px;
        padding-top:10px;
        margin-left:15px;
        font-size: 20px;
        color:#ffba5a;
    }
    .head{
        margin-left:5%;
        margin-top:12px;
    }
    .bottom{
        margin-left:5%;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .st{
        position: absolute;
        right:10px;
        /* width: 40px; */
        top:75px;
    }
    .signUp{
      border-radius: 5px;
      padding:6px 10px 6px 14px;
      letter-spacing: 4px;
      color: white;
      background-color: #ffba5a;
      font-size: 13px;
    }
    .watchIcon{
        width:24px;
        margin-top:-3px;
    }
    .commentIcon{
        width:18px;
        margin-top:0px;
    }
    .teamIcon{
        margin-top:-3px;
        width:24px;
    }
    .count{
        float:right;
    }
</style>