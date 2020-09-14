<template>
  <div>
    <a @click="goToNavigationLink">
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavigationBarItem extends Vue {
  @Prop({ required: true }) private path!: string;

  private goToNavigationLink(): void {
    if (this.path.startsWith('#')) {
      const section = document.getElementById(this.path.substring(1));
      console.log('Located!!!!!', section);
      section?.scrollIntoView();
    }
  }
}
</script>
