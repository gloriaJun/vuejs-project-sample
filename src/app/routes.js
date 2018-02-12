import { routes as moduleA } from './moduleA'
import NotFound from './NotFound.vue'

export default [
  ...moduleA,
  {
    path: '*',
    component: NotFound
  }
]
