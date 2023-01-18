<template>
    <div>
        <NavComponent></NavComponent>
        <h1>Welcome to SASS-y Styling Games</h1>
        <img class="logo" alt="SASS-y Styling Games logo" src="@/assets/SSG-logo.png"/>
        <h2>This is a brief description of this application and all the things this application does. Woow much function, many interesting. :)</h2>
    </div>
</template>

<script>

export default {
  name: 'HomeView',
}
</script>

<style scoped lang="scss">
.logo{
    height: 600px;
    width: 750px;
}

h1{
    font-size: 72px;
    color: #731062;
}
h2{
    word-wrap: wrap;
    font-size: 48px;
    max-width: 750px;
    margin: 10px auto;
    color: #731062;
}
</style>