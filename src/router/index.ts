import {createRouter,createWebHashHistory} from 'vue-router'


// 路由数组
let routes = [
    {
        name:'home',
        path:'/',
        component:()=>import('../views/home.vue')
    },
    {
        name:'detail',
        path:'/detail',
        component:()=>import('../views/detail.vue')
    }
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
})
export default router