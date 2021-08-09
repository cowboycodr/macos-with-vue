<template>
  <router-view />
</template>

<style>
html, body {
  padding: 0px;
  margin: 0px;
}

body {
  background-image: url('./assets/images/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>