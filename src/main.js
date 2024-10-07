import { createApp } from 'vue'
import App from './App.vue'

// Import AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init()

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Resume from '@/pages/ResumePage.vue'
import Service from '@/pages/ServicePage.vue'
import Portfolio from '@/pages/PortfolioPage.vue'
import ContactPage from './pages/ContactPage.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/resume', component: Resume },
    { path: '/portfolio', component: Portfolio},
    { path: '/service', component: Service },
    { path: '/contact', component: ContactPage }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
