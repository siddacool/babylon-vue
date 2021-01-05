<script lang="ts">
import { defineComponent } from 'vue';
import { FreeCamera } from '@babylonjs/core';
import { BABYLON_COMPONENT_CAMERA } from '../../helpers/constants';

export default defineComponent({
  name: BABYLON_COMPONENT_CAMERA,
  plug: FreeCamera,
  props: {
    name: {
      type: String,
      reuired: true,
    },
  },
});
</script>
