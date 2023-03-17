
import Layout from 'layouts/MainLayout.vue'
import c from 'pages/dynamic-menu/index.vue'
import { getNavigationTrees } from '@/api/navigation'

const dynamicModules = import.meta.globEager('pages/dynamic-menu/**.vue')

const pages = {}
Object.keys(dynamicModules).forEach(key => {
  pages[key.replace('../pages/', '')] = () => import(key)
})

function generateRoutes(component, tree) {
  const router = {
    path: tree.path,
    component: component,
    meta: {
      title: tree.title,
      icon: tree.icon
    }
  };

  if (tree?.children?.length) {
    const children = router.children ?? []
    for (const child of tree.children) {
      children.push(generateRoutes(pages[child.page], child))
    }
    router.children = children
  } else {
  }
  return router
}

export async function getRoutes() {
  const { data } = await getNavigationTrees();
  const routes = [];
  for (const navigation of data) {
    routes.push(generateRoutes(Layout, navigation));
  }
  return routes;
}
