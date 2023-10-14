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
            },
          ],
        },
      ],
    },
  ],
});
