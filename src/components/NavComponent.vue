<template>
  <div class="nav">
    <div class="logoContainer">
      <img
        class="logo"
        alt="SASS-y Styling Games logo"
        src="@/assets/SSG-logo.png"
      />
    </div>
    <div class="navContainer">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/allstages">All Stages</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent",
};
</script>

<style scoped lang="scss">
.nav {
  width: 100%;
  height: 100px;
  background-color: #731062;
  .logoContainer {
    width: 5%;
    display: inline-block;
    vertical-align: middle;
    .logo {
      height: 75px;
      width: 100px;
      margin: 10px;
    }
  }
  .navContainer {
    display: inline-block;
    text-align: left;
    vertical-align: middle;
    padding: 10px 20px;
    width: 90%;
    nav {
      padding: 20px;
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
        &:hover {
          background-color: darken($color: #731062, $amount: 2);
        }
      }
    }
  }
}
</style>