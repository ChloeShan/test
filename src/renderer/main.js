import Vue from 'vue'
import axios from 'axios'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Qs from 'qs'

import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.qs = Qs
Vue.prototype.axios = axios

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  mounted(){
    window.vue = this
  },
  template: '<App/>'
}).$mount('#app')
