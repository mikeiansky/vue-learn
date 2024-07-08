import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Message from '@/pages/message/Index.vue'
import MessageDetail from '@/pages/message/Detail.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/message', component: Message , children : [
    { path: '/message/detail/:id', component: MessageDetail }
  ]},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router