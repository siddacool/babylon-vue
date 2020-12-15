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
  // Create a basic BJS Scene object
  var scene = new Scene(engine);
  // Create a FreeCamera, and set its position to {x: 0, y: 5, z: -10}
  var camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
  // Target the camera to scene origin
  camera.setTarget(Vector3.Zero());
  // Attach the camera to the canvas
  camera.attachControl(canvas, false);
  // Create a basic light, aiming 0, 1, 0 - meaning, to the sky
  var light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);
  // Create a built-in "sphere" shape; its constructor takes 6 params: name, segment, diameter, scene, updatable, sideOrientation
  var sphere = Mesh.CreateSphere(
    'sphere1',
    16,
    2,
    scene,
    false,
    Mesh.FRONTSIDE,
  );
  // Move the sphere upward 1/2 of its height
  sphere.position.y = 1;
  // Create a built-in "ground" shape; its constructor takes 6 params : name, width, height, subdivision, scene, updatable
  var ground = Mesh.CreateGround('ground1', 6, 6, 2, scene, false);
  // Return the created scene
  return scene;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const resize = (engine: any) => {
  engine.resize();
};

export default defineComponent({
  name: 'HomeView',
  setup() {
    const canvas = ref(null);

    onMounted(() => {
      engine = new Engine(canvas.value, true);

      const scene = createScene(engine, canvas.value);

      engine.runRenderLoop(() => {
        scene.render();
      });

      window.addEventListener('resize', () => resize(engine));
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

<style lang="scss">
.home {
  min-height: inherit;
}
</style>
