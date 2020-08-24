<template>
  <div class="sponsor" @click="goToLink">
    <img :src="this.sponsor.pic" :alt="this.sponsor.name" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Sponsor from '@/data/Sponsor.model';

@Component
export default class SponsorItem extends Vue {
  @Prop({ required: true }) private sponsor!: Sponsor;

  private goToLink(): void {
    window.open(this.sponsor.url.toString());
  }
}
</script>
<style lang="scss">
</style>
