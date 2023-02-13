// This is the router to all pages
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllStagesViewVue from '@/views/AllStagesView.vue'
import DifficultySelectVue from '@/views/DifficultySelect.vue'
import GameStageVue from '@/views/GameStage.vue'

const routes = [
  // landing page
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // stage select
  // Note: I'm still learning post methods for these routes to properly render the correct
  // stage and difficulty upon game stage loading
  {
    path: '/allstages',
    name: 'allstages',
    component: AllStagesViewVue
  },
  // difficulty select
  {
    path: '/difficulty',
    name: 'difficulty',
    component: DifficultySelectVue
  },
  // game stage
  {
    path: '/game',
    name: 'game',
    component: GameStageVue
  }
]

// This is the foundation for the vue router and allows for proper back and forth page navigation
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
