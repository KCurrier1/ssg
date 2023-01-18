<template>
  <div class="nav">
    <div class="logoContainer">
      <img class="logo" alt="SASS-y Styling Games logo" src="@/assets/SSG-logo.png" />
    </div>
    <div class="navContainer">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped lang="scss">
.logo {
  height: 75px;
  width: 100px;
  padding: 10px;
}

.logoContainer{
  width: 5%;
  display: inline-block;
  vertical-align: middle;
}

.nav {
  width: 100%;
  height: 100px;
  background-color: #731062;
}

.navContainer{
  display: inline-block;
  text-align: left;
  vertical-align: middle;
  padding: 10px 20px;
  width: 90%;
}

nav {
  a {
    margin: 0 0 30px;
    font-weight: bold;
    color: #F2F2F2;
    text-decoration: none;
    padding: 15px;
    font-size: 24px;

    &.router-link-exact-active {
      color: #A66BBF;
    }
  }
}
</style>