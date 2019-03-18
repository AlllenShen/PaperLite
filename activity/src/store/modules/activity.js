export default {
    namespace: true,
    state: {
        activities: []
    },
    mutations: {
        getacts(state,payload){
            state.activities=payload
        }
    },
    /*actions:{
        newact(obj){
            obj.commit('getacts');
        }
    },*/
    getters: {
        activityAPI: (state, getters) => {
            console.log(getters);
            return getters.baseURL + '/activity/search'
        }
    }
}