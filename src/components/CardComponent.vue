<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <slot />
      <p class="card-text">{{ description }}</p>
      <a href="#" class="btn btn-primary">{{ buttonTitle }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "buttonTitle"],
};
</script>

<style lang="scss" scoped>
.card {
  border: none;
  border-radius: 10px;
  width: 500px;
  .card-body {
    padding: 15px 10px;
    color: #F2F2F2;
    border-radius: 10px;
    background-color: #a66bbf;
    width: 500px;
  }
}
</style>