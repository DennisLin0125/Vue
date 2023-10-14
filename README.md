## 路由

1. 理解： 一個路由（route）就是一組映射關係（key - value），多個路由需要路由器（router）來管理。
2. 前端路由：key是路徑，value是元件。

### 1.基本使用

1. 安裝vue-router，指令：

```bash
npm install vue-router@3.5.2
```

2. 應用程式插件：

```js
Vue.use(VueRouter)
```

3. 編寫router設定項:

```js
//引進VueRouter
import VueRouter from 'vue-router'
//引入Luyou 組件
import About from '../components/About'
import Home from '../components/Home'

//建立router實例對象，去管理一組一組的路由規則
const router = new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home
        }
    ]
})

//暴露router
export default router
```

4. 實現切換（active-class可配置高亮樣式）

```vue
<router-link active-class="active" to="/about">About</router-link>
```

5. 指定展示位置

```vue
<router-view></router-view>
```

### 2.幾個注意點

1. 路由元件通常存放在`pages`資料夾，一般元件通常存放在`components`資料夾。
2. 透過切換，「`隱藏`」了的路由元件，預設是被`銷毀`掉的，需要的時候再去掛載。
3. 每個元件都有自己的`$route`屬性，裡面儲存`自己`的路由資訊。
4. 整個應用程式只有一個`router`，可以透過元件的`$router`屬性來取得。

### 3.多層路由（多層路由）

1. 配置路由規則，使用children配置項：

```js
routes:[
    {
        path:'/about',
        component:About,
    },
    {
        path:'/home',
        component:Home,
        children:[ //透過children配置子級路由
            {
                path:'news', //此處一定不要寫：/news
                component:News
            },
            {
                path:'message',//此處一定不要寫：/message
                component:Message
            }
        ]
    }
]
```

2. 跳轉（要寫完整路徑）：

```vue
<router-link to="/home/news">News</router-link>
```

### 4.路由的query參數

1. 傳遞參數

```vue
<!-- 跳轉並攜帶query參數，to的字串寫法 -->
<router-link :to="/home/message/detail?id=666&title=你好">跳轉</router-link>

<!-- 跳轉並攜帶query參數，to的物件寫法 -->
    <router-link :to="{
        path:'/home/message/detail',
        query:{
            id:666,
            title:'你好'
        }
    }"
    >跳轉
    </router-link>
```

2. 接收參數：

```js
$route.query.id
$route.query.title
```

### 5.命名路由

1. 作用：可以簡化路由的跳轉。

2. 如何使用

* 為路由命名：

```js
{
    path:'/demo',
    component:Demo,
    children:[
        {
            path:'test',
            component:Test,
            children:[
                {
                    name:'hello' //為路由命名
                    path:'welcome',
                    component:Hello,
                }
            ]
        }
    ]
}
```

* 簡化跳轉：

```vue
<!--簡化前，需要寫出完整的路徑 -->
<router-link to="/demo/test/welcome">跳轉</router-link>

<!--簡化後，直接透過名字跳轉 -->
<router-link :to="{name:'hello'}">跳轉</router-link>

<!--簡化寫法配合傳遞參數 -->
<router-link 
    :to="{
        name:'hello',
        query:{
            id:666,
            title:'你好'
        }
    }"
    >跳轉
</router-link>
```

### 6.路由的params參數

1. 設定路由，聲明接收params參數

```js
{
    path:'/home',
    component:Home,
    children:[
        {
            path:'news',
            component:News
        },
        {
            component:Message,
            children:[
                {
                    name:'default',
                    path:'detail/:id/:title', //使用佔位符宣告接收params參數
                    component:Detail
                }
            ]
        }
    ]
}
```

2. 傳遞參數

```vue
<!-- 跳轉並攜帶params參數，to的字串寫法 -->
<router-link :to="/home/message/detail/666/你好">跳轉</router-link>

<!-- 跳轉並攜帶params參數，to的物件寫法 -->
<router-link
    :to="{
        name:'default',
        params:{
            id:666,
            title:'你好'
        }
    }"
    >跳轉
</router-link>
```

> 特別注意：當路由攜帶params參數時，若使用to的物件寫法，則不能使用path配置項，必須使用name配置！

3. 接收參數：

```js
$route.params.id
$route.params.title
```


### 7.路由的props配置

作用：讓路由元件更方便的收到參數

```js
{
    name:'xiangqing',
    path:'detail/:id',
    component:Detail,

    //第一種寫法：props值為對象，該對像中所有的key-value的組合最終都會透過props傳給Detail元件
    // props:{a:900}

    //第二種寫法：props值為布林值，布林值為true，則把路由收到的所有params參數透過props傳給Detail元件
    // props:true

    //第三種寫法：props值為函數，該函數傳回的物件中每一組key-value都會透過props傳給Detail元件
    props(route){
        return {
            id:route.query.id,
            title:route.query.title
        }
    }
}
```

### 8.```<router-link>```的replace屬性

1. 作用：控制路由跳轉時操作瀏覽器歷史記錄的模式
2. 瀏覽器的歷史記錄有兩種寫入方式：分別為`push`和`replace`  
* push:是追加歷史記錄，
* replace是替換當前記錄。 路由跳轉時候預設為`push`
3. 如何開啟`replace`模式：

```js
<router-link replace .......>News</router-link>
```