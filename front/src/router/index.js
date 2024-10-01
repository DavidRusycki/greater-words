import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import WordCloud from '@/components/word-cloud/WordCloud.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: WordCloud
    }
  ]
})

export default router
