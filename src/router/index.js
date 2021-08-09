import { createRouter, createWebHashHistory } from 'vue-router'
import desktop from '../views/Desktop.vue'

const routes = [
  {
    path: '/',
    alias: '/desktop',
    component: desktop
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
