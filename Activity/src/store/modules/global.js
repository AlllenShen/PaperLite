export default {
    namespace: true,
    state: {
        target: '/home', // 目标路由
        host: 'api.wyyxhlxy.com', // API host
        port: 80, // API port
    },
    mutations: {
        routeTo(state, target) {
            state.target = target == '/login' ? '/home' : target
        }
    },
    getters: {
        baseURL: state => {
            return 'http://' + state.host + ':' + state.port
        }
    }
}