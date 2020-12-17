import { createWebHashHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/Home.vue'),
  },
  {
    path: '/games',
    redirect: '/',
  },
  {
    path: '/games/:id',
    name: 'games',
    component: () => import('../view/Game.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
