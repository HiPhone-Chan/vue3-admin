import Layout from '@/layouts/MainLayout.vue'

export default [
  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/pages/clipboard/index.vue'),
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard', icon: 'clipboard' }
      }
    ]
  }
]
