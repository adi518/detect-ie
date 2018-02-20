import Vue from 'vue'
import Router from 'vue-router'
import HellowWorld from '@/components/HellowWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HellowWorld',
      component: HellowWorld
    }
  ]
})
