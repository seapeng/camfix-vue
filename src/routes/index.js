import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Resume from '@/pages/ResumePage.vue'
import Service from '@/pages/ServicePage.vue'
import Portfolio from '@/pages/PortfolioPage.vue'
import Contact from '@/pages/ContactPage.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/resume', component: Resume },
    { path: '/portfolio', component: Portfolio},
    { path: '/service', component: Service },
    { path: '/contact', component: Contact },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router