import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import iView from 'iview'
import router from './router'
import 'iview/dist/styles/iview.css'
import bus from './bus.vue'
//import test from './test.vue'

Vue.use(iView)
Vue.config.productionTip = false
Vue.bus = bus

new Vue({
  router,
  render: h => h(App)
  //render: h => h(test)
}).$mount('#app')
