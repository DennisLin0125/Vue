// 人員管理相關配置
export const personOptions = {
    namespaced: true,
    // 準備actions用於響應組件中的動作
    actions: {
      addPersonLin(miniStore, value) {
        if (value.name.indexOf('林') === 0) {
          miniStore.commit('ADD_PERSON', value)
        } else {
          alert('添加失敗')
        }
      }
    },
    // 準備mutations用於操作數據(state)
    mutations: {
      ADD_PERSON(state, personObj) {
        if (!personObj.name) {
          return alert('請輸入姓名')
        }
        console.log("02:mutations 中的ADD_PERSON被調用了", state, personObj);
        state.personList.unshift(personObj);
      },
    },
    // 準備state用於存放數據
    state: {
      personList: [{ id: "001", name: "Dennis" }],
    },
    getters: {
      firstPersonName(state) {
        return state.personList[0].name;
      }
    },
  };