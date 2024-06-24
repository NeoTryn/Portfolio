<script setup lang="ts">
import NavList from './NavList.vue'
</script>

<template>
  <nav class="navbar">
    <NavList />
  </nav>
</template>

<style scoped>
:root {
  --transition-time: 0.5s;
}

.navbar {
  top: 0;
  left: 0;

  height: 10%;
  width: 100%;

  position: fixed;

  background-color: var(--white);
  color: var(--brandcolor);

  transition-property: height;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}

.navbar:hover {
  height: 20%;
}
</style>
