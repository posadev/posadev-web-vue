<template>
  <div id="app">
    <div>
      <button
        v-for="entry in languages"
        :key="entry.id"
        :id="entry.id"
        @click="changeLocale(entry.locale)"
      >
        {{ entry.title }}
      </button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import localeHandler from '@/localeHandler';
import { Locales } from './locale';

@Component
export default class App extends Vue {
  data() {
    return {
      languages: [
        { id: 'en', title: 'English', locale: Locales.EN },
        { id: 'es', title: 'Español', locale: Locales.ES }
      ]
    };
  }

  changeLocale(locale: Locales): void {
    localeHandler.changeLocale(locale);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
