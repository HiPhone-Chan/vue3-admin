import Layout from 'layouts/MainLayout.vue'

export default {
  path: '/nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  meta: {
    title: 'Nested Routes',
    icon: 'nested',
    hasRouterView: true
  },
  children: [
    {
      path: 'menu1',
      component: () => import('pages/nested-menu/menu1/index.vue'), // Parent router-view
      name: 'Menu1',
      meta: { title: 'Menu 1' },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: 'menu1-1',
          component: () => import('pages/nested-menu/menu1/menu1-1/index.vue'),
          name: 'Menu1-1',
          meta: { title: 'Menu 1-1' }
        },
        {
          path: 'menu1-2',
          component: () => import('pages/nested-menu/menu1/menu1-2/index.vue'),
          name: 'Menu1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: 'Menu 1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('pages/nested-menu/menu1/menu1-2/menu1-2-1/index.vue'),
              name: 'Menu1-2-1',
              meta: { title: 'Menu 1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import('pages/nested-menu/menu1/menu1-2/menu1-2-2/index.vue'),
              name: 'Menu1-2-2',
              meta: { title: 'Menu 1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('pages/nested-menu/menu1/menu1-3/index.vue'),
          name: 'Menu1-3',
          meta: { title: 'Menu 1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('pages/nested-menu/menu2/index.vue'),
      meta: { title: 'Menu 2' }
    }
  ]
}

export const priority = 1
