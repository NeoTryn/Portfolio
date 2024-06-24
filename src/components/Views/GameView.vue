<script setup lang="ts">
import {
  AmbientLight,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial, MeshLambertMaterial, MeshPhongMaterial,
  PerspectiveCamera, PointLight,
  Scene,
  WebGLRenderer
} from 'three'
import { onMounted, ref } from 'vue'
import { GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

const canvas = ref<HTMLCanvasElement | null>(null)

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

scene.add(camera)

camera.position.z = 5

const loader = new GLTFLoader();

const light = new PointLight(0xff0000, 100, 100);
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

  const light = new AmbientLight(0xffffff, 100);
  scene.add(light)

  scene.add(cube)

  cube.rotation.z = Math.PI / 4

  loader.load(
    '/models/monkey.glb',
    gltf => {
      scene.add(gltf.scene)
      console.log("added");
    },
    undefined,
    undefined
  )

  renderer.render(scene, camera);

  function render() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
})
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style scoped>
canvas {
  top: 10%;
  left: 0;

  height: 90vh;
  width: 100vw;

  position: fixed;
}
</style>