/* Layout */
import Layout from '@/layouts/index.vue'

const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('pages/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/login/index.vue'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('pages/login/auth-redirect.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('pages/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('pages/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('pages/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('pages/profile/index.vue'),
        name: 'Profile',
        meta: { title: '个人中心', icon: 'user', noCache: true }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export { asyncRoutes } from './modules/asyncRoutes'
export const constantRoutes = routes
export default routes
