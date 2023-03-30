import Layout from 'layouts/MainLayout.vue';

export default {
  path: '/dynamic-menu',
  component: Layout,
  meta: {
    title: 'Dynamic Route',
    icon: 'nested'
  },
  children: [
    {
      path: 'child',
      component: () => import('pages/dynamic-menu/index.vue'),
      meta: { title: 'Dynamic Route', icon: 'nested' }
    }
  ]
};
