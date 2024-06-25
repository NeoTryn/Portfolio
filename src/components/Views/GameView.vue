<script setup lang="ts">
import {
  AmbientLight,
  BoxGeometry, Group,
  Mesh,
  MeshPhongMaterial, type Object3DEventMap,
  PointLight,
  WebGLRenderer
} from 'three'

import { onMounted, ref } from 'vue'
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

import { scene } from '@/game/scene'
import { camera } from '@/game/camera'

let posX = 0;
let posY = 0;
let posZ = 0;

const canvas = ref<HTMLCanvasElement | null>(null)

camera.lookAt(scene.position);

console.log(scene.position);

const loader = new GLTFLoader();

const light = new PointLight(0xffffff, 1000, 0);
scene.add(light)

onMounted(() => {
  const renderer = new WebGLRenderer({
    canvas: canvas.value as unknown as HTMLCanvasElement,
    antialias: true
  })

  renderer.setSize(window.innerWidth, window.innerHeight)

  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshPhongMaterial({
    color: 0xffffff
  })
  const cube = new Mesh(geometry, material)

  const light2 = new AmbientLight(0xffffff, 100);
  scene.add(light2)

  cube.rotation.z = Math.PI / 4

  let model : Group<Object3DEventMap>;

  loader.load(
    '/models/monkey.glb',
    gltf => {
      gltf.scene.position.z = -1;
      gltf.scene.position.x = 5;
      scene.add(gltf.scene)

      console.log("loaded");
      model = gltf.scene;
    },
    undefined,
    error => {
      console.error(error)
    }
  )

  renderer.setAnimationLoop( render )

  function render() {
    update();
    renderer.render(scene, camera);
  }

  function update() {
    if (model != undefined) {
      model.position.x = posX;
      model.position.y = posY;
      model.position.z = posZ;
    }
    else {
      console.error("undefined");
    }
  }
})

function keyboardControls(e : any) {
  if (e.key == "a") {
    posX -= 0.05;
  }
  else if (e.key == "d") {
    posX += 0.05;
  }
  else if (e.key == "w") {
    posZ -= 0.05;
  }
  else if (e.key == "s") {
    posZ += 0.05;
  }
}
</script>

<template>
  <div class="container" tabindex="0" @keydown="keyboardControls($event)">
  <canvas ref="canvas" ></canvas>
  </div>
</template>

<style scoped>
canvas {
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;

  position: fixed;
}

.container {
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  position: absolute;
}
</style>