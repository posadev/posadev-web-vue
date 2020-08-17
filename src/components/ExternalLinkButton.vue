<template>
  <div class="soon-container">
    <button @click="goToLink()">
      {{ this.external.description }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ExternalLink from '@/components/ExternalLink.model';

@Component
export default class ExternalLinkButton extends Vue {
  @Prop() private external!: ExternalLink;

  private goToLink(): void {
    window.open(this.external.url);
  }
}
</script>

<style lang="scss">
.soon-container {
  width: 416px;
  height: 58px;

  button {
    width: 100%;
    height: 100%;
    font: {
      family: Roboto, Helvetica, Arial, sans-serif;
      style: normal;
      weight: bold;
      size: 16px;
    }
    background-color: #f59f00;
    border: 1px solid transparent;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.8);
  }
}
</style>
