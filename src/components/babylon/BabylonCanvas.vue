<template>
  <canvas ref="canvas"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { logError } from '../../utils/logger';
import makeGame from '../../utils/game-toolkit/make-game';
import getEngineFromSlot from '../../utils/game-toolkit/get-engine-from-slot';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let engine: any = null;

export default defineComponent({
  name: 'BabylonCanvas',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setup(props, context: any) {
    const canvas = ref(null);
    const engineComponent = getEngineFromSlot(context);

    onMounted(() => {
      if (!engineComponent) {
        logError('Babylon Canvas', 'Engine is missing');
        return;
      }

      engine = new engineComponent.type.core(canvas.value, true);

      makeGame(engine, engineComponent, canvas.value);
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
