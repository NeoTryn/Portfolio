<script setup lang="ts">
  import NavItem from './NavItem.vue'
  import NavSubList from './NavSubList.vue'
</script>

<template>
  <ul class="navlist">
    <NavItem class="navitem name">
      <i class="fa-solid fa-caret-down dropdown"></i>
      <a class="navlink" href="#">NeoTrynDev</a>
    </NavItem>
    <NavItem class="navitem">
      <NavSubList/>
    </NavItem>
    <NavItem class="navitem">
      <i class="fa-solid fa-moon"></i>
    </NavItem>
  </ul>
</template>

<style scoped>
.navlist {
  top: 0;
  left: 0;

  position: relative;

  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;

  list-style-type: none;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
}

.navlink {
  text-decoration: none;
}

.name {
  margin-left: 0.75rem;
}

.navlink {
  margin-left: 0.25rem;
}

.dropdown {
  -webkit-transition: -webkit-transform 0.3s ease-out;
  -moz-transition: -moz-transform 0.3s ease-out;
  -o-transition: -o-transform 0.3s ease-out;
  -ms-transition: -ms-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
}

.navlist:hover {
  .dropdown {
    transform: rotate(180deg);
  }
}
</style>