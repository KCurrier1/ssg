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
        buttonTitle="Select Stage"
        path="/cat"
      >
        <!-- Cat component -->
        <img src="@/assets/Cat.png" alt="A Kitty Cat">
      </card-component>
      <!-- Bear Card with route to difficulty -->
      <card-component
        title="Bear"
        buttonTitle="Select Stage"
        path="/bear"
      >
        <!-- Bear component -->
        <img src="@/assets/Bear.png" alt="A Brown Bear">
      </card-component>
      <card-component
        title="Dog"
        buttonTitle="Select Stage"
        path="/dog"
      >
        <!-- Dog component -->
        <img src="@/assets/Dog.png" alt="A Doggo">
      </card-component>
    </div>
  </common-layout>
</template>

<script>
// Import the components and layout
import CardComponent from "../components/CardComponent.vue";
import CommonLayout from "../layouts/CommonLayout.vue";
// Export them to be called with route
export default {
  components: { CommonLayout, CardComponent, },
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

//styles the character images
img{
  width: 150px;
  border-radius: 12px;
  margin: 10px;
}

</style>
