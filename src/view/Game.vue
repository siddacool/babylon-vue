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
import gameImporter from '../utils/game-importer';

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
