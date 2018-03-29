import Vue from 'vue'
import Router from 'vue-router'
import Xiao from '@/components/pages/index'
import New from '@/components/pages/new'
import Girl from '@/components/pages/girl'
import Center from '@/components/pages/center'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'xiao',
      component: Xiao
    },
    {
      path: '/xiao',
      name: 'xiao',
      component: Xiao,
      children:[

      ]
    },
    {
      path: '/new',
      name: 'new',
      component: New,
      children:[

      ]
    },
    {
      path: '/girl',
      name: 'girl',
      component: Girl,
      children:[

      ]
    },
    {
      path: '/center',
      name: 'center',
      component: Center,
      children:[

      ]
    }
  ]
})
