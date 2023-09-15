import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/home',
        component: () => import('./components/HomePage.vue'),
      },
      {
        path: '/login',
        component: () => import('./components/LoginPage.vue'),
      },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
