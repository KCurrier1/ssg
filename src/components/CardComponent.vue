<template>
  <!-- This utilizes the bootstrap card classes with some slight adjustments for my style preferences -->
  <div class="card">
    <div class="card-body">
      <!-- This title is passed in via the component properties whereever its used
            all properties are conditional, meaning if nothing is passed in for that value, that 
            element of the component is simply not rendered -->
      <h5 class="card-title">{{ title }}</h5>
      <slot />
      <p class="card-text">{{ description }}</p>
      <!-- Note: not only is the text on the button passed in, the "path" property is bound
            to the router link "to" value using the shorthand for v-bind ":" -->
      <router-link :to="path" class="btn btn-primary">{{ buttonTitle }}</router-link>
    </div>
  </div>
</template>

<script>
// Exports the default information which includes 
// all property titles to be used when the component is called
export default {
  props: ["title", "description", "buttonTitle", "path"],
};
</script>

<style lang="scss" scoped>
// adjustments to the card and card body classes to display flexed,
// with consistent spacing and colors
.card {
  border: none;
  border-radius: 10px;
  flex: 1;
  gap: 20px;
  .card-body {
    padding: 15px 10px;
    color: #F2F2F2;
    border-radius: 10px;
    background-color: #a66bbf;
  }
}
</style>