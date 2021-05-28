import Vue from 'vue'
import VueRouter from 'vue-router'
import Einarbeitstitel from '../views/Einarbeitstitel.vue'
import Anlassgebundenesfreigebaeckblaupauseneditor from '../views/Anlassgebundenesfreigebaeckblaupauseneditor.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blech',
    component: Einarbeitstitel,
  },
  {
    path: '/blaupause',
    name: 'Blaupause',
    component: Anlassgebundenesfreigebaeckblaupauseneditor,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: 'http://localhost:8080',
  routes
})

export default router
