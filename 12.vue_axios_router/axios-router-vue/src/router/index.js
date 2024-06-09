import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../pages/HomeView.vue';

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
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../pages/Todo.vue'),
    },
  ],
});

export default router;
