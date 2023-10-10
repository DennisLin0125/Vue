# vue腳手架配置代理

### 方法一

* 在vue.config.js中加入以下配置：

```js
devServer:{
   proxy:"http://localhost:5000"
}
```

* 說明：

1. 優點：配置簡單，請求資源時直接發給前端（8080）即可。
2. 缺點：不能配置多個代理，不能靈活的控制請求是否走代理。
3. 工作方式：若依照上述配置代理，當請求了前端不存在的資源時，那麼該請求會轉送給伺服器 （`優先匹配前端資源`）

### 方法二

#### 編寫`vue.config.js`配置具體代理規則：

```js
module.exports = {
devServer: {
       proxy: {
       '/api1': {// 符合所有以 '/api1'開頭的請求路徑
         target: 'http://localhost:5000',// 代理目標的基礎路徑
         changeOrigin: true,
         pathRewrite: {'^/api1': ''}
       },
       '/api2': {// 符合所有以 '/api2'開頭的請求路徑
         target: 'http://localhost:5001',// 代理目標的基礎路徑
         changeOrigin: true,
         pathRewrite: {'^/api2': ''}
       }
     }
   }
}
/*
    changeOrigin設定為true時，伺服器收到的請求頭中的host為：localhost:5000
    changeOrigin設定為false時，伺服器收到的請求頭中的host為：localhost:8080
    changeOrigin預設值為true
*/
```

#### 說明：

1. 優點：可以設定多個代理，且可以靈活的控制請求是否走代理。
2. 缺點：配置略為繁瑣，請求資源時必須加前綴。