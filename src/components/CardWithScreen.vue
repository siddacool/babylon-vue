<template>
  <div
    class="flex flex-col h-40 border-2 border-blue-800 p-4 rounded mb-4 md:mb-0"
  >
    <div class="h-full mb-2 bg-blue-600"></div>
    <div class="h-10 text-sm">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardWithScreen',
  props: {
    name: String,
  },
});
</script>

<style lang="scss"></style>
