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
    config['headers']['common']['token'] = store.getters.token
  }

  return config
}, () => {
  // 异常处理
})

// 响应拦截
axios.interceptors.response.use(response => {
  const data = response.data
  // 错误处理
  if (data.code !== '200') {
    const err = new Error(data.msg)
    err.data = data
    throw err
  }

  // 根据不同的code做不同的处理
  return response.data
}, error => { // 返回状态码不为200时的错误处理
  if (error) {
    switch (error.data.code) {
      case '400':
        error.message = '请求错误'
        break

      case '500':
        error.message = '系统内部错误'
        break

      case '4010':
        error.message = 'token不能为空'
        break

      case '4011':
        error.message = 'token不合法'
        break

      case '4012':
        error.message = 'token已失效'
        break
    }
  }
  return Promise.reject(error)
})

export default axios
