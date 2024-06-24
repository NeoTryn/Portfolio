<script setup lang="ts">

</script>

<template>
  <ul class="footerlist">
    <li class="footeritem">
      <a target="_blank" href="https://instagram.com/felix_._.e">
        <i class="fa-brands fa-square-instagram"></i>
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/felix-eidler-256495314/">
        <i class="fa-brands fa-linkedin"></i>
      </a>
    </li>
  </ul>
</template>

<style scoped>
  .footerlist {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  i {
    color: var(--brandcolor);

    font-size: 2.5rem;

    transition: color 0.3s ease;

    padding: 0.5rem;
  }

  i:hover {
    color: var(--brandcolorshadedarkmid)
  }
</style>