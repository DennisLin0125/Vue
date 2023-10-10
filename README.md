# 插槽slot

1. 作用：讓父元件可以向子元件指定位置插入html結構，也是一種元件間通訊的方式，適用於 `父元件 ===> 子元件`。

2. 使用方式：

## 預設插槽：

```vue
父組件中：
<Category>
    <div>html結構1</div>
</Category>

子組件中：
<template>
    <div>
        <!-- 定義插槽 -->
        <slot>插槽預設內容...</slot>
    </div>
</template>
```