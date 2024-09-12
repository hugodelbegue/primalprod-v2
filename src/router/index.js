import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/prestations',
      name: 'services',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/realisations',
      name: 'gallery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/realisations/:project',
      name: 'project',
      component: () => import('../views/ProjectView.vue'),
      props: true
    },
    {
      path: '/a-propos',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FaqView.vue')
    }
  ]
})

export default router
