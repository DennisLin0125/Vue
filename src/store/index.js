// 該文件用於創建Vuex最為核心的store

import Vue from "vue";
// 引入Vuex
import Vuex from "vuex"; // npm install vuex@3.6.2
// 使用插件
Vue.use(Vuex);

import { personOptions } from "./person";
import { countOptions } from "./count";

// 創建並導出store
export default new Vuex.Store({
  modules: {
    countOptions,
    personOptions
  }
});
