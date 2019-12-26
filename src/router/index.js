import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Result from '@/views/result'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
