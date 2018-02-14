import Layout from '../../views/layout/Layout'

import register from '@/router/register'
import teacher from '@/router/teacher'
import form from '@/router/form'

export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/test',
    name: 'Test',
    children: [{
      path: 'test',
      component: () => import('@/views/test/index')
    }]
  },

  ...teacher,
  ...form,
  ...register
]

export const asyncRouterMap = []
