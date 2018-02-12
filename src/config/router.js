import Vue from 'vue'
import Router from 'vue-router'

import DefaultHome from '../components/DefaultHome'
import Sample from '../components/Sample'


Vue.use(Router)

export default new Router ({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'default-home',
      component: DefaultHome
    },
    {
      path: '/sample',
      name: 'sample',
      component: Sample
    }
  ]
})
