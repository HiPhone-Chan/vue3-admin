import { defineStore } from 'pinia';
import {
  asyncRoutes,
  constantRoutes,
  dynamicRoutes,
  getDynamicRoutes
} from '@/router/routes';

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  const routeRoles = route?.meta?.roles;
  if (routeRoles && routeRoles.length) {
    return roles.some((role) => routeRoles.includes(role));
  } else {
    return true;
  }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = [];

  routes.forEach((route) => {
    const tmp = { ...route };
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles);
      }
      res.push(tmp);
    }
  });

  return res;
}

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    routes: [],
    addRoutes: []
  }),
  actions: {
    async generateRoutes(roles) {
      let accessedRoutes;
      if (roles.includes('ROLE_ADMIN')) {
        accessedRoutes = asyncRoutes || [];
        accessedRoutes = accessedRoutes.concat(dynamicRoutes);
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles);
        const dynamicRoutes = await getDynamicRoutes();
        accessedRoutes = accessedRoutes.concat(dynamicRoutes);
      }
      this.addRoutes = accessedRoutes;
      this.routes = constantRoutes.concat(accessedRoutes);
      return accessedRoutes;
    }
  }
});
