<script setup lang="ts">
import NavBar from '@/components/Navbar/NavBar.vue'
</script>

<template>
  <NavBar id="navbar"></NavBar>
  <RouterView />
</template>

<style scoped>
#navbar {
  z-index: 10;
}
</style>
