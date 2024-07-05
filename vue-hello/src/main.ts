import { createApp } from 'vue'
import App from './App.vue'
import HeaderPin from './components/HeaderPin.vue'
import Template1 from './components/Template01.vue'

const app = createApp(App)
app.component('HeaderPin', HeaderPin)
app.component('Template1', Template1)
app.mount('#app')
