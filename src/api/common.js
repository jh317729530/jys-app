import axios from 'axios'
import qs from 'qs'
import store from '../store'

// 全局默认配置
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 设置 CORS 跨域
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

axios.interceptors.request.use(config => {
  // POST 请求参数处理成axios post 方法 所需的格式
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }

  if (store.getters.token) {
    console.log('到这里')
    config.headers.Authorization = 'token ${store.state.token}'
  }

  return config
}, () => {
  // 异常处理
})

// 响应拦截
axios.interceptors.response.use(response => {
  // const data = response.data

  // 根据不同的code做不同的处理
  return response.data
}, error => { // 返回状态码不为200时的错误处理
  return Promise.reject(error)
})

export default axios
