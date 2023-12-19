import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'

const pinia = createPinia();

loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
