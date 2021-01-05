<script lang="ts">
import { defineComponent } from 'vue';
import { Scene } from '@babylonjs/core';
import { BABYLON_COMPONENT_SCENE } from '../../helpers/constants';

export default defineComponent({
  name: BABYLON_COMPONENT_SCENE,
  plug: Scene,
});
</script>
