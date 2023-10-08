# Vue.js

## 腳手架文件結構

```text
├── node_modules
├── public
│ ├── favicon.ico:     頁籤圖標
│ └── index.html:      主頁面
├── src
│ ├── assets:          存放靜態資源
│ │ └── logo.png
│ │── component:       存放組件
│ │ └── HelloWorld.vue
│ │── App.vue:         匯總所有元件
│ │── main.js:         入口文件
├── .gitignore:        git版本管制忽略的配置
├── babel.config.js:   babel的設定檔
├── package.json:      應用程式設定檔
├── README.md:         應用描述文件
├── package-lock.json：套件版本控製文件
├── vue.config.js：    個人化定制
```

## 關於不同版本的Vue

* `vue.js`與`vue.runtime.xxx.js`的差別：
  * `vue.js`是完整版的Vue，包含：核心功能 + 範本解析器。
  * `vue.runtime.xxx.js`是運行版的Vue，只包含：核心功能；沒有範本解析器。
* 因為`vue.runtime.xxx.js`沒有範本解析器，所以不能使用template這個配置項，需要使用render函數接收到的createElement函數去指定具體內容。

## vue.config.js設定檔

1. 使用下列指令,可以查看到Vue腳手架的預設配置。

```bash
vue inspect > output.js
```

2. 使用`vue.config.js`可以對腳手架進行個人化定制，詳情請見：<https://cli.vuejs.org/zh>

## ref屬性

* 被用來給元素或子組件註冊引用資訊（id的替代者）
* 應用在html標籤上取得的是真實DOM元素，應用在元件標籤上是元件實例物件（vc）
* 使用方式：
* 打標識：

```html
<h1 ref="xxx">.....</h1>
```

* 或

```html
<School ref="xxx"></School>
```

* 取得：

```js
this.$refs.xxx
```

## props設定項

1. 功能：讓元件接收外部傳過來的數據

2. 傳遞資料：

```html
<Demo name="xxx"/>
```

3. 接收資料：

     * 第一種方式（只接收）：

     ```js
     props:['name'] 
     ```

     * 第二種方式（限制型別）：

     ```js
     props:{
        name: String
     }
     ```

     * 第三種方式（限制類型、限制必要性、指定預設值）：

    ```js
    props:{
        name:{
            type: String, //類型
            required: true, //必要性
            default: '老王' //預設值
        }
    }
    ```

     > 備註：props是唯讀的，Vue底層會監測你對props的修改，如果進行了修改，就會發出警告，若業務需求確實需要修改，那麼請複製props的內容到data中一份，然後去 修改data中的資料。

## mixin(混入)

1. 功能：可以把多個元件共用的配置提取成一個混入對象

2. 使用方式：

     第一步定義混合：

     ```js
     {
         data(){....},
         methods:{....}
         ....
     }
     ```

     第二步使用混入：

     全域混入：

     ```js
     Vue.mixin(xxx)
     ```

     局部混入：

     ```js
     mixins:['xxx'] 
     ```
