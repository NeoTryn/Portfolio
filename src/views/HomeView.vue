<script lang="ts" setup>
import AboutMeBox from '@/components/AboutMeBox.vue';

import { onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';

let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let torus: THREE.Mesh;

const init = () => {
  // Create scene
  scene = new THREE.Scene();

  // Create camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.setZ(30);

  // Create renderer
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg') as HTMLCanvasElement,
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create geometry and material
  const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
  const material = new THREE.MeshStandardMaterial({ color: 0xFF6347});

  // Create mesh
  torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 0, 0);

  scene.add(pointLight);

  // Start animation
  animate();
};

const animate = () => {
  requestAnimationFrame(animate);

  // Rotate torus
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
};

onMounted(() => {
  init();
});

onUnmounted(() => {
  // Clean up resources
  renderer.dispose();
});
</script>

<template>
  <main>
    <h1 class="heading">Hi, my name is Felix</h1>
    <div class="about-me-div">
    <AboutMeBox id="about-me-general">
      <h1>About me</h1>
      <h3>
        I am a full-stack developer with a passion for creating web applications
        that are both functional and visually appealing. I have experience with
        a variety of technologies, including HTML, CSS, JavaScript, Vue.js,
        Node.js, Express, and MongoDB. I am always looking to learn new things
        and improve my skills.
      </h3>
    </AboutMeBox>
    <img src="../img/image.png" alt="Dexter" id="dexter"/>
  </div>
  <div class="my-skills-div">
    <AboutMeBox class="my-skills">
        <h1>My skills</h1>
        <h3>
            I have experience with a variety of technologies, including HTML, CSS,
            JavaScript, Vue.js, Node.js, Express, and MongoDB. I am always looking
            to learn new things and improve my skills.
          </h3>
      </AboutMeBox>
    </div>
    <div class="my-projects-div">
      <AboutMeBox class="my-projects">
        <h1>My projects</h1>
        <h3>
          I have worked on a variety of projects, including web applications,
          mobile apps, and games. Some of my projects are available on my GitHub
          page. I am always looking for new projects to work on and new challenges
          to overcome.
        </h3>
      </AboutMeBox>
    </div>
  </main>
  <canvas id="bg"></canvas>
</template>

<style lang="css" scoped>
  main {
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  main:last-child {
    margin-bottom: 25rem;
  }

  #bg {
    position: fixed;
    top: 0;
    left: 0;

    z-index: -1;

    background-color: rgb(10, 10, 10);
  }

  #dexter {
    animation: slide-up-mod linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;

    width: 30rem;
    height: 30rem;

    margin-left: 10rem;

    transform: translateY(2rem);
  }

  .heading {
    margin-top: 22.5rem;
  }

  #about-me-general {
    animation: slide-up-mod linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }

  .about-me-div, .my-skills-div, .my-projects-div {
    margin-top: 50rem;
  }

  .about-me-div {
    margin-right: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10rem;
  }

  .my-skills {
    border-color: var(--neon-cyan);
    box-shadow: 0 0 0.5rem var(--neon-cyan);

    margin-right: 5rem;
  }

  .my-skills-div {
    margin-left: auto;
  }

  .my-skills:hover {
    text-shadow: 0 0 1rem var(--neon-cyan-less-opaque), 0 0 0.2rem whitesmoke;
  }

  .my-projects {
    border-color: var(--neon-green);
    box-shadow: 0 0 0.5rem var(--neon-green);
  }

  .my-projects-div {
    margin-right: auto;
    margin-bottom: 15rem;
  }

  .my-projects:hover {
    text-shadow: 0 0 1rem var(--neon-green-less-opaque), 0 0 0.2rem whitesmoke;
  }

  h1 {
    animation: slide-up linear;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;  
  }

  h3 {
    animation: slide-up linear;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;  
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

  @keyframes slide-up-mod {
    0% {
      transform: translateY(50rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
