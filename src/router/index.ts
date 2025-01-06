import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Parent from '../views/ParentComponent.vue';
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
      path: '/page/:jsonFile',
      name: 'page',
      component: Parent,
    },
  ],
});

export default router;
