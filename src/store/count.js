// 求和功能相關配置
export const countOptions = {
    namespaced: true,
    // 準備actions用於響應組件中的動作
    actions: {
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
    },
    // 準備mutations用於操作數據(state)
    mutations: {
      ADD(state, value) {
        console.log("02:mutations 中的ADD被調用了", state, value);
        state.sum += value;
      },
      SUB(state, value) {
        console.log("02:mutations 中的SUB被調用了", state, value);
        state.sum -= value;
      },
    },
    // 準備state用於存放數據
    state: {
      sum: 0, //當前的和
      school: "台灣大學",
      subject: "前端",
    },
    getters: {
      bigSum(state) {
        return state.sum * 10;
      },
    },
  };