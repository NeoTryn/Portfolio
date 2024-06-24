<script setup lang="ts">
import NavItem from './NavItem.vue'
</script>

<template>
  <ul class="navsublist">
    <NavItem class="navsubitem">
      <i class="fa-solid fa-house navicon"></i>
      <RouterLink class="navsublink" to="/">Home</RouterLink>
    </NavItem>
    <NavItem class="navsubitem">
      <i class="fa-solid fa-address-card navicon"></i>
      <a class="navsublink" href="#">About Me</a>
    </NavItem>
    <NavItem class="navsubitem">
      <i class="fa-brands fa-vuejs navicon"></i>
      <a class="navsublink" href="#">Vue Tutorials</a>
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

.navsublink {
  text-decoration: none;
  margin-left: 0.25rem;
}

.navsubitem {
  border-radius: 2rem;
  padding: 1.25rem 2rem 1.25rem 2rem;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  font-size: 1.1rem;
}

.navicon {
  font-size: 1.1rem;
}

.navsubitem:hover {
  background-color: var(--brandcolor);

  .navsublink,
  .navicon {
    color: var(--white);
  }
}
</style>
