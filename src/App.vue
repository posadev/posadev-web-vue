<template>
  <div id="app">
    <NavigationBar />
    <router-view class="content-info" />
    <Footer />
  </div>
</template>

<script lang="ts">
import NavigationBar from '@/components/NavigationBar.vue';
import Footer from '@/components/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';
import localeHandler from '@/localeHandler';
import { Language, Locales } from './locale';

@Component({
  components: { NavigationBar, Footer }
})
export default class App extends Vue {
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
  min-height: 100%;
  height: auto !important;
  text-align: center;
  color: $primary-dark-color;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $primary-dark-color;
  }
}

.content-info {
  min-height: calc(100vh - 305px);
}
</style>
