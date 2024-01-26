import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
     component: () => import('../views/main/index.vue')
    },
    {
      path: '/product',
      name: 'product',
     component: () => import('../views/product/index.vue')
    }
  ]
})

export default router
