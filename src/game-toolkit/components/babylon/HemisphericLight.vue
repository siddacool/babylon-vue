<script lang="ts">
import { defineComponent } from 'vue';
import { HemisphericLight } from '@babylonjs/core';
import { BABYLON_COMPONENT_LIGHT } from '../../helpers/constants';

export default defineComponent({
  name: BABYLON_COMPONENT_LIGHT,
  plug: HemisphericLight,
  props: {
    name: {
      type: String,
      reuired: true,
    },
  },
});
</script>
