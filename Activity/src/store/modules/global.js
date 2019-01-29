export default {
    namespace: true,
    state: {
        route: '/home'
    },
    mutations: {
        routeTo (state, route) {
            state.route = route
        }
    }
}