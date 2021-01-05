<template>
  <canvas ref="canvas" class="game-canvas"></canvas>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref, onMounted } from 'vue';

import {
  getComponentByIdFromContext,
  getComponentByIdFromChildren,
} from '../helpers/get-components';

import {
  BABYLON_COMPONENT_ENGINE,
  BABYLON_COMPONENT_SCENE,
} from '../helpers/constants';

import makeGame from '../helpers/make-game';

export default defineComponent({
  name: 'GameCanvas',
  setup(props, context) {
    let engine = null;
    const canvas = ref(null);
    const babylonEngine = getComponentByIdFromContext(
      context,
      BABYLON_COMPONENT_ENGINE,
    );

    onMounted(() => {
      if (!babylonEngine) {
        console.error('Babylon Canvas', 'Engine is missing');
        return;
      }

      engine = new babylonEngine.type.plug(canvas.value, true);

      const scene = getComponentByIdFromChildren(
        babylonEngine,
        BABYLON_COMPONENT_SCENE,
      );

      makeGame(engine, canvas.value, scene);
    });

    return {
      canvas,
    };
  },
});
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 100vh;
}
</style>
