// import { _import } from '@/config/env'

// const login = _import('login/index')

export default [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  }
]
