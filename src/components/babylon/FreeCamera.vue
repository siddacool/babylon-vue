<script lang="ts">
import { defineComponent } from 'vue';
import { FreeCamera } from '@babylonjs/core';

export default defineComponent({
  name: 'FreeCamera',
  id: 'babylon__camera',
  variant: 'free-camera',
  core: FreeCamera,
  props: {
    name: {
      type: String,
      reuired: true,
    },
  },
});
</script>
