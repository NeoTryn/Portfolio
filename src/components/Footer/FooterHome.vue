<script setup lang="ts">

import FooterList from '@/components/Footer/FooterList.vue'
</script>

<template>
  <div class="footer">
    <h2>Follow NeoTrynDev on Social Media</h2>
    <FooterList></FooterList>
  </div>
</template>

<style scoped>
.footer {
  top: 90%;
  left: 0;

  width: 100%;
  height: 10%;

  position: absolute;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  background-color: var(--white);
}
</style>