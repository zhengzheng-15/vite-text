// //创建应用路由器
// import VueRouter from 'vue-router'
//引入组件
import Home from '../components/Home.vue'
import Tittle from '../components/Title.vue'
import Cultivate from '../components/Cultivate.vue'
// export default new VueRouter({
 const routers=[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/title',
            component:Tittle
        },
        {
            path:'/cultivate',
            component:Cultivate
        }
    ]
export default routers