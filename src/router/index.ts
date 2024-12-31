import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FirstPageView from '../views/FirstPageView.vue';
import SecondPageView from '../views/SecondPageView.vue';
import ThirdPageView from '@/views/ThirdPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
    {
      path: '/thirdPage',
      name: 'thirdPage',
      component: ThirdPageView,
    },
  ],
});

export default router;
