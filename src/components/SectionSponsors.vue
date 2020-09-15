<template>
  <SectionHero class="section-home section-white" :title="sponsorsTexts">
    <template v-slot:hero-body>
      <SponsorList />
    </template>
  </SectionHero>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import TitleTexts from '@/data/TitleTexts.model';
import SectionHero from '@/components/SectionHero.vue';
import SponsorList from '@/components/SponsorList.vue';
import BannerLogoContainer from '@/di/BannerLogoContainer';

@Component({
  components: {
    SectionHero,
    SponsorList
  }
})
export default class SectionSponsors extends Mixins(BannerLogoContainer) {
  private get sponsorsTexts(): TitleTexts {
    return new TitleTexts(
      this.$t('home.sponsors.title'),
      this.$t('home.sponsors.subtitle')
    );
  }
}
</script>

<style lang="scss"></style>
