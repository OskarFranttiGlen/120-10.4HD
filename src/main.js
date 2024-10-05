import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles/global.css'

import Navigation from './components/Navigation/Navigation.vue'
import Footer from './components/Navigation/Footer.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.component('Navigation', Navigation)
app.component('Footer', Footer)

app.mount('#app')