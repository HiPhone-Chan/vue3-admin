import Layout from 'layouts/MainLayout.vue'
import { getNavigationTrees } from '@/api/navigation'

const dynamicModules = import.meta.globEager('pages/dynamic-menu/**.vue')

const pages = {}
Object.keys(dynamicModules).forEach((key) => {
  console.log(key)
  const pageKey = key.replace('../pages/dynamic-menu/', '')
  pages[pageKey] = () => Promise.resolve(dynamicModules[key])
})

function generateRoutes(component, tree) {
  const route = {
    path: tree.path,
    component: component,
    meta: {
      title: tree.title,
      icon: tree.icon
    }
  }

  if (tree?.children?.length) {
    const children = route.children ?? []
    for (const child of tree.children) {
      children.push(generateRoutes(pages[child.page], child))
    }
    route.children = children
  } else {
  }
  return route
}

export async function getRoutes() {
  const { data } = await getNavigationTrees()
  const routes = []
  for (const navigation of data) {
    routes.push(generateRoutes(Layout, navigation))
  }
  return routes
}
