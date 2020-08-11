<template>
  <div>
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
