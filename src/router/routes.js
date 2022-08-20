import Layout from '@/layouts/MainLayout.vue'

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
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('pages/home/index.vue'),
        name: 'home',
        meta: { title: 'home', icon: 'home', roles: [] }
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
        meta: { title: 'profile', icon: 'user', roles: [], noCache: true }
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    hidden: true,
    component: () => import('pages/error-page/404.vue')
  }
]

export { asyncRoutes } from './asyncRoutes'
export const constantRoutes = routes
export default routes
