import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routes/index.js'
import pinia from '@/store/index.js'
import i18n from './i18n'
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles

const app = createApp(App)
AOS.init();  // Initialize AOS
app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')

//////// custome /////////

/**
 * Header toggle
 */
const headerToggleBtn = document.querySelector('.header-toggle');

function headerToggle() {
  document.querySelector('#header').classList.toggle('header-show');
  headerToggleBtn.classList.toggle('bi-list');
  headerToggleBtn.classList.toggle('bi-x');
}
headerToggleBtn.addEventListener('click', headerToggle);

/**
* Hide mobile nav on same-page/hash links
*/
document.querySelectorAll('#navmenu a').forEach(navmenu => {
  navmenu.addEventListener('click', () => {
    if (document.querySelector('.header-show')) {
      headerToggle();
    }
  });

});

/**
* Toggle mobile nav dropdowns
*/
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function(e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});

/**
* Preloader
*/
const preloader = document.querySelector('#preloader');
if (preloader) {
 window.addEventListener('load', () => {
   preloader.remove();
 });
}
