import './assets/scss/main.scss'
import api from './assets/api/data.json'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import infosBlock from '@/assets/js/infos'

import offerOne from '@/assets/js/offers/offer-one'
import offerTwo from '@/assets/js/offers/offer-two'
import offerThree from '@/assets/js/offers/offer-three'
import offerFour from '@/assets/js/offers/offer-four'

console.log("\nHello 👋\nRéalisé par PrimalProd.\n👉 https://primalprod.fr/\n ")

const app = createApp(App)

app.use(router)
app.config.globalProperties.$api = api
app.mixin(infosBlock)
app.mixin(offerOne)
app.mixin(offerTwo)
app.mixin(offerThree)
app.mixin(offerFour)

app.mount('#app')
