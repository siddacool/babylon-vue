<template>
  <router-view />
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style lang="scss">
html {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  min-height: 100vh;
}

#app {
  min-height: inherit;
}
</style>
