<template>
  <AsyncComp />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue';
import LoadingScreen from '../../pages/LoadingScreen.vue';
import NotFound from '../../pages/NotFound.vue';

export default defineComponent({
  name: 'GamesLoader',
  props: {
    routerId: String,
  },
  components: {
    AsyncComp: defineAsyncComponent({
      loader: () => import('./Game.vue'),
      loadingComponent: LoadingScreen,
      errorComponent: NotFound,
      suspensible: false,
    }),
  },
});
</script>
