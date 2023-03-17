import Layout from 'layouts/MainLayout.vue'

export default {
  path: '/charts',
  component: Layout,
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'line',
      component: () => import('pages/charts/line.vue'),
      name: 'LineChart',
      meta: { title: 'Line Chart', icon: 'clipboard' }
    }
  ]
}
