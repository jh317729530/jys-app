import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import '@/icons'
import axios from 'axios'

import App from './App.vue'

Vue.use(ElementUI)
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
