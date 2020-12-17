const gamesRoutes = [
  {
    id: 'game-s1',
    name: 'Game S1',
    component: import('../games/GameS1.vue'),
  },
  {
    id: 'game-s2',
    name: 'Game S2',
    component: import('../games/GameS2.vue'),
  },
];

export default gamesRoutes;
