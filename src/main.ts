import Vue from 'vue';
import App from './App.vue';
import router from './router';
import localeHandler from './localeHandler';

Vue.config.productionTip = false;

const i18n = localeHandler.getI18n();

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');
