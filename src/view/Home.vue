<template>
  <div class="home bg-base-color">
    <div
      class="box mx-auto md:grid gap-4 grid-cols-2 lg:grid-cols-3 text-white"
    >
      <router-link
        v-for="route in gameRoutes"
        :key="route.name"
        :to="route.path"
      >
        {{ route.meta.formattedName }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getGameRoutes = (routes: any) =>
  routes.filter((r: { name: string }) => r.name.startsWith('game_route_'));

export default defineComponent({
  name: 'HomeView',
  setup() {
    const router = useRouter();
    const gameRoutes = getGameRoutes(router.getRoutes());

    console.log(gameRoutes);

    return {
      gameRoutes,
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
