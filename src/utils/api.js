// import axios from 'axios'

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// // 请求拦截器
// axios.interceptors.request.use(function(config) {
//   return config
// }, function(error) {
//   return Promise.reject(error)
// })

// // 响应拦截器
// axios.interceptors.response.use(function(response) {
//   return response
// }, function(error) {
//   return Promise.reject(error)
// })

// // 封装axios的post请求
// export function fetch(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, params).then(response => resolve(response.data))
//   }).catch((error) => {
//     reject(error)
//   })
// }

// export default {
//   Carrie(url, params) {
//     return fetch(url, params)
//   }
// }

// https://github.com/mzabriskie/axios
import axios from 'axios'

// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use((config) => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest'

  return config
})

// 拦截响应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  console.log('拦截处理')
  const data = response.data

  // 根据返回的code值来做不同的处理（和后端约定）

  // 若不是正确的返回code，且已经登录，就抛出错误
  const err = new Error(data.description)

  err.data = data
  err.response = response

  throw err
}, (err) => { // 这里是返回状态码不为200时候的错误处理
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break

      case 401:
        err.message = '未授权，请登录'
        break

      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
  }

  return Promise.reject(err)
})

axios.install = (Vue) => {
  Vue.prototype.$axios = axios
}

export default axios
