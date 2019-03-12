<template>
<div id="mine">
    <mainHead title="我的"></mainHead>
    <div :style="{ marginTop: heightOfHeader }">这些是测试页面</div>
    <router-link class="link" to="/idea">想法页</router-link> <br>
    <router-link class="link" to="/login">login</router-link> <br>
    <router-link class="link" to="/tip-for-mail">tip-for-mail</router-link>
    <router-view></router-view>
    <mainBottom current="我的"></mainBottom>  
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import headNav from '../components/headNav/'
import { mainBottom, mainHead } from '../components/mainNav/'

export default {
    components: {
        headNav,
        mainBottom,
        mainHead,
    },
    methods: {
        back () {
            this.$router.go(-1)
        }
    },
    computed: {
    ...mapState({
      heightOfHeader: state => state.style.heightOfHeader + 'px'
    })
  }
}
</script>

<style scoped>
.link {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 30px;
}
</style>
