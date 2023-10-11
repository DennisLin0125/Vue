// 該文件用於創建Vuex最為核心的store

import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'  // npm install vuex@3.6.2
// 使用插件
Vue.use(Vuex)
// 準備actions用於響應組件中的動作
const actions = {}
// 準備mutations用於操作數據(state)
const mutations = {}
// 準備state用於存放數據
const state = {}


// 創建並導出store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
