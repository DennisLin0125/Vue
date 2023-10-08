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

2. 使用`vue.config.js`可以對腳手架進行個人化定制，詳情請見：https://cli.vuejs.org/zh

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