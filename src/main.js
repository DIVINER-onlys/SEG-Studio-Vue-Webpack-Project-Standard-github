// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components/index.js'
import store from './store'
//全局路由守卫
import './utils/permission'
//全局函数
import utils from './utils'
//全局过滤器
import filters from './filters'
//全局样式表
import './styles/index.css'

//全局过滤器配置
Object.keys(filters).forEach(key => {
  Vue.filter(key,filters[key])
})

//Vue启动不产生构建信息
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 原型定义 在Vue上添加实例方法，这些方法添加到Vue.prototype上实现，方法名为 $utils
Object.defineProperty(Vue.prototype, '$utils', {value: utils})