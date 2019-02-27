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
        }
    },
    getters: {
        loginAPI: (state, getters, rootState) => {
            console.log(getters);
            return getters.baseURL + '/user/login'
        }
    }
}