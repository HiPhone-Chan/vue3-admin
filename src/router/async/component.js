import Layout from 'layouts/MainLayout.vue';

export default {
  path: '/component-demo',
  component: Layout,
  meta: {
    title: 'Component',
    icon: 'component'
  },
  children: [
    {
      path: 'clipboard',
      component: () => import('pages/component-demo/clipboard.vue'),
      name: 'ClipboardDemo',
      meta: { title: 'Clipboard', icon: 'clipboard' }
    },
    {
      path: 'tinymce',
      component: () => import('pages/component-demo/tinymce.vue'),
      name: 'TinymceDemo',
      meta: { title: 'tinymce', icon: 'component' }
    },
    {
      path: 'json-editor',
      component: () => import('pages/component-demo/json-editor.vue'),
      name: 'JsonEditorDemo',
      meta: { title: 'json', icon: 'component' }
    },
    {
      path: 'excel',
      component: () => import('pages/component-demo/excel.vue'),
      name: 'ExcelDemo',
      meta: { title: 'excel', icon: 'excel' }
    }
  ]
};
