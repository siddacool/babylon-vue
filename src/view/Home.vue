<template>
  <div class="home bg-base-color">
    <div class="box mx-auto text-white p-8 pt-28">
      <h1 class="mb-16 text-5xl">Games</h1>
      <div class="md:grid gap-10 grid-cols-2 lg:grid-cols-3">
        <router-link
          v-for="route in gamesRoutes"
          :key="route.id"
          :to="`/games/${route.id}`"
          class="block"
        >
          <div
            class="flex flex-col h-40 border-2 border-blue-800 p-4 rounded mb-4 md:mb-0"
          >
            <div class="h-full mb-2 bg-blue-600"></div>
            <div class="h-10 text-sm">{{ route.name }}</div>
          </div>
        </router-link>
      </div>
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
