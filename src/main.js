import { createApp } from 'vue'
import './assets/style.css'
import '@/assets/index.css'
import '@/assets/font/iconfont.css'
import App from './App.vue'
import router from "@/router/index.js";
createApp(App)
    .use(router)
    .mount('#app')
