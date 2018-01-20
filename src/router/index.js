import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index'
import Login from '@/components/login/index'
import Detail from '@/components/detail/index'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
