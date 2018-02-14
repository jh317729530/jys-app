import { constantRouterMap } from '@/router/src/routes'
import { getByAdminUserId } from '@/service'

const permission = {
  state: {
    permissions: [],
    routers: constantRouterMap,
    asyncRouters: []
  },
  mutations: {
    SET_PERMISSION: (state, permi) => {
      state.permissions = permi
    },
    ADD_ROUTERS: (state, routes) => {
      state.asyncRouters = routes
      state.routers = constantRouterMap.concat(routes)
    }
  },
  actions: {
    getPermission: ({ commit }) => {
      return new Promise((resolve, reject) => {
        getByAdminUserId().then(res => {
          if (res.status === 'true') {
            const data = []

            for (var item of res.info) {
              data.push(item.url)
            }
            commit('SET_PERMISSION', data)

            resolve(res)
          } else {
            reject(res.msg)
          }
        })
      })
    }
  }
}

export default permission
