<template>
  <BabylonCanvas>
    <Engine>
      <Scene>
        <FreeCamera name="camera1">
          <Vector3 :x="0" :y="5" :z="10" />
        </FreeCamera>
        <HemisphericLight name="light1">
          <Vector3 :x="0" :y="1" :z="0" />
        </HemisphericLight>
        <MeshSphere name="sp1" :y="1" />
      </Scene>
    </Engine>
  </BabylonCanvas>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BabylonCanvas from '../components/babylon/BabylonCanvas.vue';
import Engine from '../components/babylon/Engine.vue';
import Scene from '../components/babylon/Scene.vue';
import FreeCamera from '../components/babylon/FreeCamera.vue';
import Vector3 from '../components/babylon/Vector3.vue';
import HemisphericLight from '../components/babylon/HemisphericLight.vue';
import MeshSphere from '../components/babylon/MeshSphere.vue';

export default defineComponent({
  name: 'GameS2',
  components: {
    BabylonCanvas,
    Engine,
    Scene,
    FreeCamera,
    Vector3,
    HemisphericLight,
    MeshSphere,
  },
});
</script>
