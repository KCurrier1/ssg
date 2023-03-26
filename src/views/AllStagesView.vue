<template>
  <common-layout>
    <h1>Please Select your Stage:</h1>
    <!-- Contains the Card options in a flexed row -->
    <div class="card-container">
      <!-- Dog Card with route to difficulty -->
      <!-- All Cards have properties for Title, Description, Button Title, and the route path
            Along with a slot for any additional components like images -->
      <!-- Cat Card with route to difficulty -->
      <card-component
        title="Cat"
        description="A Kitty Cat"
        buttonTitle="Select Stage"
        path="/cat"
      >
        <!-- Cat component -->
        <cat-component />
      </card-component>
      <!-- Bear Card with route to difficulty -->
      <card-component
        title="Bear"
        description="A Brown Bear"
        buttonTitle="Select Stage"
        path="/bear"
      >
        <!-- Bear component -->
        <bear-component />
      </card-component>
      <card-component
        title="Dog"
        description="A Doggo"
        buttonTitle="Select Stage"
        path="/dog"
      >
        <!-- Dog component -->
        <div class="dog-drawing-holder"><dog-component/></div>
      </card-component>
    </div>
  </common-layout>
</template>

<script>
// Import the components and layout
import CardComponent from "../components/CardComponent.vue";
import CommonLayout from "../layouts/CommonLayout.vue";
import CatComponent from "@/components/CatComponent.vue";
import BearComponent from "@/components/BearComponent.vue";
import DogComponent from '@/components/DogComponent.vue';
// Export them to be called with route
export default {
  components: { CommonLayout, CardComponent, CatComponent, BearComponent, DogComponent },
};
</script>

<style lang="scss" scoped>
// Page title
h1 {
  margin: 15px 0 0;
}

// Flexes the card components evenly across the page with responsitivity
.card-container {
  display: flex;
  flex-direction: row;
  margin: 50px;
  gap: 20px;
}

.dog-drawing-holder{
  width: 200px;
  height: 150px;
  position: relative;
  top: -15%;
  left: -50%;
  z-index: 1;
  @media (max-width: 775px) {
    top: -10% !important;
    left: -190% !important;
  }
}
</style>
