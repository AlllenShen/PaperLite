<template>
  <div class="information">
      <headNav headline=信息>
        <template slot="left_element">
            <Icon type="ios-arrow-back" color="#7e7e7e" size="26"
                @click="back()"/>
        </template>
      </headNav>
      <div class="change" @click="change"> 
        编辑信息
      </div>
      <div class="info">
        <div class="name">
          <div class="y">姓名</div>
          Why Not{{name}}
        </div>
        <div class="phone">
          <div class="y">手机号</div>
          Why Not{{phone}}
        </div>
        <div class="major">
          <div class="y">专业</div>
          Why Not{{major}}
        </div>
        <div class="cls">
          <div class="y">班级</div>
          Why Not{{cls}}
        </div>
        <div class="gender">
          <div class="y">性别</div>
          Why Not{{gender}}
        </div>
        <div class="email">
          <div class="y">邮箱</div>
          Why Not{{email}}
        </div>
        <div class="academy">
          <div class="y">学院</div>
          Why Not{{academy}}
        </div>
        <div class="nickname">
          <div class="y">昵称</div>
          Why Not{{nickname}}
          <div class="ch" v-if="show"  @click="setMaskShow1">></div>
        </div>
        <div class="sign">
          <div class="y">个性签名</div>
          Why Not{{sign}}
          <div class="ch" v-if="show" @click="setMaskShow2">></div>
        </div>
        
      </div>
      <div class="save" @click="change" v-if="show" > 
        保存
      </div>
      <div class="mask1" v-show="maskShow1" @click="setMaskShow1">
      </div>
      <div class="child1" id="child1" v-show="maskShow1">
          <div class="newNickname">
              <textarea ref="contarea1" rows="2" placeholder="修改昵称">
              </textarea>
          </div>
          <div class="true" v-on:click="changeNickname">
            确定
          </div>
      </div>
      <div class="mask2" v-show="maskShow2" @click="setMaskShow2">
      </div>
      <div class="child2" id="child2" v-show="maskShow2">
          <div class="newSign">
              <textarea ref="contarea2" rows="2" placeholder="修改个性签名">
              </textarea>
          </div>
          <div class="true" v-on:click="changeSign">
            确定
          </div>
      </div>
  </div>
</template>

<script>
import headNav from '../components/headNav/HeadBar'
export default {
    data: function () {
        return {
            name: "",
            phone: "",
            major: "",
            cls: "",
            gender: "",
            email: "",
            academy: "",
            nickname: "",
            sign: "",
            show: false,
            maskShow1: false,
            maskShow2: false,
        }
    },
    components: {
        headNav,
    },
    created () {
        let token = utils.getCookie('token')
        if (token != '') {
            this.$http.get(
            this.detailAPI, {
            headers: {
            Authorization: 'JWT ' + token
            }
            }).then((response) => {
                this.information = response.data.info
                console.log(this.information)
            })
        }
    },
    methods: {
        back () {
            this.$router.go(-1)
        },
        change(){
          this.show = !this.show
        },
        setMaskShow1(){
            this.maskShow1 = !this.maskShow1;
        },
        changeNickname(){
            this.nickname = this.$refs.contarea1.value;
            this.$refs.contarea1.value = null;
            this.maskShow1 = !this.maskShow1;
        },
        setMaskShow2(){
            this.maskShow2 = !this.maskShow2;
        },
        changeSign(){
            this.sign = this.$refs.contarea2.value;
            this.$refs.contarea2.value = null;
            this.maskShow2 = !this.maskShow2;
        }
    }
}
</script>

<style scoped>
    .change{
      position:relative;
      top:60px;
      float:right;
      width: 40px;
      font-size: 10px;
      margin-right:10px;
    }
    .info{
      position:relative;
      top:80px;
      font-size: 20px;
      color:#848484;
      border-bottom: 1px solid #bdbdbd;
      border-top: 1px solid #bdbdbd;
      background-color: #f6f6f5;
    }
    .name,.phone,.major,.cls,.gender,.email,.academy,.nickname{
      height:30px;
      border-bottom: 1px solid #bdbdbd;
      margin-left:20px;
    }
    .sign{
      height:30px;
      margin-left:20px;
    }
    .y{
      float: left;
      width: 80px;
      margin-right: 40px;
    }
    .ch{
      float: right;
    }
    .save{
      position:relative;
      top:90px;
      float:right;
      width: 20px;
      font-size: 10px;
      margin-right:10px;
    }
    .mask1,.mask2{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.3;
    } 
    textarea{
        resize: none;
        font-size: 15px;
        padding:2px;
        width: 100%;
        height:48px;
    }
    .child1,.child2{
        position: fixed;
        width: 100%;
        height: 50px;
        bottom: 0px;
        background: #fff;
    }
    .true{
        position: relative;
        top:23px;
        float: right;
        margin-right:2%;
        color: #364e68;
        font-size: 15px;
    }
    .newNickname{
        position: relative;
        float: left;
        top:1px;
        margin-left: 9px;
        color: #bdbdbd;
        width: 85%;
        height:48px;
    }
    .newSign{
        position: relative;
        float: left;
        top:1px;
        margin-left: 9px;
        color: #bdbdbd;
        width: 85%;
        height:48px;
    }
</style>