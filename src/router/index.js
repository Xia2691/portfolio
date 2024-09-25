import { createRouter, createWebHistory } from 'vue-router'
import publicRoute from './publicRoute'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [publicRoute],
})

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = false
//   const isAdmin = false

//   if (to.meta.requiresAuth && !isAuthenticated) {
//     next({ name: '404' })
//   } else if (to.meta.requiresAdmin && (!isAuthenticated || !isAdmin)) {
//     next({ name: '404' })
//   } else {
//     next()
//   }
// })

export default router
