// eslint-disable-next-line @typescript-eslint/no-explicit-any
const gameImporter = (id: string | string[]): any => {
  switch (id) {
    case 'game-s1': {
      return import('../games/GameS1.vue');
    }
    case 'game-s2': {
      return import('../games/GameS2.vue');
    }
    default: {
      return import('../pages/NotFound.vue');
    }
  }
};

export default gameImporter;
