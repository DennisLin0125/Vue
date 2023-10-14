/**
 * 該文件專門創建路由器
 */

// 引入Vue-router
import VueRouter from "vue-router"; // npm install vue-router@3.5.2

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Message from "../pages/Message.vue";
import Detial from "../pages/Detial.vue";

// 創建並暴露一個路由器
export default new VueRouter({
  routes: [
    {
      name: "default",
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "embedURL",
              path: "detial",
              component: Detial,

              // props第一種寫法,此寫法會傳給Detial組件
              // props: {
              //   a:1,
              //   b:'hello'
              // }

              // props第二種寫法,若為真,就會把該組件收到的props傳給該組件,但是query參數無效
              // props: true,

              // props第三種寫法,函數
              props($route) {
                return {
                  id: $route.query.id,
                  title: $route.query.title
                }
              }
            },
          ],
        },
      ],
    },
  ],
});
