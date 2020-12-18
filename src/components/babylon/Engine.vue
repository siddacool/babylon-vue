<script lang="ts">
import { defineComponent } from 'vue';
import { Engine } from '@babylonjs/core';

export default defineComponent({
  name: 'Engine',
  id: 'babylon__engine',
  core: Engine,
});
</script>
