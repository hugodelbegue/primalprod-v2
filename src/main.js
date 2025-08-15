import './assets/scss/main.scss'
import api from './assets/api/data.json'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import infosBlock from '@/assets/js/infos'

import offerRequest from '@/assets/js/offers/offer-request'
import offerMaintenance from '@/assets/js/offers/offer-maintenance'
import offerSubscription from '@/assets/js/offers/offer-subscription'
import offerOne from '@/assets/js/offers/offer-basic'
import offerTwo from '@/assets/js/offers/offer-smart'

console.log("\nHello 👋\nRéalisé par PrimalProd.\n👉 https://primalprod.fr/\n ")

const app = createApp(App)

app.use(router)
app.config.globalProperties.$api = api
app.mixin(infosBlock)
app.mixin(offerRequest)
app.mixin(offerMaintenance)
app.mixin(offerSubscription)
app.mixin(offerOne)
app.mixin(offerTwo)

app.mount('#app')
