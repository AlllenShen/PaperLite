<template>
    <div id="explore">
        <mainHead title="探索"></mainHead>
        <actList></actList>
        <mainBottom current="探索"></mainBottom>
    </div>
</template>

<script>
import { mainBottom, mainHead } from '../components/mainNav/'
import actList from '../components/activityList/'
export default {
  components: {
    mainBottom,
    mainHead,
    actList,
  }
}
</script>

<style scoped>

</style>
