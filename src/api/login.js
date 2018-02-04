import axios from './common'

const baseURL = '/api'

export function login(data) {
  return axios.post(baseURL + '/user/login', data)
}

// export function login(username, password) {
//   console.log('111111111')
//   console.log('2222222')
//   return axios.post({
//     method: 'POST',
//     url: '/api/user/login',
//     data: {
//       username: username,
//       password: password
//     },
//     proxy: {
//       host: '127.0.0.1',
//       port: 8080
//     }
//   })
// }

// const data = userinfo => axios.post('${baseURL}/user/login', userinfo)

