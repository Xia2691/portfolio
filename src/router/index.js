import { createRouter, createWebHistory } from 'vue-router'
import publicRoute from './publicRoute'

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes: [
    publicRoute,
    {
      name: 'Cv',
      path: '/cv',
      component: () => import('@/views/resume.vue'),
    },
  ],
})

export default router
