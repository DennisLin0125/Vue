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
    add(miniStore,value){
    // console.log('actions中的add被呼叫了',miniStore,value)
    context.commit('ADD',value)
    },
}

const mutations = {
    //執行加
    ADD(state,value){
    // console.log('mutations中的ADD被呼叫了',state,value)
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

### 6.四個map方法的使用

* `mapState`方法：用來幫助我們對應`state`中的資料為計算屬性

```js
computed: {
    //透過mapState產生計算屬性：sum、school、subject（物件寫法）
    ...mapState({sum:'sum',school:'school',subject:'subject'}),
        
    //透過mapState產生計算屬性：sum、school、subject（陣列寫法）
    ...mapState(['sum','school','subject']),
},
```

* `mapGetters`方法：用來幫助我們將`getters`中的資料映射為計算屬性

```js
computed: {
    //利用mapGetters產生計算屬性：bigSum（物件寫法）
    ...mapGetters({bigSum:'bigSum'}),

    //利用mapGetters產生計算屬性：bigSum（陣列寫法）
    ...mapGetters(['bigSum'])
},
```

* `mapActions`方法：用來幫助我們產生與`actions`對話的方法，即：包含下列敘述的函數

```js
$store.dispatch(xxx)
```

```js
methods:{
    //靠mapActions生成：addWhenOdd、asyncAdd（物件形式）
    ...mapActions({ addWhenOdd: 'addWhenOdd', asyncAdd: 'asyncAdd' }),

    //靠mapActions產生：addWhenOdd、asyncAdd（陣列形式）
    ...mapActions(['addWhenOdd','asyncAdd']),
}
```

* `mapMutations`方法：用於幫助我們產生與`mutations`對話的方法，即：包含的函數

```js
$store.commit(xxx)
```

```js
methods:{
    //靠mapActions生成：add、sub（物件形式）
    ...mapMutations({ add: 'ADD', sub: 'SUB' }),
    
    //靠mapMutations生成：ADD、SUB（陣列形式）
    ...mapMutations(['ADD','SUB']),
}
```

> 備註：mapActions與mapMutations使用時，若需要傳遞參數需要：在範本中綁定事件時傳遞好參數，否則參數是事件物件。

### 7.模組化+命名空間

1. 目的：讓程式碼更好維護，讓多種資料分類更明確。

2. 修改`store.js`

```javascript
const countOptions = {
    namespaced:true,//開啟命名空間
    state:{x:1},
    mutations: { ... },
    actions: { ... },
    getters: {
        bigSum(state){
            return state.sum * 10
        }
    }
}

const personOptions = {
    namespaced:true,//開啟命名空間
    state:{ ... },
    mutations: { ... },
    actions: { ... }
}

const store = new Vuex.Store({
    modules: {
        countAbout,
        personAbout
    }
})
```

3. 開啟命名空間後，元件中讀取state資料：

```js
//方式一：自己直接讀取
this.$store.state.personAbout.list
//方式二：借助mapState讀取：
...mapState('personOptions',['personList']),
```

4. 開啟命名空間後，元件中讀取getters資料：

```js
//方式一：自己直接讀取
this.$store.getters['personOptions/firstPersonName']
//方式二：借助mapGetters讀取：
...mapGetters('personOptions',['firstPersonName'])
```

5. 開啟命名空間後，元件中呼叫dispatch

```js
//方式一：自己直接dispatch
this.$store.dispatch('personOptions/addPersonLin',personObj)
//方式二：借助mapActions：
...mapActions("countOptions", ["addWhenOdd", "asyncAdd"]),
```

6. 開啟命名空間後，元件中呼叫commit

```js
//方式一：自己直接commit
this.$store.commit('personOptions/ADD_PERSON',personObj)
//方式二：借助mapMutations：
...mapMutations("countOptions", ["ADD", "SUB"]),
```
