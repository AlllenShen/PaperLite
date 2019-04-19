export default {
    namespace: true,
    state: {
        target: '/home', // 目标路由
        host:  'paperlite-api.wyyxhlxy.com',  // API host
        port: 443, // API port
        testMode: false,        
    },
    mutations: {
        routeTo(state, target) {
            state.target = target == '/login' ? '/' : target
        },
        visitor(state) {
            state.visitorMode = true
        }
    },
    getters: {
        baseURL: state => {
            if (state.testMode) {
                return 'http://127.0.0.1:8888'
            }
            return 'https://' + state.host + ':' + state.port
        }
    }
}