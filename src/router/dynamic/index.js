import { getNavigationTrees } from '@/api/navigation';

const routeModules = import.meta.globEager('./**.js');
const allRoutes = [];

Object.keys(routeModules).forEach((key) => {
  allRoutes.push(routeModules[key].default);
});

function generateRoutes(routes, navigationTrees) {
  const newRoutes = [];

  if (routes?.length && navigationTrees?.length) {
    for (const navigationTree of navigationTrees) {
      for (const route of routes) {
        if (route.path === navigationTree.path) {
          const newRoute = {
            ...route
          };

          newRoute.meta ??= {};
          if (navigationTree.title) {
            newRoute.meta.title = navigationTree.title;
          }
          if (navigationTree.icon) {
            newRoute.meta.icon = navigationTree.icon;
          }

          const genRoutes = generateRoutes(
            route.children,
            navigationTree.children
          );
          if (genRoutes?.length) {
            newRoute.children = genRoutes;
          }
          newRoutes.push(newRoute);
        }
      }
    }
  }

  return newRoutes;
}

export async function getRoutes() {
  const { data } = await getNavigationTrees();
  const routes = generateRoutes(allRoutes, data);
  console.log('newRoutes', routes);
  return routes;
}

// modules entry
/** when your routing map is too long, you can split it into small modules **/
export default allRoutes;
