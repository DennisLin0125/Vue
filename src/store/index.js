// 該文件用於創建Vuex最為核心的store

import Vue from "vue";
// 引入Vuex
import Vuex from "vuex"; // npm install vuex@3.6.2
// 使用插件
Vue.use(Vuex);
// 準備actions用於響應組件中的動作
const actions = {
//   add(miniStore, value) {
//     console.log("01:actions 中的add被調用了", miniStore, value);
//     miniStore.commit("ADD", value);
//   },
//   sub(miniStore, value) {
//     console.log("01:actions 中的sub被調用了", miniStore, value);
//     miniStore.commit("SUB", value);
//   },
  addWhenOdd(miniStore, value) {
    console.log("01:actions 中的addWhenOdd被調用了", miniStore, value);
    if (miniStore.state.sum % 2 !== 0) {
      miniStore.commit("ADD", value);
    }
  },
  asyncAdd(miniStore, value) {
    console.log("01:actions 中的asyncAdd被調用了", miniStore, value);
    setTimeout(() => {
        miniStore.commit("ADD", value);
    }, 500);
  },
};
// 準備mutations用於操作數據(state)
const mutations = {
  ADD(state, value) {
    console.log("02:mutations 中的ADD被調用了", state, value);
    state.sum += value;
  },
  SUB(state, value) {
    console.log("02:mutations 中的SUB被調用了", state, value);
    state.sum -= value;
  },
};
// 準備state用於存放數據
const state = {
  sum: 0, //當前的和
};

// 創建並導出store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});
