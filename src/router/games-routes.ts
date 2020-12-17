import GameS1 from '../games/GameS1/Loader.vue';

let gamesRoutes = [
  {
    path: '/games/game-s1',
    name: 'game-s1',
    component: GameS1,
    meta: {
      formattedName: 'Game S1',
    },
  },
];

gamesRoutes = gamesRoutes.map((r) => ({ ...r, name: `game_route_${r.name}` }));

export default gamesRoutes;
