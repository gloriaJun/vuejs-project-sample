import Vue from 'vue'
import Router from 'vue-router'

import DefaultHome from '../components/DefaultHome'
import Sample from '../components/Sample'
import NotFound from '../components/NotFound'


Vue.use(Router)

export default new Router ({
  routes: [
    {
      path: '/',
      component: DefaultHome
    },
    {
      path: '/sample',
      component: Sample
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
