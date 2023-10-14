/**
 * 該文件專門創建路由器
 */

// 引入Vue-router
import VueRouter from 'vue-router'  // npm install vue-router@3.5.2

import About from '../components/About.vue'
import Home from '../components/Home.vue'


// 創建並暴露一個路由器
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
})