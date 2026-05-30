import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects/sporyx',
      name: 'sporyx',
      component: () => import('@/views/projects/SporyxView.vue')
    },
    {
      path: '/projects/brawl-chess',
      name: 'brawl-chess',
      component: () => import('@/views/projects/BrawlChessView.vue')
    },
    {
      path: '/projects/brawl-chess-v2',
      name: 'brawl-chess-v2',
      component: () => import('@/views/projects/BrawlChessV2View.vue')
    },
    {
      path: '/projects/dependency-analyzer',
      name: 'dependency-analyzer',
      component: () => import('@/views/projects/DependencyAnalyzerView.vue')
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 80, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
