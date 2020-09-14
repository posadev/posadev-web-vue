<template>
  <SectionHero class="section-home section-white" :title="sponsorsTexts">
    <template v-slot:hero-header>
      <AccentActionButton
        id="btn-cfs"
        class="section-button"
        :info="sponsorsInfo"
        v-on:button-action="onCFSClick"
      />
    </template>
    <template v-slot:hero-body>
      <SponsorList />
    </template>
  </SectionHero>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import TitleTexts from '@/data/TitleTexts.model';
import ButtonInfo from '@/data/ButtonInfo.model';
import SectionHero from '@/components/SectionHero.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import SponsorList from '@/components/SponsorList.vue';
import BannerLogoContainer from '@/di/BannerLogoContainer';

@Component({
  components: {
    SectionHero,
    AccentActionButton,
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

  private get sponsorsInfo(): ButtonInfo {
    return new ButtonInfo(this.$t('home.sponsors.topButton'));
  }

  private onCFSClick() {
    window.open(
      'https://docs.google.com/document/d/1zWYvQ3RUKzu1ohTfcbYYdzQZd-0_YhgStFIWUEGFrRY/edit?usp=sharing'
    );
  }
}
</script>

<style lang="scss">
.section-button {
  display: none;
}
</style>
