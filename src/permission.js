import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { Message } from 'element-ui'

const whiteList = ['/login'] // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (whiteList.indexOf(to.path) !== -1) {
    next()
    NProgress.done()
  } else {
    if (store.getters.token === '') {
      Message.error('请先登录')
      next({ path: '/login' })
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
