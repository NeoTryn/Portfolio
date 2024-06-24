import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../components/Views/HomeView.vue'
import GameView from '../components/Views/GameView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/game', component: GameView }
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes
})
