// src/i18n.js
import { createI18n } from 'vue-i18n'

// Define messages for each locale
const messages = {
  en: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    resume: 'Resume',
    contact: 'Contact',
    iam: "I'm",
    uidesign: "UI/UX Design",
  },
  khm: {
    home: 'ទំព័រដើម',
    services: 'សេវាកម្ម',
    about: 'អំពីយើង',
    resume: 'ប្រវត្តិ',
    contact: 'ទំនាក់ទំនង',
    iam: "ខ្ញុំជា",
    uidesign: "អ្នករចនាគេហទំព័រ UI/UX",
  }
}

// Create i18n instance with options
const i18n = createI18n({
  locale: 'khm', // set locale
  fallbackLocale: 'khm', // set fallback locale
  messages, // set locale messages
})

export default i18n