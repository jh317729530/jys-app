import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './src/routes'

Vue.use(Router)

// import Layout from '../views/layout/Layout'

// export const constantRouterMap = [
//   { path: '/login', component: () => import('@/views/login/index'), hidden: true },

//   {
//     path: '/',
//     component: Layout,
//     redirect: '/test',
//     name: 'Test',
//     children: [{
//       path: 'test',
//       component: () => import('@/views/test/index')
//     }]
//   },

//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//         component: () => import('@/views/form/index'),
//         meta: { title: 'Form', icon: 'form' }
//       }
//     ]
//   },

//   {
//     path: '/signup',
//     hidden: true,
//     component: () => import('@/views/signup/index')
//   },

//   {
//     path: '/teacher',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: '教师列表',
//         component: () => import('@/views/teacher/index'),
//         meta: { title: '教师列表', icon: 'form' }
//       }
//     ]
//   },

//   { path: '*', redirect: '/404', hidden: true }
// ]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap,
  mode: 'hash'
})
