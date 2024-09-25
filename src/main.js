import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/index.css'
import App from './App.vue'
import i18n from './i18n'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).use(i18n).mount('#app')
