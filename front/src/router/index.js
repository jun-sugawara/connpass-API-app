import { createRouter, createWebHistory } from 'vue-router'
import searchEvent from  '../views/searchEvent'

const routes = [
  {
    path: '/',
    name: 'searchEvent',
    component: searchEvent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
