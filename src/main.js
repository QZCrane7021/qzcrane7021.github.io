import { createApp } from 'vue'
import './styles/base.css'
import App from './App.vue'
import { i18n } from './locales'

createApp(App).use(i18n).mount('#app')
