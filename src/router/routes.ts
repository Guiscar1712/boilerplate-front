import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/Logged.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/login',
    component: () => import('layouts/NotLogged.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
