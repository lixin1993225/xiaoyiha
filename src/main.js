// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios'
import jsonp from 'jsonp'

import './assets/style/public.css'
import './assets/public/rem.js'
Vue.config.productionTip = false
Vue.prototype.$goroute = function(path){//路由跳转
	this.$router.push(path)
}
Vue.prototype.$ajax = axios
Vue.prototype.$jsonp = jsonp
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
