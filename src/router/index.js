import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import { isMobileDevice } from '@/assets/js/utils'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 0,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      if (isMobileDevice()) {
        return { top: 0 }
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: true
    },
    {
      path: '/prestations',
      name: 'services',
      component: () => import('../views/ServiceView.vue')
    },
    {
      path: '/prestations/offre-default',
      name: 'offer',
      component: () => import('../views/OfferView.vue'),
      props: true
    },
    {
      path: '/prestations/offre-basic',
      name: 'basic',
      component: () => import('../views/BasicView.vue'),
      props: true
    },
    {
      path: '/prestations/offre-smart',
      name: 'smart',
      component: () => import('../views/SmartView.vue'),
      props: true
    },
    {
      path: '/prestations/offre-sur-devis',
      name: 'request',
      component: () => import('../views/RequestView.vue'),
      props: true
    },
    {
      path: '/prestations/maintenance',
      name: 'maintenance',
      component: () => import('../views/MaintenanceView.vue'),
      props: true
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
    },
    {
      path: '/mentions',
      name: 'mention',
      component: () => import('../views/MentionView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
