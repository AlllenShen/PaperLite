<template>
<div id="main">
  <search></search>
</div>
</template>

<script>
import {mapState, mapGetters } from 'vuex'

import search from '../components/search'

export default {
  components: {
    search,
  },
  computed: {
    ...mapGetters([
      'activityApply',
      'JWTHeaderObj'
    ])
  },
  mounted () {
    this.$Message.config({
      top: 120,
    })
    this.$http.get(
      this.activityApply,
      {headers: this.JWTHeaderObj}
    ).then((res) => {
      this.$store.commit('initApplied', res.data.result)
      this.$Message.success('刷新成功')
    }, (res) => {
      this.$Message.error('刷新失败，请检查网络')
    })
  }

}
</script>

<style>

</style>
