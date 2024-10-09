import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/HomePage.vue'
import About from '@/pages/AboutPage.vue'
import Resume from '@/pages/ResumePage.vue'
import Service from '@/pages/ServicePage.vue'
import Contact from '@/pages/ContactPage.vue'
const routes = [
    { path: '/', component: Home },
    { path: '/services', component: Service },
    { path: '/about', component: About },
    { path: '/resume', component: Resume },
    { path: '/contact', component: Contact },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router