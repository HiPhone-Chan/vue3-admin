import constantRoutes from './constant';

export { default as asyncRoutes } from './async';
export { constantRoutes };
export { default as dynamicRoutes } from './dynamic';
export { getRoutes as getDynamicRoutes } from './dynamic';
export default constantRoutes;
