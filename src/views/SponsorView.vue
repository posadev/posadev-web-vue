<template>
  <div class="sponsor-section">
    <ViewHeader :header-texts="headerText" />
    <SponsorInfo :sponsor="sponsor" />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import Sponsor from '@/data/Sponsor.model';
import SponsorInfo from '@/components/SponsorInfo.vue';
import sponsors from '@/mocks/Sponsors.mock';
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
  private get headerText() {
    return new TitleTexts(
      this.$t('sponsor.titleSection'),
      this.$t('sponsor.subtitleSection')
    );
  }

  get sponsor(): Sponsor {
    //FIXME: this is obtained from firebase
    return sponsors[0];
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
