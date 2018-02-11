import Vue from 'vue'

import App from './App.vue'
import router from './router/routes.js'

/*
  styles
 */
import './assets/style/custom-bootstrap.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './assets/style/style.scss';



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
