<template>
  <div @click="goToLink()">
    <p>{{ this.item.name }}</p>
    <img :src="this.item.pic" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sponsor from '@/components/Sponsor.model';

@Component
export default class SponsorItem extends Vue {
  @Prop() private item!: Sponsor;

  private goToLink(): void {
    window.open(this.item.url);
  }
}
</script>
