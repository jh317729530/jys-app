// import { _import } from '@/config/env'
import Layout from '../views/layout/Layout'

// const form = _import('form/index')

export default [
  {
    name: '表单测试',
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  }
]
