import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'portfolio',
        component: () => import('@/views/HomePage.vue'),
        beforeEnter() {
          window.location.href = 'https://github.com/EthanHarsh';
        }
      },
      {
        path: 'writing',
        component: () => import('@/views/HomePage.vue'),
        beforeEnter() {
          window.location.href = 'https://blog.ethanharsh.com/';
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
