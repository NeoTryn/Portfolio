<script setup lang="ts">
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'
import { onMounted, ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

scene.add(camera)

camera.position.z = 5

onMounted(() => {
  const renderer = new WebGLRenderer({
    canvas: canvas.value as unknown as HTMLCanvasElement,
    antialias: true
  })

  renderer.setSize(window.innerWidth, window.innerHeight)

  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshBasicMaterial({
    color: getComputedStyle(document.documentElement).getPropertyValue('--brandcolor')
  })
  const cube = new Mesh(geometry, material)

  cube.rotation.z = Math.PI / 4

  scene.add(cube)

  renderer.render(scene, camera)
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
