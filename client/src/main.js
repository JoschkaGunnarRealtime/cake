import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed';


Vue.config.productionTip = false;

Vue.use(VueYouTubeEmbed);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
