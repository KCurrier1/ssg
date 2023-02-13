<template>
  <common-layout>
    <!-- Title -->
    <h1>Please Select your Difficulty:</h1>
    <!-- Beginner card with route to GameStage.vue -->
    <!-- All cards have properties for Title, Button Title, and Route path -->
    <div class="card-container">
      <card-component
        title="Beginner"
        buttonTitle="Select this difficulty"
        path="/game"
      >
      <!-- Contains the stars, flexed and centered so they are resposive and evenly spaced -->
        <div class="starContainer">
          <star-component />
        </div>
      </card-component>
      <card-component
        title="Intermediate"
        buttonTitle="Select this difficulty"
        path="/game"
      >
        <div class="starContainer">
          <star-component />
          <star-component />
        </div>
      </card-component>
      <card-component
        title="Expert"
        buttonTitle="Select this difficulty"
        path="/game"
      >
        <div class="starContainer">
          <star-component />
          <star-component />
          <star-component />
        </div>
      </card-component>
    </div>
  </common-layout>
</template>

<script>
// Import used components and layout
import StarComponent from "@/components/StarComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import CommonLayout from "../layouts/CommonLayout.vue";
export default {
  components: { CommonLayout, CardComponent, StarComponent },
};
</script>

<style lang="scss" scoped>
// Page title
h1 {
  margin: 15px 0 0;
}

// Evenly spaces the cards with flex responsitivity
.card-container {
  display: flex;
  flex-direction: row;
  margin: 50px;
  gap: 20px;
  // Evenly spaces the stars, centers them, and makes them responsive
  .starContainer {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px 0;
  }
}
</style>
