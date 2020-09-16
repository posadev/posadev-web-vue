import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import { dictionaryToSpeaker } from './utils';

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
    component: () => import('@/views/CommunitiesView.vue')
  },
  {
    path: '/sponsors/:id',
    name: 'sponsors',
    component: () => import('@/views/SponsorView.vue')
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('@/views/SpeakersAll.vue')
  },
  {
    path: '/speakers/:fullName',
    name: 'speakers/detail',
    props(router) {
      return {
        speaker: dictionaryToSpeaker(router.params)
      };
    },
    component: () => import('@/views/SpeakerSingleView.vue')
  },
  {
    path: '/developers',
    name: 'developers',
    component: () => import('@/views/Developers.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
