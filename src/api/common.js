import axios from 'axios'
import qs from 'qs'

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

  return config
}, () => {
  // 异常处理
})

// 响应拦截
axios.interceptors.response.use(response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

export default axios
