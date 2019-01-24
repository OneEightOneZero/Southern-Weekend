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
import Details from '../routers/Details.vue'

//二层路由
import Recommend from '../routers/recommend.vue'
import New from '../routers/new.vue'
import Viewpoint from '../routers/Viewpoint.vue'
import Culture from '../routers/Culture.vue'
import People from '../routers/People.vue'
import Image from '../routers/Image.vue'
import Special from '../routers/Special.vue'
import Live from '../routers/Live.vue'
import Details from '../routers/Details.vue'

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
    },{                                 
        path: 'viewpoint',
        name:"viewpoint",
        component: Viewpoint
    },{                                 
        path: 'culture',
        name:"culture",
        component: Culture
    },{                                 
        path: 'people',
        name:"people",
        component: People
    },{                                 
        path: 'image',
        name:"image",
        component: Image
    },{                                 
        path: 'special',
        name:"special",
        component: Special
    },{                                 
        path: 'live',
        name:"live",
        component: Live
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
},{
    path: '/details/:id',
    component: Details  
}
]

//实例路由
const router = new VueRouter({
    routes
})

//导出出口
export default router