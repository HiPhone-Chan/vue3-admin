import Layout from 'layouts/MainLayout.vue';

export default {
  path: '/icons',
  component: Layout,
  meta: {
    title: 'Icons',
    icon: 'icons'
  },
  children: [
    {
      path: 'icons',
      component: () => import('pages/icons/index.vue'),
      name: 'Icons',
      meta: { title: 'icons', icon: 'icon' }
    }
  ]
};
