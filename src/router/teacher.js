// import { _import } from '@/config/env'
import Layout from '../views/layout/Layout'

// const teacherList = _import('teacher/index')

export default [{
  name: '教师管理',
  path: '/teacher',
  component: Layout,
  meta: { title: '夫', icon: 'form' },
  ajaxPermissions: ['/teacher/list'],
  children: [
    {
      name: '教师列表',
      path: 'index',
      component: () => import('@/views/teacher/index'),
      ajaxPermissions: '/teacher/list',
      meta: { title: '教师列表', icon: 'form' }
    },
    {
      name: '假装家',
      path: 'index',
      ajaxPermissions: '/teacher/nali',
      component: () => import('@/views/teacher/index'),
      meta: { title: 'nali', icon: 'form' }
    }
  ]
}]

