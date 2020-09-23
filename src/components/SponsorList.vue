<template>
  <div class="columns">
    <SponsorBanner
      class="column col-3 col-md-3 col-xs-5"
      v-for="banner in sponsorBanners"
      v-bind:key="banner.id"
      :banner-logo="banner"
    />
  </div>
</template>

<script lang="ts">
import SponsorBanner from '@/components/SponsorBanner.vue';
import { Component, Inject, Vue } from 'vue-property-decorator';
import { FirestoreService } from '@/service/FirestoreService';
import BannerLogo from '@/data/BannerLogo.model';

@Component({
  components: { SponsorBanner }
})
export default class SponsorList extends Vue {
  @Inject('sponsor_banner')
  private service!: FirestoreService<BannerLogo>;

  private sponsorBanners: BannerLogo[] = [];

  private created() {
    this.service
      .findAll(['include', '==', true])
      .then((banners: BannerLogo[]) => {
        this.sponsorBanners.push(...banners);
      })
      .catch((err: string) => {
        err;
      });
  }
}
</script>
<style lang="scss">
@import '../styles/variables';
@import '~spectre.css/src/_layout';

.columns {
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
}
</style>
