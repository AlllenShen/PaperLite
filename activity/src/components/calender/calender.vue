<template>
  <div id='calender'>
    <Row class='header'>
      <Col span="6">
        <div @click="handlePreMonth()">
          <Icon size='24' type="md-arrow-dropleft"/>
        </div>
      </Col>
      <Col class="show-date" span="12" >
        {{selectedYear}}年{{selectedMonth}}月{{selectedDate}}日
      </Col>
      <Col span="6">
        <div @click="handleNextMonth()">
          <Icon size='24' type="md-arrow-dropright"/>
        </div>
      </Col>
    </Row>
    <div class="main">
      <div class="weekday-panel">
        <div class="col-xs-1-7 col-sm-1-7 col-md-1-7 col-lr-1-7" v-for="day in weekDays" >{{day}}</div>
      </div>
      <div class="day-panel">
        <div class="col-xs-1-7 col-sm-1-7 col-md-1-7 col-lr-1-7 " v-for="day in calendarList" @click="selectDay(day.content)">
          <!-- <div v-if="day.content == ''">&nbsp;</div>
          <div v-else>{{day.content}}</div> -->
          <Day class="day" :today="day.content == today && selectedMonth == month && selectedYear == year" :date="day.content"
                :selected="day.content == selectedDate" :activity="activities[day.content]" ></Day>
        </div>
      </div>
    </div>
    <!-- <div style="clear:both"></div>  -->
  </div>
</template>

<script>
import day from './day'
export default {
  name: 'calender',
  data () {
    return {
      today: new Date().getDate(),
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      selectedYear: new Date().getFullYear(),
      selectedMonth: new Date().getMonth() + 1,
      selectedDate: new Date().getDate(),
      weekDays: ['日', '一', '二', '三', '四', '五', '六'],
      activities: {
        2: 1,
        6: 2,
        31: 1,
      }
    }
  },
  components: {
    Day: day
  },
  computed: {
    calendarList () {
      return this.getCalendarList(this.selectedYear, this.selectedMonth)
    }
  },
  methods: {
    getCalendarList (year, month) {
      // month使用正常月份
      // desinged by mykurisu 
      // from https://juejin.im/post/5a8e9f925188257a5e575755

      // 定义每个月的天数，如果是闰年第二月改为29天
      // year=2018;month=1(js--month=0~11)
      let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysInMonth[1] = 29;
      }
      // 获得指定年月的1号是星期几
      let targetDay = new Date(year, month - 1, 1).getDay();
      // 将要在calendar__main中渲染的列表
      let total_calendar_list = [];
      let preNum = targetDay;
      // 首先先说一下，我们的日期是(日--六)这个顺序也就是(0--6)
      // 有了上述的前提我们可以认为targetDay为多少，我们就只需要在total_calendar_list的数组中push几个content为''的obj作为占位
      if (targetDay > 0) {
        for (let i = 0; i < preNum; i++) {
          let obj = {
            type: "pre",
            content: null
          };
          total_calendar_list.push(obj);
        }
      }
      for (let i = 0; i < daysInMonth[month - 1]; i++) {
        let obj = {
          type: "normal",
          content: i + 1
        };
        total_calendar_list.push(obj);
      }
      let nextNum = 6 - new Date(year, month, 0).getDay()
      // 与上面的type=pre同理
      for (let i = 0; i < nextNum; i++) {
        let obj = {
          type: "next",
          content: null
        };
        total_calendar_list.push(obj);
      }
      console.log(total_calendar_list);
      return total_calendar_list;
    },
    handlePreMonth() {
      if (this.selectedMonth === 1) {
          this.selectedYear --
          this.selectedMonth = 12
          this.selectedDate = 1
      } else {
          this.selectedMonth --
          this.selectedDate = 1
      }
    },
    handleNextMonth() {
      if (this.selectedMonth === 12) {
        this.selectedYear ++
        this.selectedMonth = 1
        this.selectedDate = 1
      } else {
        this.selectedMonth ++
        this.selectedDate = 1
      }
    },
    selectDay (day) {
      // console.log(day)
      this.selectedDate = day
      this.bus.$emit('selectDay', this.selectedYear, this.selectedMonth, this.selectedDate)
    }
  }  
}
</script>

<style lang='less'>
#calender{
  overflow:hidden;
  zoom:1;
}
.header {
  font-size: 1rem;
  text-align: center;
  margin-top: 0.5rem;
}

.main {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.weekday-panel {
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

.day-panel {
  margin-top: 0.5rem;
  font-size: 1rem;
}

.day {
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}


.col-xs-1-7,.col-sm-1-7,.col-md-1-7,.col-lg-1-7 {
  position: relative;
  word-wrap:break-word;
  word-wrap:break-word;
  text-align: center;
}

.col-xs-1-7 {
  width: 14.28%;
  float: left;
}

@media (min-width: 768px) {
  .col-sm-1-7 {
    width: 14.28%;
    float: left;
  }
}

@media (min-width: 992px) {
  .col-md-1-7 {
    width: 14.28%;
    float: left;
  }
}

@media (min-width: 1200px) {
  .col-lg-1-7 {
    width: 14.28%;
    float: left;
  }
}
</style>
