import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import global from './modules/global'
import style from './modules/style'
import activity from './modules/act'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        global,
        style,
        activity
    },
})