<script lang="ts">
import { defineComponent } from 'vue';
import { Engine } from '@babylonjs/core';
import { BABYLON_COMPONENT_ENGINE } from '../../helpers/constants';

export default defineComponent({
  name: BABYLON_COMPONENT_ENGINE,
  plug: Engine,
});
</script>
