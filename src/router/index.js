import { createRouter, createWebHistory } from 'vue-router'
import publicRoute from './publicRoute'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [publicRoute],
})

export default router
