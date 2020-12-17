<template>
  <div class="home bg-base-color">
    <div
      class="box mx-auto md:grid gap-4 grid-cols-2 lg:grid-cols-3 text-white"
    >
      <router-link
        v-for="route in gamesRoutes"
        :key="route.id"
        :to="`/games/${route.id}`"
      >
        {{ route.name }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gamesRoutes from '../router/games-routes';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return {
      gamesRoutes,
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
