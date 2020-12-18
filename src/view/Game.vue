<template>
  <Suspense>
    <template #default>
      <component v-bind:is="Game" />
    </template>
    <template #fallback>
      <LoadingScreen />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import LoadingScreen from '../pages/LoadingScreen.vue';

const gameImporter = (id: string | string[]) => {
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

export default defineComponent({
  name: 'HomeView',
  components: {
    LoadingScreen,
  },
  setup() {
    const route = useRoute();
    const id = route.params.id;

    const Game = defineAsyncComponent(() => gameImporter(id));

    return {
      Game,
    };
  },
});
</script>

<style lang="scss">
.home {
  min-height: inherit;
}

.box {
  @media (min-width: 768px) {
    max-width: 900px;
  }
}
</style>
