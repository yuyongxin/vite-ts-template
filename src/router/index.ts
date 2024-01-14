import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
    }
  },
  routes: [
    {
      path: '/login',
      component: async () => await import('@/views/login.vue'),
      name: 'login',
    },
    {
      path: '/',
      component: async () => await import('@/views/index.vue'),
      name: 'index',
    },
    {
      path: '/404',
      component: async () => await import('@/views/404.vue'),
      name: '404',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'Any',
    },
  ],
})
export default router
