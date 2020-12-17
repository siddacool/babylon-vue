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
import gamesRoutes from '../router/games-routes';

export default defineComponent({
  name: 'HomeView',
  components: {
    LoadingScreen,
  },
  setup() {
    const route = useRoute();
    const selectGame = gamesRoutes.find((r) => route.params.id === r.id);

    const Game = defineAsyncComponent(() => {
      let importer = import('../pages/NotFound.vue');

      if (selectGame && selectGame.id) {
        importer = selectGame.component;
      }

      return importer;
    });

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
