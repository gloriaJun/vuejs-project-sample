import Vue from 'vue'

import App from './app/App.vue'
import router from './router/index.js'

/*
 plugin
 */
import 'bootstrap'
import 'admin-lte'

/*
  styles
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css'
import 'admin-lte/dist/css/skins/_all-skins.min.css'
import 'font-awesome/css/font-awesome.min.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
