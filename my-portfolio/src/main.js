import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import DetailView from './views/DetailView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/project/:id', component: DetailView }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')