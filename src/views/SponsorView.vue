<template>
  <div class="sponsor-section">
    <ViewHeader :header-texts="headerText" />
    <SponsorInfo :sponsor-id="sponsorId" />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import SponsorInfo from '@/components/SponsorInfo.vue';
import ViewHeader from '@/components/ViewHeader.vue';
import TitleTexts from '@/data/TitleTexts.model';
import SponsorContainer from '@/di/SponsorContainer';

@Component({
  components: {
    ViewHeader,
    SponsorInfo
  }
})
export default class SponsorView extends Mixins(SponsorContainer) {
  private sponsorId = this.$router.currentRoute.params['id'];

  private get headerText() {
    return new TitleTexts(
      this.$t('sponsor.titleSection'),
      this.$t('sponsor.subtitleSection')
    );
  }
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.sponsor-section {
  margin: {
    bottom: 45px;
  }
}
</style>
