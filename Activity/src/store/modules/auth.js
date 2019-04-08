import utils from '../../assets/utils'
export default {
    namespace: true,
    state: {
        login: false,
        token: utils.getCookie('token'),
        expires: utils.getCookie('expires'),
        userInfo: utils.getCookie('userInfo'),
        // loginAPI: 'http://118.89.48.63:8001/user/login'
    },
    mutations: {
        login (state, payload) {
            state.login = true
            state.token = payload.token
            state.expires = payload.expires
            state.userInfo = payload.user_info
            // 记录cookie
            utils.setCookie('token', payload.token)
            utils.setCookie('expires', payload.expires)
            utils.setCookie('userInfo', payload.user_info)
        },
        logout (state) {
            state.login = false
            state.token = null
            state.expires = null
            state.userInfo = null
            // 删除cookie
            utils.delCookie('token')
            utils.delCookie('expires')
            utils.delCookie('userInfo')
        },
        changeNickname (state, newName){
            state.userInfo.nickname = newName;
        },
        changeIdenticon (state,newIdenticon){
            state.userInfo.identicon = newIdenticon;
        }
    },
    getters: {
        loginAPI: (state, getters, rootState) => {
            console.log(getters);
            return getters.baseURL + '/user/login'
        },
        cancelAPI: (state, getters, rootState) => {
            return getters.baseURL + '/activity/comment/del'
        },
        getAPI: (state, getters, rootState) => {
            return getters.baseURL + '/activity/comment'
        },
        viewAPI: (state, getters, rootState) => {
            return getters.baseURL + '/activity/view'
        },
        likeAPI: (state, getters, rootState) => {
            return getters.baseURL + '/activity/like'
        },
        unlikeAPI: (state, getters, rootState) => {
            return getters.baseURL + '/activity/like/cancel'
        },
        addCommentAPI: (state, getters, rootState) => {
            return getters.baseURL + '/activity/comment/add'
        },
        updateAPI: (state, getters, rootState) => {
            return getters.baseURL + '/user/info/update'
        },
        photoAPI: (state, getters, rootState) => {
            return getters.baseURL + '/user/info/update/identicon'
        },
        detailAPI: (state, getters, rootState) => {
            return getters.baseURL + '/activity/'
        },
        imgUrl: (state, getters, rootState) => {
            return getters.baseURL + state.userInfo.identicon
        },
        JWTHeaderObj: (state) => {
            return {
                Authorization: 'JWT ' + state.token
            }
        },
        activityApplyAPI: (state,getters) => {
            return getters.baseURL + '/activity/apply/'
        }
    }
}