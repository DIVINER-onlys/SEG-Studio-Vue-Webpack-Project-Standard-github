import axios from 'axios'
import { baseUrl } from '../config'
// import router from '../router'

const request = axios.create({
  baseURL: baseUrl,
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前可以做些操作
    let token = '123'   // 比如设置token等
    if(token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    const res = response.data
    if(res.status === '2') {
      // 帐号密码认证错误拦截，此处可以做跳转登录界面处理
      // router.replace({path: '/'})
      return Promise.reject(res.msg)
    }else {
      return res
    }
  },
  error => {
    console.log('err:' + error)
    return Promise.reject(error)
  }
)

export default request