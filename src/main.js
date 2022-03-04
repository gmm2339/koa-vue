import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import Vuex from './vuex/index.js'
import router from './router/index.js'
import 'element-plus/dist/index.css'
import axios from './axios/index.js'



const app = createApp(App)

app.use(Vuex)
app.use(ElementPlus)
app.use(router)
app.use(axios)
window.app = app
app.mount('#app')
