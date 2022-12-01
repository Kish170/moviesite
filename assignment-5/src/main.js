import { createApp } from 'vue'
import './style.css'
import App from './views/homePage.vue'
import router from './router/index.js';

createApp(App).use(router).mount('#app')
