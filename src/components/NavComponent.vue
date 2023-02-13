<template>
  <!-- Takes up the entire width of page at the very top -->
  <div class="nav">
    <!-- Keeps the logo in the left corner -->
    <div class="logoContainer">
      <img
        class="logo"
        alt="SASS-y Styling Games logo"
        src="@/assets/SSG-logo.png"
      />
    </div>
    <!-- Keeps the nav buttons to the right of the logo -->
    <div class="navContainer">
      <nav>
        <!-- Routes to HomeView.vue -->
        <router-link to="/">Home</router-link>
        <!-- Routes to AllStagesView.vue -->
        <router-link to="/allstages">All Stages</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
// Export the default to be later used in layouts
export default {
  name: "NavComponent",
};
</script>

<style scoped lang="scss">
// Sets the styling for the size and background of the nav component
.nav {
  width: 100%;
  height: 100px;
  background-color: #731062;
  // Sets the logo container size and position with responsitivity
  .logoContainer {
    width: 10%;
    display: inline-block;
    vertical-align: middle;
    // Sets the logo sizing within the container
    .logo {
      height: 75px;
      width: 100px;
      margin: 10px;
    }
  }
  // Sets the styling for the parent of the navigation links for spacing and positions
  .navContainer {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    padding: 10px 20px;
    width: 90%;
    // adds padding inside the container of the links for readability
    nav {
      padding: 20px;
      // Styling the links to look like buttons
      a {
        border-radius: 10px;
        font-weight: bold;
        color: #f2f2f2;
        text-decoration: none;
        padding: 15px;
        font-size: 24px;
        &.router-link-exact-active {
          color: #a66bbf;
        }
        // Darkens the background color dynamically during hover
        &:hover {
          background-color: darken($color: #731062, $amount: 2);
        }
      }
    }
  }
}
</style>