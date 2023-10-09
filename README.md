# Vue封裝的過度與動畫

* 作用：在插入、更新或移除 DOM元素時，在適當的時候為元素添加樣式類別名稱。

## 元素進入的樣式：
* `v-enter`：進入的起點
* `v-enter-active`：進入過程中
* `v-enter-to`：進入的終點

## 元素離開的樣式：
* `v-leave`：離開的起點
* `v-leave-active`：離開過程中
* `v-leave-to`：離開的終點

* 使用

```vue
<transition>
```

## 包裹要過度的元素，並配置name屬性：

```vue
<transition name="hello">
<h1 v-show="isShow">你好啊！ </h1>
</transition>
```

## 備註：若有多個元素需要過度，則需要使用：`<transition-group>`，且每個元素都要指定`key`值。