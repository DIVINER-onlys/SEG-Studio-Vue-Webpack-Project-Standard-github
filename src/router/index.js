import Vue from 'vue'
import Router from 'vue-router'
// 此种方式引入即可实现路由懒加载
const Home = () => import('../views/home')
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
