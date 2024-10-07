// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
  en: {
    home: 'Home',
    courses: 'Courses',
    services: 'Services',
    aboutDec:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All Molestiae odio earum non qui cumque provident voluptates, repellendus exercitationem, possimus at iste corrupti officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam ab omnis quasi expedita."
  },
  khm: {
    home: 'ទំព័រដើម',
    courses: 'មុខវិជ្ជា',
    services: 'សេវាកម្ម',
    aboutDec: "មានបំរែបំរួលជាច្រើននៃវគ្គនៃ Lorem Ipsum ដែលអាចប្រើបាន ប៉ុន្តែភាគច្រើនបានទទួលរងការកែប្រែក្នុងទម្រង់ខ្លះ ដោយការលេងសើច ឬពាក្យចៃដន្យដែលមើលទៅមិនគួរឱ្យជឿសូម្បីតែបន្តិច។ ប្រសិនបើអ្នកនឹងប្រើអត្ថបទរបស់ Lorem Ipsum អ្នកត្រូវតែប្រាកដថាមិនមានអ្វីដែលគួរឱ្យអាម៉ាស់លាក់នៅកណ្តាលអត្ថបទនោះទេ។ រាល់ការរំខានរបស់អ្នកដែលផ្តល់ភាពរីករាយ មិនអាចបំបាត់ដោយការហាត់ប្រាណនោះទេ ប៉ុន្តែវានឹងត្រូវបានដោះស្រាយដោយការបដិសេធការិយាល័យពុករលួយដែលយើងដឹកនាំអ្នកដទៃ។ សម្រាប់ពួកយើង នរណាម្នាក់មកពីទាំងអស់ហាក់ដូចជាសមរម្យ។"
  }
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
})

export default i18n