import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
     component: () => import('../views/main/Index.vue')
    },
    {
      path: '/products',
      name: 'products',
     component: () => import('../views/product/productIndex.vue')
    }
  ]
})

export default router
