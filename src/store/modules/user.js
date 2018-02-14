import { login, getUserInfo } from '../../api/login'
// import { Message } from 'element-ui'

// import { login } from '@/api/login'
// import { setToken } from '@/utils/auth'

const user = {
  state: {
    token: '',
    name: '',
    getUserInfoed: 'no', // yes 表示已登录， no 表示已登录
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80'
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      if (avatar) {
        state.avatar = avatar
      }
    },
    SET_LOGIN: (state, inline) => {
      state.getUserInfoed = inline
    }
  },
  actions: {
    // 登录
    setToken({ commit }, data) {
      commit('SET_TOKEN', data)
    },
    // 登录
    Login({ commit }, info) {
      return new Promise((resolve, reject) => {
        login(info).then(data => {
          if (data.code === '501') {
            reject(data)
          }
          commit('SET_TOKEN', data.info)
          resolve()
        }).catch(error => {
          // console.log('这里' + error)
          reject(error)
        })
      })
    },

    // 获取用户信息
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(data => {
          if (data.code === '501') {
            reject(data)
          }
          commit('SET_NAME', data.info.name)
          commit('SET_AVATAR', data.info.avatar)
          commit('SET_LOGIN', 'yes')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      commit('SET_TOKEN', '')
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        resolve()
      })
    }
  }
}

export default user
