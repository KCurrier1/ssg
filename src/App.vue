<!-- This is basically the main view that swaps the rendered content via the router -->
<template>
  <div>
    <!-- This is a part of the view router that uses the links to render the correct content -->
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// This is basically the root styling for the app
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
