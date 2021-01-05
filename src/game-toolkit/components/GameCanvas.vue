<template>
  <canvas
    ref="canvas"
    class="game-canvas"
    style="width: 100%; height: 100vh"
  ></canvas>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

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
    let engine: any = null;
    const canvas = ref(null);
    const babylonEngine = getComponentByIdFromContext(
      context,
      BABYLON_COMPONENT_ENGINE,
    );

    const resize = (engine: any) => {
      engine.resize();
    };

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

      window.addEventListener('resize', () => resize(engine));
    });

    onUnmounted(() => {
      engine.dispose();

      window.removeEventListener('resize', () => resize(engine));
    });

    return {
      canvas,
    };
  },
});
</script>
