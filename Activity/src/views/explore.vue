<template>
    <div id="explore">
        <mainHead title="探索"></mainHead>
        <actList :style="{ marginTop: heightOfHeader }"></actList>
        <mainBottom current="探索"></mainBottom>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import { mainBottom, mainHead } from '../components/mainNav/'
import actList from '../components/activityList/'

export default {
  components: {
    mainBottom,
    mainHead,
    actList,
  },
  computed: {
    ...mapState({
      heightOfHeader: state => state.style.heightOfHeader + 'px'
    })
  }
}
</script>

<style scoped>

</style>
