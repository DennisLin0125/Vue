# 全域事件匯流排（GlobalEventBus）

1. 一種組件間通訊的方式，適用於<span style="color:red">任一組件間通訊</span>。

2. 安裝全域事件匯流排：

```js
new Vue({

    beforeCreate() {
        Vue.prototype.$bus = this //安裝全域事件匯流排，$bus就是目前應用的vm
    },
     
})
```

3. 使用事件匯流排：

    1. 接收資料：A元件想接收數據，則在A元件中給`$bus`綁定自訂事件，事件的<span style="color:red">回呼留在A元件本身。 </span>

       ```js
       methods(){
         demo(data){......}
       }
       .....
       mounted() {
         this.$bus.$on('xxxx',this.demo)
       }
       ```

    2. 提供資料：
    ```js
    this.$bus.$emit('xxxx',資料)
    ```

4. 最好在`beforeDestroy`鉤子中，用`$off`去解綁<span style="color:red">目前元件所用到的</span>事件。