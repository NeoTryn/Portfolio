<script setup lang="ts"></script>

<template>
  <div class="container">
    <RouterLink id="link" to="/game">Explore my skills!</RouterLink>
  </div>
</template>

<style scoped>
.container {
  top: 10%;
  left: 0;

  width: 100%;
  height: 80%;

  position: absolute;

  display: flex;

  justify-content: center;
  align-items: center;
}

#link {
  color: var(--brandcolor);

  text-decoration: none;

  padding: 1.25rem 2rem 1.25rem 2rem;

  border-radius: 2rem;

  transition:
    color 0.3s ease,
    background-color 0.3s ease;
}

#link:hover {
  color: var(--white);
  background-color: var(--brandcolor);
}
</style>
