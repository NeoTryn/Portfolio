import { OrthographicCamera } from 'three'
import { aspect, D } from '@/game/mainThree'
import { scene } from '@/game/scene'

export const camera : OrthographicCamera = new OrthographicCamera(-D*aspect, D*aspect, D, -D, 1, 2000)
camera.lookAt(scene.position);

console.log(scene.position);

camera.position.set(10, 10, 10);

scene.add(camera);