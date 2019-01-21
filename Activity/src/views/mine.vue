<template>
<div id="mine">
    <headNav>
        <template slot="left_element">
            <Icon type="ios-arrow-back" color="#7e7e7e" size="26"
                @click="back()"/>
        </template>
        <template slot="right_element">
            <Icon type="md-more" color="#7e7e7e" size="24" />
        </template>
    </headNav>
    这些是测试页面 <br>
    <router-link class="link" to="/idea">想法页</router-link> <br>
    <router-link class="link" to="/login">login</router-link> <br>
    <router-link class="link" to="/tip-for-mail">tip-for-mail</router-link>
    <router-view></router-view>
    <mainBottom current="我的"></mainBottom>  
</div>
</template>

<script>
import headNav from '../components/headNav/'
import { mainBottom } from '../components/mainNav/'
export default {
    components: {
        headNav,
        mainBottom,
    },
    methods: {
        back () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
#mine {
    padding-top: 55px;
}
.link {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 30px;
}
</style>
