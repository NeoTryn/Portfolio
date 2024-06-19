<script setup lang="ts">
  import NavItem from './NavItem.vue'
</script>

<template>
  <ul class="navsublist">
    <NavItem class="navsubitem">
      <a class="navsublink" href="#">Home</a>
    </NavItem>
    <NavItem class="navsubitem">
      <a class="navsublink" href="#">Home</a>
    </NavItem>
    <NavItem class="navsubitem">
      <a class="navsublink" href="#">Home</a>
    </NavItem>
  </ul>
</template>

<style scoped>
.navsublist {
  list-style-type: none;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  gap: 1rem;
}
</style>