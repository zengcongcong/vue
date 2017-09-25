//1. 导入Vue模块
import Vue from "vue"

//4. 导入路由插件 vue-router
import VueRouter from "vue-router"

//5. 将VueRouter和Vue关联起来
Vue.use(VueRouter);


//6. 导入Account组件
import Account from "../components/account/Account.vue"

import Login from "../components/account/Login.vue"

import Register from "../components/account/Register.vue"

export default new VueRouter({
    routes: [
        {path: "/account", component: Account,
            children: [
                {path: "login", component: Login},
                {path: "register", component: Register}
            ]
        }
    ]
})