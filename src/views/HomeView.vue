<template>
  <div>
    <common-layout>
      <h1>Welcome to SASS-y Styling Games</h1>
      <img
        class="logo"
        alt="SASS-y Styling Games logo"
        src="@/assets/SSG-logo.png"
      />
      <h2>
        This is a brief description of this application and all the things this
        application does. Woow much function, many interesting. :)
      </h2>
      <button class="btn btn-primary">Select Your Stage</button>
    </common-layout>
  </div>
</template>

<script>
import CommonLayout from "../layouts/CommonLayout.vue";
export default {
  components: { CommonLayout },
  name: "HomeView",
};
</script>

<style scoped lang="scss">
.logo {
  height: 450px;
  width: 650px;
}

h1 {
  font-size: 64px;
  color: #731062;
}

h2 {
  word-wrap: wrap;
  font-size: 32px;
  max-width: 1000px;
  margin: 10px auto;
  color: #731062;
}
</style>