<template>
  <div>
    <a @click="goToNavigationLink">
      <slot></slot>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavigationBarItem extends Vue {
  @Prop({ required: true }) private path!: string;

  private goToNavigationLink(): void {
    if (this.path.startsWith('#')) {
      this.onIdPath();
    } else {
      this.onPath();
    }
  }

  @Emit('scroll-to')
  private onIdPath(): string {
    return this.path.substring(1);
  }

  @Emit('go-to')
  private onPath(): string {
    return this.path;
  }
}
</script>
