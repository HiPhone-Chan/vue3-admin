import Layout from '@/layouts/MainLayout.vue'

export default {
  path: '/docs',
  component: Layout,
  redirect: 'noRedirect',
  meta: {
    title: 'docs',
    icon: 'user',
    roles: ['ROLE_ADMIN']
  },
  children: [
    {
      path: '/api-docs',
      component: () => import('pages/docs/api-docs.vue'),
      name: 'api-docs',
      meta: { title: 'api-docs', noCache: true }
    }
  ]
}

export const priority = 11;
