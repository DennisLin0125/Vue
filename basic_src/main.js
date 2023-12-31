/**
 * 這是入口文件
 */

import Vue from 'vue'
import App from './App.vue'

// 關閉生產提示
Vue.config.productionTip = false

// 創建Vue
new Vue({
  el: '#app',
  render: h => h(App),
})
