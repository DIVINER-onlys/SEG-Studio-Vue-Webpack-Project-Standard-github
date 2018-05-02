import router from '../router'

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log("全局路由守卫输出")
  console.log("to:" + to)
  console.log("from:" + from)
  next()
})