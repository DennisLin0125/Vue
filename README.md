# 訊息訂閱與發布（pubsub）

## 一種組件間通訊的方式，適用於`任一組件間通訊`。

### 使用步驟：

1. 安裝pubsub：

```bash
npm i pubsub-js
```

2. 引入: 

```js
import pubsub from 'pubsub-js'
```

3. 接收資料：A元件想接收數據，則在A元件中訂閱訊息，訂閱的回呼留在`A元件`本身。

```js
methods(){
    demo(data){......}
}
.....
mounted() {
    this.pid = pubsub.subscribe('xxx',this.demo) //訂閱訊息
}
```

4. 提供資料：

```js
pubsub.publish('xxx',資料)
```

5. 最好在beforeDestroy鉤子中，用`取消訂閱`。

```js
pubSub.unsubscribe(token)
```
