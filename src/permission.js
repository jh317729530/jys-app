import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { Message } from 'element-ui'

const whiteList = ['/login', '/signup'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) !== -1) {
    next()
    NProgress.done()
  } else {
    if (!store.getters.token) {
      Message.error('请先登录')
      next({ path: '/login' })
    } else {
      // 判断当前用户是否已拉取完user_info信息
      if (store.getters.getUserInfoed === 'no') {
        store.commit('SET_PERMISSION', '')

        store.dispatch('getPermission').then(() => {
          // 动态添加路由

          store.dispatch('getUserInfo').then(res => {
            next({ ...to })
          }).catch(err => {
            Message.error(err)
          })
        })
      }
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
