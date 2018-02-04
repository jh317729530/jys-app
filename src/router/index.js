import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },

  {
    path: '/',
    redirect: '/test',
    name: 'Test',
    hidden: true,
    children: [{
      path: 'test',
      component: () => import('@/views/test/index')
    }]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
