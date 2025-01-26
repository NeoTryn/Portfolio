<template>
  <main>
    <div id="about-me">
      <h1>About Me</h1>
      <h3>
        I am a full-stack developer with a passion for creating web applications
        that are both functional and visually appealing. I have experience with
        a variety of technologies, including HTML, CSS, JavaScript, Vue.js,
        Node.js, Express, and MongoDB. I am always looking to learn new things
        and improve my skills.
      </h3>
    </div>
    <div id="about-me">
      <h1>About Me</h1>
      <h3>
        I am a full-stack developer with a passion for creating web applications
        that are both functional and visually appealing. I have experience with
        a variety of technologies, including HTML, CSS, JavaScript, Vue.js,
        Node.js, Express, and MongoDB. I am always looking to learn new things
        and improve my skills.
      </h3>
    </div>
    <div id="about-me">
      <h1>About Me</h1>
      <h3>
        I am a full-stack developer with a passion for creating web applications
        that are both functional and visually appealing. I have experience with
        a variety of technologies, including HTML, CSS, JavaScript, Vue.js,
        Node.js, Express, and MongoDB. I am always looking to learn new things
        and improve my skills.
      </h3>
    </div>
  </main>
</template>

<style lang="css" scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  #about-me {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 40rem;

    flex-direction: column;

    padding: 3rem;

    border: 0.5rem solid var(--neon-pink);
    border-radius: 1rem;

    box-shadow: 0rem 0 0.5rem var(--neon-pink);

    margin-top: 3rem;

    animation: slide-up linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;

    z-index: 0;
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
