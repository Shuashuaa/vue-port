import './css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import VueKinesis from "vue-kinesis";

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify) //mdi
  .use(createPinia())
  .use(VueKinesis)
  .mount('#app')
