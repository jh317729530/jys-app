import { login } from '../../api/login'

// import { login } from '@/api/login'
// import { setToken } from '@/utils/auth'

const user = {
  state: {
    token: '',
    name: ''
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
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
          commit('SET_TOKEN', data.info)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      commit('SET_TOKEN', '')
    }
  }
}

export default user
