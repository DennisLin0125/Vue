/**
 * 這是入口文件
 */

import Vue from "vue";
import App from "./App.vue";

// 引入插件
import VueResource from "vue-resource";

// 關閉生產提示
Vue.config.productionTip = false;

// 使用插件
Vue.use(VueResource)

// 創建Vue
new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安裝全域事件匯流排，$bus就是目前應用的vm
  },
});
