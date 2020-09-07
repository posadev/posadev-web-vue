<template>
  <div id="app">
    <div>
      <NavigationBar />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
import { Component, Mixins } from 'vue-property-decorator';
import localeHandler from '@/localeHandler';
import { Language, Locales } from './locale';
import CommunityContainer from '@/di/CommunityContainer';

@Component({
  components: { NavigationBar }
})
export default class App extends Mixins(CommunityContainer) {
  get languages(): Language[] {
    return [
      { id: 'en', title: 'English', locale: Locales.EN },
      { id: 'es', title: 'Español', locale: Locales.ES }
    ];
  }

  private changeLocale(locale: Locales): void {
    localeHandler.changeLocale(locale);
  }
}
</script>

<style lang="scss">
@import 'styles/jconf';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $primary-dark-color;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $primary-dark-color;
  }
}
</style>
