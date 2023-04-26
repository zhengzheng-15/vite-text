import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'

import routes from './router/index'

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    //history: createWebHistory('/cau-china/'),
    history: createWebHistory('/'),
    routes:routes, // `routes: routes` 的缩写
})
createApp(App).use(router).mount('#app')


// import VueRouter from 'vue-router'
// import router from './router/index'
// Vue.use(VueRoute)
// createApp(App).mount('#app')
