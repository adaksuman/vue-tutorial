import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

//Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
