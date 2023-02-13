<!-- All vue components require a template tag, 
  and in it must have a single parent container -->
<template>
  <!-- Parent container -->
  <div>
    <!-- Call the Layout -->
    <common-layout>
      <!-- Title -->
      <h1>Welcome!</h1>
      <!-- Logo -->
      <img
        class="logo"
        alt="SASS-y Styling Games logo"
        src="@/assets/SSG-logo.png"
      />
      <!-- Description -->
      <h2>
        Please enjoy a fun learning tool to help learn SASS! This is meant to help you learn while taking your mind off the fact you are studying, just playing some fun and adorable coding games!
      </h2>
      <!-- Route Button to the stage selection stage -->
      <router-link to="/allstages" class="btn btn-primary">Select Your Stage</router-link>
    </common-layout>
  </div>
</template>

<script>
// Import layout to use
import CommonLayout from "../layouts/CommonLayout.vue";
// Export default to be used in router
export default {
  components: { CommonLayout },
  name: "HomeView",
};
</script>

<!-- This, along with the majority of the views and components
have scoped styling, as the styling is only needed on this page/section -->
<style scoped lang="scss">
// Set the body logo size
.logo {
  height: 450px;
  width: 650px;
}

// Title Font Styling
h1 {
  font-size: 64px;
  padding: 10px 25px;
  color: #731062;
}

// Description font styling
h2 {
  word-wrap: wrap;
  font-size: 32px;
  max-width: 1000px;
  margin: 10px auto;
  color: #731062;
}
</style>