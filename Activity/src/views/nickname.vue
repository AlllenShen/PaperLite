<template>
  <div class="n">
      <headNav headline=昵称>
            <template slot="left_element">
                <Icon type="ios-arrow-back" color="#7e7e7e" size="26"
                    @click="back()"/>
            </template>
            <template slot="right_element">
                <Icon type="md-checkmark" color="#7e7e7e" size="26"
                    @click="update()" />
            </template>
      </headNav>
      <div class="newComment">
          <input ref="a" v-model="name" style="width: 100%" />
      </div>
  </div>
</template>

<script>
import headNav from '../components/headNav/HeadBar'
import {mapState, mapGetters } from 'vuex'
import utils from '../assets/utils'
export default {
    data () {
        return {
            newName: null,
        }
    },
    methods: {
        back () {
            this.$router.go(-1)
        },
        update() {
            this.newName = this.$refs.a.value;
            this.$router.go(-1);
            this.$store.commit('changeNickname',this.newName);
            this.$http.post(
            this.updateAPI,{'major': this.newName},
            {
            headers: this.JWTHeaderObj
            }).then((response) => {
            },(response) => {

            })
        }
    },
    components: {
        headNav,
    },
    computed: {
        ...mapState({
        name: state => state.auth.userInfo.major,
        token: state => state.auth.token,
        updateAPI: state => state.auth.updateAPI,
        }),
        ...mapGetters([
            'updateAPI',
            'JWTHeaderObj'
        ])
    },
}
</script>

<style scoped>
    .newComment{
        position: relative;
        top:55px;
        width: 100%;
    }
    input{
        border:none;
        font-size: 14px;
        padding:20px;
    }
    .n{
        position:fixed;
        width: 100%;
        height: 100%;
        background-color: #F6F6F5;
    }
</style>