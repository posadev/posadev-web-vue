import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import Speaker from '@/data/Speaker.model';

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
    path: '/sponsors/:id',
    name: 'sponsors',
    component: () => import('@/views/SponsorView.vue')
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: () => import('../views/SpeakersAll.vue')
  },
  {
    path: '/speakers/:fullName',
    name: 'speakers/detail',
    props(router) {
      return {
        speaker: new Speaker(
          router.params['bio'],
          router.params['company'],
          router.params['firstName'],
          router.params['lastName'],
          router.params['role'],
          new URL(router.params['photoURL']),
          JSON.parse(router.params['socialMedia'])
        )
      }
    },
    component: () => import('../views/SpeakerSingle.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
