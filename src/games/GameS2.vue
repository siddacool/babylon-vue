<template>
  <BabylonCanvas>
    <Engine><Scene>jj</Scene></Engine>
  </BabylonCanvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BabylonCanvas from '../components/babylon/BabylonCanvas.vue';
import Engine from '../components/babylon/Engine.vue';
import Scene from '../components/babylon/Scene.vue';

export default defineComponent({
  name: 'GameS2',
  components: {
    BabylonCanvas,
    Engine,
    Scene,
  },
});
</script>
