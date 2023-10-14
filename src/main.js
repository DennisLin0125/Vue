/**
 * 這是入口文件
 */

import Vue from 'vue'
import App from './App.vue'

// 引入Vue-router
import VueRouter from 'vue-router'  // npm install vue-router@3.5.2
// 引入路由器
import router from './router'

// 關閉生產提示
Vue.config.productionTip = false
// 應用插件
Vue.use(VueRouter)

// 創建Vue
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
