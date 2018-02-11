/*
  assets
 */
import './assets/style/custom-bootstrap.scss';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './assets/style/style.scss';

import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
