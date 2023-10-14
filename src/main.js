/**
 * 這是入口文件
 */

import Vue from 'vue'
import App from './App.vue'

// 參考 https://element.eleme.io/#/zh-CN/component/installation
// import ElementUI from 'element-ui';    // npm i element-ui
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

Vue.component('el-button', Button);
Vue.component('el-row', Row);
Vue.component('el-date-picker', DatePicker);

// 關閉生產提示
Vue.config.productionTip = false

// 創建Vue
new Vue({
  el: '#app',
  render: h => h(App),
})
