import utils from '../../assets/utils'
export default {
    namespace: true,
    state: {
        activities:[],
        comments: [
          
      ]
    },
    mutations: {
        add (state,newComment) {
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
        cancel (state,cancelComment) {
          for (let i = 0;i<state.comments.length;i++){
            let obj = state.comments[i];
            if (obj.id==cancelComment.id){
              state.comments.splice(i,1);
              i--
            }
           }
        },
        getacts(state,payload){
            state.activities.push(...payload)
        },
    },
    getters:{
        activityAPI: (state, getters) => {
            //console.log(getters);
            console.log(state.activities)
            return getters.baseURL + '/activity/search'
        }
    }
}