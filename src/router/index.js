import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import planning from '../views/planning.vue'
import contacts from '../views/contact.vue'
import meteo from '../views/meteo.vue'
import contactForm from '../components/contacts/contactForm.vue'
import contactCard from '../components/contacts/contactCard.vue'

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
      path: '/contacts',
      name: 'contacts',
      component: contacts
    },
    {
      path: '/contacts/add_contact',
      name: 'add_contact',
      component: contactForm
    },
    {
      path: '/contacts/contact_view',
      name: 'contactCard',
      component: contactCard
    },
    {
      path: '/meteo',
      name: 'meteo',
      component: meteo
    }
  ]
})

export default router
