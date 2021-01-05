<template>
  <GameCanvas>
    <Engine>
      <Scene>
        <FreeCamera name="camera1">
          <Vector3 :x="0" :y="5" :z="10" />
        </FreeCamera>
        <FreeCamera name="camera2">
          <Vector3 :x="0" :y="5" :z="10" />
        </FreeCamera>
        <HemisphericLight name="light1">
          <Vector3 :x="0" :y="1" :z="0" />
        </HemisphericLight>
        <MeshSphere name="sp1" :y="1" />
      </Scene>
    </Engine>
  </GameCanvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GameCanvas from '../game-toolkit/components/GameCanvas.vue';
import Engine from '../game-toolkit/components/babylon/Engine.vue';
import Scene from '../game-toolkit/components/babylon/Scene.vue';
import FreeCamera from '../game-toolkit/components/babylon/FreeCamera.vue';
import Vector3 from '../game-toolkit/components/babylon/Vector3.vue';
import HemisphericLight from '../game-toolkit/components/babylon/HemisphericLight.vue';
import MeshSphere from '../game-toolkit/components/babylon/MeshSphere.vue';

export default defineComponent({
  name: 'GameS3',
  components: {
    GameCanvas,
    Engine,
    Scene,
    FreeCamera,
    Vector3,
    HemisphericLight,
    MeshSphere,
  },
});
</script>
