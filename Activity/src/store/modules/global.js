export default {
    namespace: true,
    state: {
        target: '/home', // 目标路由
        host:  '118.89.48.63', // 'api.wyyxhlxy.com', // API host
        port: 8001, // API port
    },
    mutations: {
        routeTo(state, target) {
            state.target = target == '/login' ? '/' : target
        }
    },
    getters: {
        baseURL: state => {
            return 'http://' + state.host + ':' + state.port
        }
    }
}