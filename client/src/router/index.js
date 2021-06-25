import Vue from 'vue';
import VueRouter from 'vue-router';
import Begruessungsseite from '../views/Begruessungsseite.vue';
import Einarbeitstitel from '../views/Einarbeitstitel.vue';
import Anlassgebundenesfreigebaeckblaupauseneditor from '../views/Anlassgebundenesfreigebaeckblaupauseneditor.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Blech',
    component: Begruessungsseite,
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
  routes
})

export default router
