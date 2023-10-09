# 元件的自訂事件

1. 一種元件間通訊的方式，適用於：`子元件 ===> 父元件`

2. 使用場景：A是父元件，B是子元件，B想給A傳數據，那麼就要在A中給B綁定自訂事件（`事件的回調在 A 中`）。

3. 綁定自訂事件：

*  第一種方式，在父元件中：

```js
<Demo @happy="test"/>
``` 
* 或 
```js
<Demo v-on:happy="test"/>
```

*  第二種方式，在父元件中：

```js
<Demo ref="demo"/>
.....
mounted(){
    this.$refs.xxx.$on('Hello',this.test)
}
```

*  若想要讓自訂事件只能觸發一次，可以使用`once`修飾符，或`$once`方法。

*  觸發自訂事件：

```js
this.$emit('Hello',資料)
```

*  解綁自訂事件

```js
this.$off('Hello')
```

*  元件上也可以綁定原生DOM事件，需要使用`native`修飾符。

*  注意：透過

```js
this.$refs.xxx.$on('Hello',回呼)
```
綁定自訂事件時，回呼`要麼配置在methods中，要嘛用箭頭函數`，否則`this`指向會出問題！

# 全域事件匯流排（GlobalEventBus）

1. 一種組件間通訊的方式，適用於`任一組件間通訊`。

2. 安裝全域事件匯流排：

```js
new Vue({

    beforeCreate() {
        Vue.prototype.$bus = this //安裝全域事件匯流排，$bus就是目前應用的vm
    },
     
})
```

## 使用事件匯流排：

* 接收資料：A元件想接收數據，則在A元件中給`$bus`綁定自訂事件，事件的`回呼留在A元件本身`。 </span>

```js
methods(){
    demo(data){......}
}
.....
mounted() {
    this.$bus.$on('xxxx',this.demo)
}
```

* 提供資料：

```js
this.$bus.$emit('xxxx',資料)
```

4. 最好在`beforeDestroy`鉤子中，用`$off`去解綁`目前元件所用到的事件`。

