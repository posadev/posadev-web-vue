import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/communities',
    name: 'communities',
    component: () => import('@/views/Communities.vue')
  },
  {
    path: '/sponsors',
    name: 'sponsors',
    component: () => import('@/views/SponsorView.vue')
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('@/views/SpeakersAll.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
