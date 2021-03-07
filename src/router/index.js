import Vue from 'vue'
import Router from 'vue-router'
import Chat from '@/pages/Chat'
import Info from '@/pages/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '自己紹介',
      component: Info
    },
    {
      path: '/portfolio/chat',
      name: 'Chat',
      component: Chat
    }
  ]
})
