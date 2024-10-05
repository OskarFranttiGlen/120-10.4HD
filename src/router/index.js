import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Pages/Home.vue'
import About from '../components/Pages/About.vue'
import Booking from '../components/Pages/Booking.vue'
import Dining from '../components/Pages/services/Dining.vue'
import Spa from '../components/Pages/services/Spa.vue'
import StandardRoom from '../components/Pages/StandardRoom.vue'
import Suites from '../components/Pages/Suites.vue'
import Events from '../components/Pages/services/Events.vue'
import Contact from '../components/Pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/booking', name: 'Booking', component: Booking },
  { path: '/dining', name: 'Dining', component: Dining },
  { path: '/spa', name: 'Spa', component: Spa },
  { path: '/standard-room', name: 'StandardRoom', component: StandardRoom },
  { path: '/suites', name: 'Suites', component: Suites },
  { path: '/events', name: 'Events', component: Events },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router