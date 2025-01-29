<template>
    <div class="about-me">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
    .about-me {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 40rem;

    flex-direction: column;

    padding: 3rem;

    border: 0.5rem solid var(--neon-pink);
    border-radius: 1rem;

    box-shadow: 0 0 0.5rem var(--neon-pink);

    margin-top: 3rem;
    margin-right: auto;
    margin-left: 5rem;

    animation: slide-up linear;
    animation-timeline: view();
    animation-range: entry 0% cover 25%;

    z-index: 0;
  }

  .about-me:hover {
    text-shadow: 0 0 1rem var(--neon-pink-less-opaque), 0 0 0.2rem whitesmoke;
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      scale: 0.5;
    }
    100% {
      opacity: 1;
      scale: 1;
    }
  }
</style>