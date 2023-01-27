<template>
  <common-layout>
    <h1>Please Select your Stage:</h1>
    <div class="card-container">
      <card-component
        title="Cat"
        description="A Kitty Cat"
        buttonTitle="Select Stage"
      >
        <img src="@/assets/Cat.png" />
      </card-component>
      <card-component
        title="Cat"
        description="A Kitty Cat"
        buttonTitle="Select Stage"
      >
        <img src="@/assets/Cat.png" />
      </card-component>
      <card-component
        title="Cat"
        description="A Kitty Cat"
        buttonTitle="Select Stage"
      >
        <img src="@/assets/Cat.png" />
      </card-component>
    </div>
  </common-layout>
</template>

<script>
import CardComponent from "../components/CardComponent.vue";
import CommonLayout from "../layouts/CommonLayout.vue";
export default {
  components: { CommonLayout, CardComponent },
};
</script>

<style lang="scss" scoped>
h1{
  margin: 15px 0 0;
}
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 50px;
}
</style>
