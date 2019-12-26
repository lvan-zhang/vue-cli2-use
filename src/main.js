// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
// import Confirm from './components/confirm'
// 引入css文件
import './style/reset.css'
import './style/common.css'

Vue.use(Vant)
// import stat from '@dxy/vue-stat'
// Vue.use(stat, {
//   router,
//   account: 'da-10002-6',
//   env: /cn/.test(location.host) ? 'production' : 'develop',
//   real_member_id: window.real_member_id || 'dxy_6rfmiak6'
// })
// var isTst = (window.location.host === 'e.dxy.net') ? true : false
// 手机调试工具，测试环境才有
// if(isTst){
//   var VConsole = require('vconsole');
//   new VConsole();
// }

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
