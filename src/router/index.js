import { createRouter, createWebHistory } from "vue-router"
import Index from '@/views/index.vue'
import Components from '@/views/components.vue'
import Typography from '@/views/typography.vue'
import Button from '@/views/button.vue'
import NotFound from '@/views/notFound.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  },
  {
    path: '/typography',
    name: 'Typography',
    component: Typography
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router