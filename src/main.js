import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAnime from 'vue-animejs'
import { routes } from './routes.js'

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

Vue.use(VueAnime);
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
