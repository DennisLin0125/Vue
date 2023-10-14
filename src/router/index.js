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
const router = new VueRouter({
  routes: [
    {
      name: "default",
      path: "/about",
      component: About,
      meta: {
        title: '關於'
      }
    },
    {
      name: "first",
      path: "/home",
      component: Home,
      meta: {
        title: '首頁'
      },
      children: [
        {
          name: "myNews",
          path: "news",
          component: News,
          meta: {
            isAuth: true,
            title: '新聞'
          },
          // 獨享路由守衛
          beforeEnter: (to, from, next) => {
            if (to.meta.isAuth) {
              if (localStorage.getItem('user') === 'dennis') {
                next()
              } else {
                return alert('無權限查看')
              }
            } else {
              next()
            }
          }
        },
        {
          name: "myMessage",
          path: "message",
          component: Message,
          meta: {
            isAuth: true,
            title: '訊息'
          },
          children: [
            {
              name: "embedURL",
              path: "detial",
              component: Detial,
              meta: {
                title: '詳情'
              },
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

// 全局前置 路由守衛
// router.beforeEach((to, from, next) => {
//   if (to.meta.isAuth) {
//     if (localStorage.getItem('user') === 'dennis') {
//       next()
//     }else{
//       return alert('無權限查看')
//     }
//   }else{
//     next()
//   }
// })

// 後置路由守衛
// router.afterEach((to, from) => {
//   console.log(to, from)
//   document.title = to.meta.title || '學習系統'
// })
export default router;