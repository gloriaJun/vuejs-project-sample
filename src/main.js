import Vue from 'vue'

import App from './app/App.vue'
import router from './router/index.js'

/*
  styles
 */
import './assets/style/custom-bootstrap.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './assets/style/main.scss';



new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
