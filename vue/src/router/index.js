import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
import Index from '../views/index'

Vue.use(Router)
const routers = [
    {
        path: '/',
        component: Index,
        name: 'index',
    }
]

const router = new VueRouter({
    mode:"history",
    routes:routers
})

export default router;
