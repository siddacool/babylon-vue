<template>
  <canvas ref="canvas" class="w-full h-screen"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import {
  Engine,
  Scene,
  FreeCamera,
  Vector3,
  HemisphericLight,
  Mesh,
} from '@babylonjs/core';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let engine: any = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createScene = (engine: any, canvas: any) => {
  const scene = new Scene(engine);
  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);

  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, false);

  const light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);

  const sphere = Mesh.CreateSphere(
    'sphere1',
    16,
    2,
    scene,
    false,
    Mesh.FRONTSIDE,
  );

  sphere.position.y = 1;

  // const ground = Mesh.CreateGround('ground1', 6, 6, 2, scene, false);

  return scene;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resize = (engine: any) => {
  engine.resize();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeGame = (canvas: any) => {
  engine = new Engine(canvas, true);

  const scene = createScene(engine, canvas);

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener('resize', () => resize(engine));
};

export default defineComponent({
  name: 'GameS2',
  setup() {
    const canvas = ref(null);

    onMounted(() => {
      makeGame(canvas.value);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', () => resize(engine));
      engine.dispose();
    });

    return {
      canvas,
    };
  },
});
</script>
