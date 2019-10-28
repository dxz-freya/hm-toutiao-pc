import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Notfound from '@/views/404'
Vue.use(VueRouter)
const router = new VueRouter({
  // 配置对象
  // 路由规则选项 routes  若干规则
  routes: [{ // 登录
    path: '/login',
    component: Login
  },
  { // 首页
    path: '/',
    name: 'home',
    component: Home,
    // 欢迎页面
    children: [{
      path: '/',
      name: 'welcome',
      component: Welcome
    }]
  },
  // 匹配不符合路由规则的路径，显示404
  {
    path: '*',
    component: Notfound
  }
  ]
})
export default router
