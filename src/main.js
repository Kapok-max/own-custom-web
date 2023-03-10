import { createApp } from 'vue'
import 'tailwindcss/tailwind.css'
import router from '@/routers/index'
import '@/style.css'
import App from '@/App.vue'

const app = createApp(App);
app.use(router);
app.mount('#app')
