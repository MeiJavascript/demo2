import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Index
    }
  ]
})
