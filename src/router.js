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
    path: '/recipe/brownies',
    component: () => import('./components/Recipes/RecipeBrowniesPage.vue'),
  },
  {
    path: '/recipe/pancakes',
    component: () => import('./components/Recipes/RecipePancakePage.vue'),
  },
  {
    path: '/recipe/cheesecake',
    component: () => import('./components/Recipes/RecipeCheesecakePage.vue'),
  },
  {
    path: '/recipe/carrotcake',
    component: () => import('./components/Recipes/RecipeCarrotCakePage.vue'),
  },
  {
    path: '/recipe/bananabread',
    component: () => import('./components/Recipes/RecipeBananaBreadPage.vue'),
  },
  {
    path: '/recipe/cookies',
    component: () => import('./components/Recipes/RecipeCookiesPage.vue'),
  },
  {
    path: '/admin/home',
    component: () => import('./components/admin/AdminHomePage.vue'),
  },
  {
    path: '/admin/recipe/add',
    component: () => import('./components/admin/AdminRecipePage.vue'),
  },
  {
    path: '/admin/parameter',
    component: () => import('./components/admin/AdminParameterPage.vue'),
  },
  {
    path: '/admin/recipe',
    component: () => import('./components/admin/RecipePage.vue'),
  },
  {
    path: '/recipe/detail',
    component: () => import('./components/Recipes/RecipeDetails.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
