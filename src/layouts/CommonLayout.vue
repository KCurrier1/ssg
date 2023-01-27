<template>
  <div class="DefaultLayout">
    <nav-component/>
    <slot />
  </div>
</template>

<script>
import NavComponent from '../components/NavComponent.vue';
export default {
  components: { NavComponent },};
</script>

<style lang="scss" scoped>
</style>