# Vuex

## 1.概念

* 在Vue中實現集中式狀態（資料）管理的一個Vue插件，對vue應用中多個元件的共享狀態進行集中式的管理（讀/寫），也是一種元件間通訊的方式，且適用於 任意組件間通訊。

### 2.何時使用？

* 多個元件需要共享資料時

### 3.搭建vuex環境

1. 建立檔案：`src/store/index.js`

```js
//引進Vue核心庫
import Vue from 'vue'
//引進Vuex
import Vuex from 'vuex'
//應用Vuex插件
Vue.use(Vuex)

//準備actions物件－回應元件中使用者的動作
const actions = {}
//準備mutations物件－修改state中的數據
const mutations = {}
//準備state物件－保存具體的數據
const state = {}

//建立並揭露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})
```

2. 在`main.js`中建立vm時傳入`store`設定項

```js
.....
//引進store
import store from './store'
.....

//建立vm
new Vue({
    el:'#app',
    render: h => h(App),
    store
})
```

### 4.基本使用

1. 初始化資料、設定`actions`、設定`mutations`，操作檔`store.js`

```js
//引進Vue核心庫
import Vue from 'vue'
//引進Vuex
import Vuex from 'vuex'
//引用Vuex
Vue.use(Vuex)

const actions = {
    //在回應組件中加的動作
    jia(context,value){
    // console.log('actions中的jia被呼叫了',miniStore,value)
    context.commit('JIA',value)
    },
}

const mutations = {
    //執行加
    JIA(state,value){
    // console.log('mutations中的JIA被呼叫了',state,value)
    state.sum += value
    }
}

//初始化資料
const state = {
    sum:0
}

//建立並揭露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})
```

2. 元件中讀取vuex中的資料：

```js
$store.state.sum
```

3. 元件中修改vuex中的資料：

```js
$store.dispatch('action中的方法名稱',資料)
``` 
* 或
```js
$store.commit('mutations中的方法名稱',資料) 
```

    > 備註：若沒有網路請求或其他業務邏輯，元件中也可以越過actions，即不寫`dispatch`，直接寫`commit`

### 5.getters的使用

1. 概念：當state的資料需要經過加工後再使用時，可以使用getters加工。

2. 在`store.js`中追加`getters`配置

```js
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

//建立並揭露store
export default new Vuex.Store({
    getters
})
```

3. 元件中讀取資料：

```js
$store.getters.bigSum
```