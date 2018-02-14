// import { _import } from '@/config/env'
import Layout from '../views/layout/Layout'

// const teacherList = _import('teacher/index')

export default [{
  name: '教师管理',
  path: '/teacher',
  component: Layout,
  children: [
    {
      name: '教师列表',
      path: 'index',
      component: () => import('@/views/teacher/index'),
      meta: { title: '教师列表', icon: 'form' }
    }
  ]
}]

