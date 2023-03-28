import Layout from '@/layouts/MainLayout.vue';

export default {
  path: '/management',
  component: Layout,
  // redirect: 'noredirect',
  meta: {
    title: 'management',
    icon: 'user',
    roles: ['ROLE_ADMIN']
  },
  children: [
    {
      path: 'user',
      component: () => import('pages/management/user/index.vue'),
      name: 'user',
      meta: {
        title: 'user-management',
        icon: 'people',
        noCache: true
      }
    },
    {
      path: 'configuration',
      redirect: 'index',
      meta: {
        title: 'configuration-management',
        icon: 'documentation',
        noCache: true
      },
      children: [
        {
          path: 'index',
          component: () => import('pages/management/configuration/index.vue'),
          name: 'configuration-management',
          meta: {
            title: 'configuration-prop-management',
            icon: 'documentation',
            noCache: true
          }
        },
        {
          path: 'env',
          component: () => import('pages/management/configuration/env.vue'),
          name: 'configuration-env-management',
          meta: {
            title: 'configuration-env-management',
            icon: 'documentation',
            noCache: true
          }
        }
      ]
    },
    {
      path: 'logs',
      meta: {
        title: 'logs-management',
        icon: 'documentation',
        noCache: true
      },
      children: [
        {
          path: 'index',
          component: () => import('pages/management/logs/index.vue'),
          name: 'logs-management',
          meta: {
            title: 'logs-management',
            icon: 'documentation',
            noCache: true
          }
        },
        {
          path: 'operation-log',
          component: () => import('pages/management/logs/operation-log.vue'),
          name: 'operation-log-management',
          meta: {
            title: 'operation-log',
            icon: 'documentation',
            noCache: true
          }
        }
      ]
    },
    {
      path: 'health',
      component: () => import('pages/management/health/index.vue'),
      name: 'health-management',
      meta: {
        title: 'health-management',
        icon: 'documentation',
        noCache: true
      }
    },
    {
      path: 'metrics',
      meta: {
        title: 'metrics',
        icon: 'documentation',
        noCache: true
      },
      children: [
        {
          path: 'index',
          component: () => import('pages/management/metrics/index.vue'),
          name: 'metrics',
          meta: {
            title: 'metrics',
            icon: 'documentation',
            noCache: true
          }
        },
        {
          path: 'threaddump',
          component: () => import('pages/management/metrics/thread-dump.vue'),
          name: 'threaddump-management',
          meta: {
            title: 'threaddump-management',
            icon: 'documentation',
            noCache: true
          }
        }
      ]
    }
  ]
};

export const priority = 10;
