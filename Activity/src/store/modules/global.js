export default {
    namespace: true,
    state: {
        target: '/home' // 目标路由
    },
    mutations: {
        routeTo(state, target) {
            state.target = target
        }
    }
}