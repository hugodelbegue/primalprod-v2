import './assets/scss/main.scss'
import api from './assets/api/data.json'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import offerVariable from '@/assets/js/offers'


const app = createApp(App)

app.use(router)
app.config.globalProperties.$api = api
app.mixin(offerVariable)

app.mount('#app')
