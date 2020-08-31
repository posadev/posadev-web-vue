import Vue from 'vue';
import App from './App.vue';
import router from './router';
import localeHandler from './localeHandler';
import firebase from 'firebase/app';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MSG_SENDER,
  appId: process.env.VUE_APP_FIREBASE_APP,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const i18n = localeHandler.getI18n();

new Vue({
  router,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
