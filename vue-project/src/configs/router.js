import Vue from 'vue'
//引入路由模块
import VueRouter from 'vue-router'
//使用路由模块
Vue.use(VueRouter)

//一层路由
import App from '../App.vue'
import RecommendSearch from '../routers/recommendSearch.vue'
import RouterLogin from '../routers/RouterLogin.vue'
import RouterEnter from '../routers/RouterEnter.vue'

//二层路由
import Recommend from '../routers/recommend.vue'
import New from '../routers/new.vue'

//配置路由
const routes = [{
    path: '/app',
    component: App,
    children: [{                                 
        path: 'recommend',
        name:'recommend',
        component: Recommend
    },{                                 
        path: 'new',
        name:"new",
        component: New
    }]
},{
    path: '/recommendSearch',
    component: RecommendSearch
},{
    path: '/routerEnter',
    component: RouterEnter  
},{
    path: '/routerLogin',
    component: RouterLogin  
}
]

//实例路由
const router = new VueRouter({
    routes
})

//导出出口
export default router