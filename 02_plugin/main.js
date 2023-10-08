/**
 * 這是入口文件
 */

import Vue from 'vue'
import App from './App.vue'

// 引入插件
import plugins from './plugins'

// 關閉生產提示
Vue.config.productionTip = false

// 應用插件
Vue.use(plugins)

// 創建Vue
new Vue({
  el: '#app',
  render: h => h(App),
})
