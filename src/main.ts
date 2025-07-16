import { createSSRApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import Oruga from "@oruga-ui/oruga-next";
// import "@oruga-ui/theme-oruga/dist/oruga.css";

import { bootstrapConfig } from '@oruga-ui/theme-bootstrap';
import '@oruga-ui/theme-bootstrap/dist/bootstrap.css';
import '@mdi/font/css/materialdesignicons.min.css';


// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
// import '@mdi/font/css/materialdesignicons.min.css'

// import './assets/bootstrap.css'
import './assets/main.css'


// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  app.use(pinia)
  app.use(router)
  // app.use(Oruga)
  app.use(Oruga, bootstrapConfig)
  return { app, router }
}