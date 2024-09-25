const publicRoute = {
  path: '/',
  meta: {
    requiresAuth: false,
  },
  component: () => import('@/layouts/MainLayout.vue'),
  children: [
    {
      name: 'Body',
      path: '',
      component: () => import('@/views/Body.vue'),
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error/404Page.vue'),
    },
  ],
}

export default publicRoute
