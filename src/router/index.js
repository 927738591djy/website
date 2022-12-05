import Vue from 'vue'
import vueRouter from 'vue-router' //导入路由
import Home from '../views/home.vue'
import Service from '../views/service.vue'
import Price from '../views/price.vue'
import News from '../views/news.vue'

Vue.use(vueRouter) //使用路由

//创建路由对象
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/service',
        name: 'Service',
        component: Service
    },
    {
        path: '/price',
        name: 'Price',
        component: Price
    },
    {
        path: '/news',
        name: 'News',
        component: News
    }
]


const router = new vueRouter({
    routes
})

export default router
// 每次切换路由都跳转到页面顶部
router.afterEach(() => {window.scrollTo(1000,0)})
