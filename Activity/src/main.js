import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import iView from 'iview'
import router from './router'
import 'iview/dist/styles/iview.css'
import bus from './bus.vue'
import vueResource from 'vue-resource'
import store from './store'
import VueCropper from 'vue-cropper'

Vue.use(iView)
Vue.use(vueResource)
Vue.use(VueCropper)
// Vue.http.options.emulateJSON = true;
Vue.config.productionTip = false
Vue.bus = bus

new Vue({
  router,
  store,
  VueCropper,
  render: h => h(App)
}).$mount('#app')
