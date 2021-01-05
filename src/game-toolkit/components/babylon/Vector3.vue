<script lang="ts">
import { defineComponent } from 'vue';
import { Vector3 } from '@babylonjs/core';
import { BABYLON_COMPONENT_VECTOR } from '../../helpers/constants';

export default defineComponent({
  name: BABYLON_COMPONENT_VECTOR,
  plug: Vector3,
  props: {
    x: {
      type: Number,
      reuired: true,
    },
    y: {
      type: Number,
      reuired: true,
    },
    z: {
      type: Number,
      reuired: true,
    },
  },
});
</script>
