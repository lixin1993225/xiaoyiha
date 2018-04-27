import Vue from 'vue'
import Router from 'vue-router'
// import Xiao from '@/components/pages/index'
// import New from '@/components/pages/new'
// import NewIndex from '@/components/pages/newindex'
// import NewDetail from '@/components/pages/secondpage/newdetails'
// import Girl from '@/components/pages/girl'
// import Center from '@/components/pages/center'
// import Player from '@/components/pages/secondpage/videoplaer'
// import Shipin from '@/components/pages/centerindex'
//下边的写法为按需加载
const Xiao = () =>import(/*webpackChunkName:'xiao'*/ '@/components/pages/index.vue')
const New = () =>import(/*webpackChunkName:'new'*/ '@/components/pages/new.vue')
const NewIndex = () =>import(/*webpackChunkName:'newindex'*/ '@/components/pages/newindex.vue')
const NewDetail = () =>import(/*webpackChunkName:'newdetail'*/ '@/components/pages/secondpage/newdetails.vue')
const Girl = () =>import(/*webpackChunkName:'girl'*/ '@/components/pages/girl.vue')
const Center = () =>import(/*webpackChunkName:'genter'*/ '@/components/pages/center.vue')
const Player = () =>import(/*webpackChunkName:'player'*/ '@/components/pages/secondpage/videoplaer.vue')
const Shipin = () =>import(/*webpackChunkName:'shipin'*/ '@/components/pages/centerindex.vue')

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
      path: 'xiao',
      name: 'xiao',
      component: Xiao,
      meta:{keepAlive:true},
      children:[

      ]
    },
    {
      path: 'new',
      name: 'new',
      component: New,
      meta:{keepAlive:true},
      children:[
        {
          path:'/',
          name:'newindex',
          component:NewIndex
        },
        {
          path:'newdetail',
          name:'newdetail',
          component:NewDetail
        }
      ]
    },
    {
      path: 'girl',
      name: 'girl',
      component: Girl,
      meta:{keepAlive:true},
      children:[

      ]
    },
    {
      path: 'center',
      name: 'center',
      component: Center,
      meta:{keepAlive:true},
      children:[
        {
          path: '/',
          name: 'shipin',
          component: Shipin
        },
        {
          path: 'player',
          name: 'player',
          component: Player
        }
      ]
    }
  ]
})
