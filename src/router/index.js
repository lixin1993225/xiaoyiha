import Vue from 'vue'
import Router from 'vue-router'
import Xiao from '@/components/pages/index'
import New from '@/components/pages/new'
import Girl from '@/components/pages/girl'
import Center from '@/components/pages/center'
import Player from '@/components/pages/secondpage/videoplaer'
import Shipin from '@/components/pages/centerindex'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'xiao',
      component: Xiao,
      meta:{keepAlive:true}
    },
    {
      path: '/xiao',
      name: 'xiao',
      component: Xiao,
      meta:{keepAlive:true},
      children:[

      ]
    },
    {
      path: '/new',
      name: 'new',
      component: New,
      meta:{keepAlive:true},
      children:[

      ]
    },
    {
      path: '/girl',
      name: 'girl',
      component: Girl,
      meta:{keepAlive:true},
      children:[

      ]
    },
    {
      path: '/center',
      name: 'center',
      component: Center,
      meta:{keepAlive:true},
      children:[
        {
          path: '/',
          name: 'shipin',
          component: Shipin
        },
        // {
        //   path: 'shipin',
        //   name: 'shipin',
        //   component: Shipin
        // },
        {
          path: 'player',
          name: 'player',
          component: Player
        }
      ]
    }
  ]
})
