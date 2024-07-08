import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Message from '@/pages/message/Index.vue'
import MessageDetail from '@/pages/message/Detail.vue'
import path from 'path'

const routes = [
  // { path: '/', component: Index },
  { path: '/home', component: Home },
  { path: '/about', name: '/about', component: About },
  {
    path: '/message', component: Message, children: [
      // {name:'/message/detail', path: '/message/detail', component: MessageDetail },
      { name: '/message/detail', path: '/message/detail/:id/:title', component: MessageDetail }
    ]
  },
  { path: '/', redirect: '/home' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router