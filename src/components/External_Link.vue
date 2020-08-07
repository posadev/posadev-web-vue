<template>
  <div>
    <button id="externalLink" @click="goToLink()">
      {{ this.description }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ExternalLink from '@/components/external_link.model';

@Component
export default class Link extends Vue {
  @Prop() private external!: ExternalLink;
  @Prop() private description!: string;

  private goToLink(): void {
    window.open(this.external.url);
  }
}
</script>
