<template>
  <div class="information">
      <headNav headline=信息>
        <template slot="left_element">
            <Icon type="ios-arrow-back" color="#7e7e7e" size="26"
                @click="back()"/>
        </template>
      </headNav>
      <div class="info">
        <div class="name">
          姓名
        </div>
        <div class="phone">
          手机号
        </div>
        <div class="major">
          专业
        </div>
        <div class="cls">
          姓名
        </div>
        <div class="gender">
          性别
        </div>
        <div class="email">
          邮箱
        </div>
        <div class="academy">
          学院
        </div>
        <div class="nickname">
          昵称
        </div>
        <div class="sign">
          个性签名
        </div>
      </div>
  </div>
</template>

<script>
import headNav from '../components/headNav/HeadBar'
export default {
    data () {
        return {
          
        }
    },
    created () {

    },
    components: {
        headNav,
    },
    methods: {
        back () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .information, body{
      background-color: #f6f6f5;
      height:100vh;
    }
    .info{
      position:relative;
      top:70px;
      font-size: 20px;
      color:#848484;
      border-bottom: 1px solid #bdbdbd;
      border-top: 1px solid #bdbdbd;
    }
    .name,.phone,.major,.cls,.gender,.email,.academy,.nickname{
      width:100%;
      height:30px;
      position:relative;
      border-bottom: 1px solid #bdbdbd;
      left:20px;
    }
    .sign{
      width:100%;
      height:30px;
      position:relative;
      left:20px;
    }
</style>