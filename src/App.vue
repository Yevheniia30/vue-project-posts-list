<template>
  <nav-bar></nav-bar>

  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Navbar from "./components/UI/Navbar.vue";
export default {
  // components: { Navbar },
};
</script>

<style>
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.app {
  padding: 20px;
}
</style>
