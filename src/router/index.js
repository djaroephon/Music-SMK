import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Detail from '../views/SongDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/song/:id',
      name: 'song',
      component: Detail,
    },
  ],
})

export default router
