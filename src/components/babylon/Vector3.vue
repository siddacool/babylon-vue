<script lang="ts">
import { defineComponent } from 'vue';
import { Vector3 } from '@babylonjs/core';

export default defineComponent({
  name: 'Vector3',
  id: 'babylon__vector',
  cameraType: 'vector-3',
  core: Vector3,
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
