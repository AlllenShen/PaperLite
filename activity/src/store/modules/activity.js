import utils from '../../assets/utils'
export default {
    namespace: true,
    state: {
        applied:[],
        comments: [],
        currentTag: '报告讲座',
        currentActs: null,
        bgjz: [],
        jshd: [],
        zyfu: [],
        search: [],
        map: {
            '报告讲座': 'bgjz',
            '竞赛活动': 'jshd',
            '志愿服务': 'zyfu',
            '搜索': 'search',
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
            state.currentActs.push(...payload)
        },
        changeTag (state, tag) {
            state.currentTag = tag
            console.log(state[state.map[tag]]);
            state.currentActs = state[state.map[tag]]
        },
        initApplied(state, applied) {
            state.applied = applied
        }
    },
    getters:{
        activitySearch: (state, getters) => {
            //console.log(getters);
            console.log(state.activities)
            return getters.baseURL + '/activity/search'
        },
        activityApply: (state, getters) => {
            //console.log(getters);
            console.log(state.activities)
            return getters.baseURL + '/activity/joined'
        }
    }
}