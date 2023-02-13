<template>
  <!-- This is a layout - meaning all elements here will display on all pages that utilize this layout
        Hence, the simplicity -->
  <div>
    <!-- This nav component was the main rational for this layout, but as things get more complex,
          other global elements can be added here -->
    <nav-component/>
    <!-- This slot tells Vue that this section will be replaced by the content of the page using this layout -->
    <slot />
  </div>
</template>

<script>
// Import the nav component to be used in the layout
import NavComponent from '../components/NavComponent.vue';
// Export the nav component with the layout where it can render properly wherever the layout is used
export default {
  components: { NavComponent },};
</script>

<!-- Note: since the majority of my styling is based on components, this layout did not require its own styling -->