import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { makeServer } from './mirage/server'
import { createPinia } from 'pinia'


if(import.meta.env.DEV){
  makeServer()
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
