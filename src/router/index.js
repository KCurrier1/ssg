// This is the router to all pages
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllStagesViewVue from '@/views/AllStagesView.vue'
import CatStageViewVue from '@/views/CatStageView.vue'
import BearStageViewVue from '@/views/BearStageView.vue'
import DogStageViewVue from '@/views/DogStageView.vue'

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
  // cat game stage
  {
    path: '/cat',
    name: 'cat',
    component: CatStageViewVue
  },
  // bear game stage
  {
    path: '/bear',
    name: 'bear',
    component: BearStageViewVue
  },
  // dog game stage
  {
    path: '/dog',
    name: 'dog',
    component: DogStageViewVue
  }
]

// This is the foundation for the vue router and allows for proper back and forth page navigation
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
