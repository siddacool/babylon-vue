<script lang="ts">
import { defineComponent } from 'vue';
import { HemisphericLight } from '@babylonjs/core';

export default defineComponent({
  name: 'HemisphericLight',
  id: 'babylon__light',
  variant: 'hemispheric-light',
  core: HemisphericLight,
  props: {
    name: {
      type: String,
      reuired: true,
    },
  },
});
</script>
