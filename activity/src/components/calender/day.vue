<template>
  <div id='calender'>
    <div class="card">
      <div class="date" v-if="date" :class="{'date-border': activity, 'today': today, 'selected': selected}">{{date}}</div>
      <div v-else>&nbsp;</div>
    </div>
    <div class="card">
      <div v-if="activity" class="activity" :class="{'activity-today': selected}">{{activity}}</div>
      <div v-else>&nbsp;</div>
    </div>
  </div>
</template>

<script>
export default {
  data () { 
    return { 
      date: 1,
      activity: 2,
    }  
  },
  props: {
    date: {
      type: Number,
    },
    activity: {
      type: Number,
    },
    selected: {
      type: Boolean,
    },
    today: {
      type: Boolean,
    }
  }
}
</script>
<style scoped>
.card{
  width: 100%;
  height: 100%;
}
.calender{
  color: #364e68;
}
.selected{
  background-color: #eeeeee;
}
.today {
  color: #ff7657;
  /* color: white; */
}
.date-border {
  border-left: 1px solid #627a97;
  border-right: 1px solid #627a97;
}
.activity{
  color: white;
  background-color: #627a97;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.activity-today {
  background-color: #ff7657;
}
</style>
