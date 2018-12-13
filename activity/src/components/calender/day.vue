<template>
  <div id='calender'>
    <div class="card">
      <div class="date" v-if="date" 
        :class="{'today': today, 'selected': selected, 'selected-date': activity && selected, 'date-border': activity}">{{date}}</div>
      <div v-else>&nbsp;</div>
    </div>
    <div class="card">
      <div v-if="activity" class="activity" :class="{'selected-act': selected}">{{activity}}</div>
      <div v-else>&nbsp;</div>
    </div>
  </div>
</template>

<script>
export default {
  data () { 
    return { 
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
  border-radius: 3px;
}
.date-border {
  border-left: 1px solid #627a97;
  border-right: 1px solid #627a97;
}
.selected-date{
  border-radius: 0;
  border-left: 1px solid #ff7657;
  border-right: 1px solid #ff7657;
}
.today {
  color: #ff7657;
  /* color: white; */
}
.activity{
  color: white;
  background-color: #627a97;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}
.selected-act {
  background-color: #ff7657;
}
</style>
