import questionList from '@/assets/questionList'

export default {
    namespace: true,
    state: {
        applied:[],
        needComment: [],
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
        questionList: questionList,
        bgjzpage:0,
        jshdpage:0,
        zyfupage:0,
        pagemap:{
            '报告讲座': 'bgjzpage',
            '竞赛活动': 'jshdpage',
            '志愿服务': 'zyfupage',
        },
        recentbgjz:false,
        recentjshd:false,
        recentzyfu:false,
        recentmap:{
            '报告讲座': 'recentbgjz',
            '竞赛活动': 'recentjshd',
            '志愿服务': 'recentzyfu',
        },
        allbgjz:false,
        alljshd:false,
        allzyfu:false,
        loadallmap:{
            '报告讲座': 'allbgjz',
            '竞赛活动': 'alljshd',
            '志愿服务': 'allzyfu',
        },
        currentOrder:null,
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
            console.log(state.currentActs.length)
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
        searchrecent(state){
          state[state.recentmap[state.currentTag]]=true
          //console.log('searchrecnet',state[state.recentmap[state.currentTag]])
          state[state.pagemap[state.currentTag]]=0
          console.log('searchrecnet',state[state.pagemap[state.currentTag]])
        },
        addmoreActs(state,payload){
            state.currentActs.push(...payload)
        },
        loadall(state){
          state[state.loadallmap[state.currentTag]]=true
          //console.log('loadall',state[state.loadallmap[state.currentTag]])
        },
        changeOrder(state,order){
          state.currentOrder=order
          console.log(state.currentOrder)
        },
        clearAllActs(state){
          for(var arr in state.map){
            state[state.map[arr]]=[]
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
