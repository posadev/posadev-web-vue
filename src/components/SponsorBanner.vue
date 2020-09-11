<template>
  <div @click="goToLink">
    <img class="logo" :src="this.bannerLogo.banner" :alt="bannerLogo.id" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BannerLogo from '@/data/BannerLogo.model';

@Component
export default class SponsorBanner extends Vue {
  @Prop({ required: true }) private bannerLogo!: BannerLogo;

  private goToLink(): void {
    // window.open(this..url.toString());
  }
}
</script>
<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';

.logo {
  width: 100%;
}
</style>
