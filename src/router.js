import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    {
        path: '/welcome',
        component: () => import('./components/WelcomePage.vue'),
      },
      {
        path: '/login',
        component: () => import('./components/LoginPage.vue'),
      },
      {
        path: '/register',
        component: () => import('./components/RegisterPage.vue'),
      },
      {
        path: '/home',
        component: () => import('./components/HomePage.vue'),
      },
      {
        path: '/recipe',
        component: () => import('./components/RecipePage.vue'),
      },
      {
        path: '/admin/home',
        component: () => import('./components/admin/AdminHomePage.vue'),
      },
      {
        path: '/admin/recipe',
        component: () => import('./components/admin/AdminRecipePage.vue'),
      },
];

const router = new createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
