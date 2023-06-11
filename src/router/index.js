import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import planning from '../views/planning.vue'
import contact from '../views/contact.vue'
import meteo from '../views/meteo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/planning',
      name: 'planning',
      component: planning
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/meteo',
      name: 'meteo',
      component: meteo
    }
  ]
})

export default router
