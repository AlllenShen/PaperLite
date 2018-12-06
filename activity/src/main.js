import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import bus from './bus.vue'

Vue.use(iView)
Vue.config.productionTip = false
Vue.bus = bus

new Vue({
  render: h => h(App)
}).$mount('#app')
