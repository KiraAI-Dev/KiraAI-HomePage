import { createApp } from 'vue'
import App from './App.vue'
import { i18n, applyLocaleMeta } from './i18n/index.js'
import './style.css'

createApp(App).use(i18n).mount('#app')
applyLocaleMeta()
