import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstPageView from '../views/FirstPageView.vue'
import SecondPageView from '../views/SecondPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/firstPage',
      name: 'firstPage',
      component: FirstPageView,
    },
    {
      path: '/secondPage',
      name: 'secondPage',
      component: SecondPageView,
    },
  ],
})

export default router
