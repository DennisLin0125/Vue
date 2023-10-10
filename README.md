# 插槽slot

1. 作用：讓父元件可以向子元件指定位置插入html結構，也是一種元件間通訊的方式，適用於 `父元件 ===> 子元件`。

2. 使用方式：

## 作用域插槽：

* 理解：資料在組件的自身，但根據資料產生的結構需要組件的使用者來決定。 （games資料在Category組件中，但使用資料所遍歷出來的結構由App組件決定）

* 具體編碼：

```html
父組件中：
<Category>
    <template scope="scopeData">
        <!-- 產生的是ul列表 -->
        <ul>
            <li v-for="g in scopeData.games" :key="g">{{g}}</li>
        </ul>
    </template>
</Category>

<Category>
    <template slot-scope="scopeData">
        <!-- 產生的是h4標題 -->
        <h4 v-for="g 在 scopeData.games" :key="g">{{g}}</h4>
    </template>
</Category>


子組件中：
<template>
    <div>
        <slot :games="games"></slot>
    </div>
</template>

<script>
export default {
    name: "Categroy",
    props:['title'],
    //資料在子元件自身
    data() {
        return {
            games: ["紅色警戒", "穿越火線", "勁舞團", "傳說對決"],
        }
    },
}
</script>
```
