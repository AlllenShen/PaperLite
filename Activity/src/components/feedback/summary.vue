<template>
  <div id="summary">
    <star  v-bind:questionList="questionList">
    </star>
  </div>
</template>
<script>
import star from './star.vue'
import { Script } from 'vm';
export default {
  components: {
    'star':star
  },
  data () { // 组件内部数据
    return {
      actTitle:'合肥工业大学第1届无线电测向大赛',
      questionList: [
			  {
			    tags:[
			      {
			        quskey: 1,
			        name: '规则有缺陷'
			      },
			      {
			        quskey: 2,
			        name: '工作人员态度恶劣'
			      },
			      {
			        quskey: 3,
			        name: '奖励与宣传时不符'
			      },
			      {
			        quskey: 4,
			        name: '流程混乱'
            },
            {
			        quskey: 5,
			        name: '工作人员未能提供必要帮助'
			      },
			      {
			        quskey: 6,
			        name: '场地布置不美观'
			      },
			      {
			        quskey: 7,
			        name: '未能准时开始'
			      },
			      {
			        quskey: 8,
			        name: '材料准备不充分'
            },
            {
			        quskey: 9,
			        name: '活动时间过长'
            },
            {
			        quskey: 10,
			        name: '其他问题'
			      }
			    ]
			  },
			  {
			    tags:[
			      {
			        quskey: 11,
			        name: '工作人员态度恶劣'
			      },
			      {
			        quskey: 12,
			        name: '奖励与宣传时不符'
			      },
			      {
			        quskey: 13,
			        name: '流程混乱'
            },
            {
			        quskey: 14,
			        name: '工作人员未能提供必要帮助'
			      },
			      {
			        quskey: 15,
			        name: '场地布置不美观'
			      },
			      {
			        quskey: 16,
			        name: '未能准时开始'
			      },
			      {
			        quskey: 17,
			        name: '材料准备不充分'
            },
            {
			        quskey: 18,
			        name: '活动时间过长'
            },
            {
			        quskey: 19,
			        name: '规则有缺陷'
			      },
            {
			        quskey: 20,
			        name: '其他问题'
			      }
			    ]
			  },
			  {
			    tags:[
			      {
			        quskey: 21,
			        name: '奖励与宣传时不符'
			      },
			      {
			        quskey: 22,
			        name: '流程混乱'
            },
            {
			        quskey: 23,
			        name: '工作人员未能提供必要帮助'
			      },
			      {
			        quskey: 24,
			        name: '场地布置不美观'
			      },
			      {
			        quskey: 25,
			        name: '未能准时开始'
			      },
			      {
			        quskey: 26,
			        name: '材料准备不充分'
            },
            {
			        quskey: 27,
			        name: '活动时间过长'
            },
            {
			        quskey: 28,
			        name: '规则有缺陷'
            },
            {
			        quskey: 29,
			        name: '工作人员态度恶劣'
			      },
            {
			        quskey: 30,
			        name: '其他问题'
			      }
			    ]
			  },
			  {
			    tags:[
			      {
			        quskey: 31,
			        name: '流程混乱'
            },
            {
			        quskey: 32,
			        name: '工作人员未能提供必要帮助'
			      },
			      {
			        quskey: 33,
			        name: '场地布置不美观'
			      },
			      {
			        quskey: 34,
			        name: '未能准时开始'
			      },
			      {
			        quskey: 35,
			        name: '材料准备不充分'
            },
            {
			        quskey: 36,
			        name: '活动时间过长'
            },
            {
			        quskey: 37,
			        name: '规则有缺陷'
			      },
			      {
			        quskey: 38,
			        name: '工作人员态度恶劣'
			      },
			      {
			        quskey: 39,
			        name: '奖励与宣传时不符'
            },
            {
			        quskey: 40,
			        name: '其他问题'
			      }
			    ]
			  },
			  {
			    tags:[
			      
            {
			        quskey: 41,
			        name: '工作人员未能提供必要帮助'
			      },
			      {
			        quskey: 42,
			        name: '场地布置不美观'
			      },
			      {
			        quskey: 43,
			        name: '未能准时开始'
			      },
			      {
			        quskey: 44,
			        name: '材料准备不充分'
            },
            {
			        quskey: 45,
			        name: '活动时间过长'
            },
            {
			        quskey: 46,
			        name: '规则有缺陷'
			      },
			      {
			        quskey: 47,
			        name: '工作人员态度恶劣'
			      },
			      {
			        quskey: 48,
			        name: '奖励与宣传时不符'
			      },
			      {
			        quskey: 49,
			        name: '流程混乱'
            },
            {
			        quskey: 50,
			        name: '其他问题'
			      }
			    ]
        },
        {
			    tags:[
			      {
			        quskey: 51,
			        name: '流程有序'
			      },
			      {
			        quskey: 52,
			        name: '干货满满'
			      },
			      {
			        quskey: 53,
			        name: '工作人员态度好服务棒'
			      },
			      {
			        quskey: 54,
			        name: '活动氛围好，充分调动参与者的积极性'
            },
            {
			        quskey: 55,
			        name: '其他问题'
			      }
			    ]
			  }
      ],
    }
  }
}
</script>
<style>
</style>
