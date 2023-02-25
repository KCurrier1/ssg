<template>
  <common-layout>
    <h1>Please Select your Stage:</h1>
    <!-- Contains the Card options in a flexed row -->
    <div class="card-container">
      <!-- Dog Card with route to difficulty -->
      <!-- All Cards have properties for Title, Description, Button Title, and the route path
            Along with a slot for any additional components like images -->
      <card-component
        title="Dog"
        description="A Doggo"
        buttonTitle="Select Stage"
        path="/difficulty"
      >
      <!-- Dog image -->
        <img src="@/assets/Dog.png" />
      </card-component>
      <!-- Cat Card with route to difficulty -->
      <card-component
        title="Cat"
        description="A Kitty Cat"
        buttonTitle="Select Stage"
        path="/difficulty"
      >
      <!-- Cat component -->
        <cat-component/>
      </card-component>
      <!-- Bear Card with route to difficulty -->
      <card-component
        title="Bear"
        description="A Brown Bear"
        buttonTitle="Select Stage"
        path="/difficulty"
      >
        <img src="@/assets/Bear.png" />
      </card-component>
    </div>
  </common-layout>
</template>

<script>
// Import the components and layout
import CardComponent from "../components/CardComponent.vue";
import CommonLayout from "../layouts/CommonLayout.vue";
import CatComponent from '@/components/CatComponent.vue';
// Export them to be called with route
export default {
  components: { CommonLayout, CardComponent, CatComponent },
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
  // Sets the dimensions of all card images
  img {
    height: 150px;
    width: 150px;
  }
}
</style>
