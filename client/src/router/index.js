import Vue from 'vue'
import VueRouter from 'vue-router'
import Einarbeitstitel from '../views/Einarbeitstitel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blech',
    component: Einarbeitstitel
  },
]

const router = new VueRouter({
  mode: 'history',
  base: 'http://localhost:8080',
  routes
})

export default router
