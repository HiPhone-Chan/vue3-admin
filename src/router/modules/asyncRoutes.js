/* Layout */
import Layout from '@/layouts/index.vue'
import managementRouter from './management'

export const asyncRoutes = [

  /** when your routing map is too long, you can split it into small modules **/
  managementRouter,
  // docRouter,

  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    hidden: true,
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('pages/error-page/401.vue'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('pages/error-page/404.vue'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/HiPhone-Chan/vue-admin',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  }
]
