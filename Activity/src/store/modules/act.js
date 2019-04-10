import utils from '../../assets/utils'
export default {
    namespace: true,
    state: {
        applied:[],
        needComment:[],
        comments: [],
        currentTag: '报告讲座',
        currentActs:null,
        bgjz: [],
        jshd: [],
        zyfu: [],
        search: [],
        map: {
            '报告讲座': 'bgjz',
            '竞赛活动': 'jshd',
            '志愿服务': 'zyfu',
            '搜索': 'search',
        },
        questionList: [
            [
                {
                  quskey: 1,
                  name: '规则有缺陷',
                  flag: false,
                },
                {
                  quskey: 2,
                  name: '工作人员态度恶劣',
                  flag: false,
                },
                {
                  quskey: 3,
                  name: '奖励与宣传时不符',
                  flag: false,
                },
                {
                  quskey: 4,
                  name: '流程混乱',
                  flag: false,
          },
          {
                  quskey: 5,
                  name: '工作人员未能提供必要帮助',
                  flag: false,
                },
                {
                  quskey: 6,
                  name: '场地布置不美观',
                  flag: false,
                },
                {
                  quskey: 7,
                  name: '未能准时开始',
                  flag: false,
                },
                {
                  quskey: 8,
                  name: '材料准备不充分',
                  flag: false,
          },
          {
                  quskey: 9,
                  name: '活动时间过长',
                  flag: false,
          },
          {
                  quskey: 10,
                  name: '其他问题',
                  flag: false,
                }
            ],
            [
              {
                quskey: 11,
                name: '规则有缺陷',
                flag: false,
              },
              {
                quskey: 12,
                name: '工作人员态度恶劣',
                flag: false,
              },
              {
                quskey: 13,
                name: '奖励与宣传时不符',
                flag: false,
              },
              {
                quskey: 14,
                name: '流程混乱',
                flag: false,
        },
        {
                quskey: 15,
                name: '工作人员未能提供必要帮助',
                flag: false,
              },
              {
                quskey: 16,
                name: '场地布置不美观',
                flag: false,
              },
              {
                quskey: 17,
                name: '未能准时开始',
                flag: false,
              },
              {
                quskey: 18,
                name: '材料准备不充分',
                flag: false,
        },
        {
                quskey: 19,
                name: '活动时间过长',
                flag: false,
        },
        {
                quskey: 20,
                name: '其他问题',
                flag: false,
              }
              ],
              [
                {
                  quskey: 21,
                  name: '规则有缺陷',
                  flag: false,
                },
                {
                  quskey: 22,
                  name: '工作人员态度恶劣',
                  flag: false,
                },
                {
                  quskey: 23,
                  name: '奖励与宣传时不符',
                  flag: false,
                },
                {
                  quskey: 24,
                  name: '流程混乱',
                  flag: false,
          },
          {
                  quskey: 25,
                  name: '工作人员未能提供必要帮助',
                  flag: false,
                },
                {
                  quskey: 26,
                  name: '场地布置不美观',
                  flag: false,
                },
                {
                  quskey: 27,
                  name: '未能准时开始',
                  flag: false,
                },
                {
                  quskey: 28,
                  name: '材料准备不充分',
                  flag: false,
          },
          {
                  quskey: 29,
                  name: '活动时间过长',
                  flag: false,
          },
          {
                  quskey: 30,
                  name: '其他问题',
                  flag: false,
                }
              ],
            [
              {
                quskey: 31,
                name: '规则有缺陷',
                flag: false,
              },
              {
                quskey: 32,
                name: '工作人员态度恶劣',
                flag: false,
              },
              {
                quskey: 33,
                name: '奖励与宣传时不符',
                flag: false,
              },
              {
                quskey: 34,
                name: '流程混乱',
                flag: false,
        },
        {
                quskey: 35,
                name: '工作人员未能提供必要帮助',
                flag: false,
              },
              {
                quskey: 36,
                name: '场地布置不美观',
                flag: false,
              },
              {
                quskey: 37,
                name: '未能准时开始',
                flag: false,
              },
              {
                quskey: 38,
                name: '材料准备不充分',
                flag: false,
        },
        {
                quskey: 39,
                name: '活动时间过长',
                flag: false,
        },
        {
                quskey: 40,
                name: '其他问题',
                flag: false,
              }
              ],
            [
                
              {
                quskey: 41,
                name: '规则有缺陷',
                flag: false,
              },
              {
                quskey: 42,
                name: '工作人员态度恶劣',
                flag: false,
              },
              {
                quskey: 43,
                name: '奖励与宣传时不符',
                flag: false,
              },
              {
                quskey: 44,
                name: '流程混乱',
                flag: false,
        },
        {
                quskey: 45,
                name: '工作人员未能提供必要帮助',
                flag: false,
              },
              {
                quskey: 46,
                name: '场地布置不美观',
                flag: false,
              },
              {
                quskey: 47,
                name: '未能准时开始',
                flag: false,
              },
              {
                quskey: 48,
                name: '材料准备不充分',
                flag: false,
        },
        {
                quskey: 49,
                name: '活动时间过长',
                flag: false,
        },
        {
                quskey: 50,
                name: '其他问题',
                flag: false,
              }
              ],
      [
                {
                  quskey: 51,
                  name: '流程有序',
                  flag: false,
                },
                {
                  quskey: 52,
                  name: '干货满满',
                  flag: false,
                },
                {
                  quskey: 53,
                  name: '工作人员态度好服务棒',
                  flag: false,
                },
                {
                  quskey: 54,
                  name: '活动氛围好',
                  flag: false,
          },
          {
                  quskey: 55,
                  name: '其他问题',
                  flag: false,
                }
              ]
          ],
        bgjzpage:1,
        jshdpage:1,
        zyfupage:1,
        pagemap:{
            '报告讲座': 'bgjzpage',
            '竞赛活动': 'jshdpage',
            '志愿服务': 'zyfupage',
        }
    },
    mutations: {
        addComment (state,newComment) {
          state.comments.push(
            {
                name: newComment.name,
                time: newComment.time,
                content: newComment.content,
                likeCount: 0,
                id: newComment.id,
                studentId: newComment.studentId,
            }
            )
        },
        cancelAll (state){
            state.comments=[];
        },
        getComments (state,comments){
            
            for(let i = 0;i<comments.length;i++){
                state.comments.push(
                    {
                        name: comments[i].student.name,
                        time: comments[i].created_at,
                        content: comments[i].content,
                        likeCount: 0,
                        id: comments[i].id,
                        studentId: comments[i].student.id,
                    }
                )
            }
            
        },
        cancelComment (state,cancelComment) {
          for (let i = 0;i<state.comments.length;i++){
            let obj = state.comments[i];
            if (obj.id==cancelComment.id){
              state.comments.splice(i,1);
              i--
            }
           }
        },
        addActs(state,payload){
            state.currentActs.push(...payload);
            console.log(state.currentActs);
            
        },
        clearActs(state){
            state[state.map[state.currentTag]] = [];
        },
        changeTag (state, tag) {
            state.currentTag = tag
            //console.log(state[state.map[tag]]);
            state.currentActs = state[state.map[tag]]
        },
        initApplied(state, applied) {
            state.applied = applied
        },
        initNeedComment(state, applied) {
          state.needComment = applied
        },
        loadmore(state){
            state[state.pagemap[state.currentTag]]++
            //console.log(state[state.pagemap[state.currentTag]])
        },
        addmoreActs(state,payload){
            state.currentActs.push(...payload)
        },
        cancelApplied(state,payload){
          for (let i = 0;i<state.applied.length;i++){
            let obj = state.applied[i];
            if (obj.id==payload){
              state.applied.splice(i,1);
              i--
            }
           }
        },
        commentedAct(state,payload){
          for (let i = 0;i<state.needComment.length;i++){
            let obj = state.needComment[i];
            if (obj.id==payload){
              state.needComment.splice(i,1);
              i--
            }
           }
        },
    },
    getters:{
        activitySearch: (state, getters) => {
            //console.log(getters);
            //console.log(state.currentActs)
            return getters.baseURL + '/activity/search'
        },
        activityApply: (state, getters) => {
            //console.log(getters);
            return getters.baseURL + '/activity/joined'
        }
    }
}