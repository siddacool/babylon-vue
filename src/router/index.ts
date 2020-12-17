import { createWebHashHistory, createRouter } from 'vue-router';

import gamesRoutes from './games-routes';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/Home.vue'),
  },
  {
    path: '/games',
    name: 'games-home',
    component: () => import('../view/Home.vue'),
  },
  ...gamesRoutes,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
