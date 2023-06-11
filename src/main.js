import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { Chart } from 'chart.js'

Chart.register()

loadFonts()

createApp(App).use(router).use(vuetify).mount('#app')
