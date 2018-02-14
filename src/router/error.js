// import { _import } from '@/config/env'

// const notFound = _import('error/404')

export default [
  { path: '*',
    redirect: '/404',
    component: () => import('@/views/error/404'),
    hidden: true
  }
]
