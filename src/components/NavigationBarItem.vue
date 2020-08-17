<template>
  <div>
    <a @click="goToNavigationLink()"><slot></slot></a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavigationBarItem extends Vue {
  @Prop() private path?: string;

  private goToNavigationLink(): void {
    //
  }
}
</script>
