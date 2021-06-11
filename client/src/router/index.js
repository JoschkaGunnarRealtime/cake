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
    path: '/%F0%9F%98%B2%E2%8F%AA%F0%9F%8D%B0/:anlassgebundenesfreigebaeckidentifikationsnummer',
    name: '😲⏪🍰',
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
